# 路由matcher的实现原理

本文主要介绍`vue-router@4.x`中的`router matcher`的实现。

在官方文档当中，`vue-router`的创建需要调用`createRouter`方法，并且传入配置项`options`,返回一个`router`实例对象。
## createRouter

```js
const router = createRouter(options)
```

|名称|类型|描述|
|---|---|---|
|`options`|[`RouterOptions`](https://router.vuejs.org/zh/api/interfaces/RouterOptions.html)|[RouterOptions](https://router.vuejs.org/zh/api/interfaces/RouterOptions.html)|

`createRouter`方法第一步会根据传入的路由配置列表，为每一项创建**matcher**，`matcher`表示每一个路由页面的匹配器，包含路由的常规方法。而内部需要创建`matcher`则需要调用``
`createRouterMatcher`方法。
## createRouterMatcher

`craeteRouterMacther`方法需要传入两个参数，第一个参数是路由配置项的路由表（`options.route`），第二个参数是路由配置项（`options`）。返回`{ addRoute, resolve, removeRoute, getRoutes, getRecordMatcher }`五个方法。这五个方法就是围绕`matcher`进行增删改查操作。

## createRouterMatcher执行过程

`createRouterMatcher`方法首先定义了`matchers`和`matcherMap`两个变量，分别存储`matcher`对象和（TODO: matcherMap的作用）。定义了 `getRecordMatcher`，`addRoute`，`removeRoute`，`getRoutes`，`insertMatcher`和`resolve`一共六个方法。主要遍历路由表调用`addRoute`实现`matcher`的生成，最终返回`{ addRoute, resolve, removeRoute, getRoutes, getRecordMatcher }`帮助`matcher`进行增删改查的操作。

![[./image/Vue Router/createRourerMatcher源码.webp]]

### addRoute方法

#### 标准化record和合并options

```ts
// used later on to remove by name
    const isRootAdd = !originalRecord
    // 对路由项 record 进行标准化
    const mainNormalizedRecord = normalizeRouteRecord(record)
    if (__DEV__) {
      checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent)
    }
    // we might be the child of an alias
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record
    const options: PathParserOptions = mergeOptions(globalOptions, record)
    // generate an array of records to correctly handle aliases
    const normalizedRecords: (typeof mainNormalizedRecord)[] = [
      mainNormalizedRecord,
    ]
```

首先会调用`normalizeRouteRecord`对`record`进行标准化处理，这里的`normalizeRouteRecord`的方法本质其实是将传入的`record`转化为一个标准的`matcher`数组元素。

```ts
export function normalizeRouteRecord(
  record: RouteRecordRaw
): RouteRecordNormalized {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: undefined,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in record
        ? record.components || null
        : record.component && { default: record.component },
  }
}
```

`mainNormalizedRecord.aliasOf`属性定义了是否这条记录是另一条的别名。如果记录是原始记录，则该属性为`undefined`。

`mergeOptions`方法主要是合并传入的全局参数`globalOptions`和自身路由记录`record`的配置。

```ts
function mergeOptions<T extends object>(
  defaults: T,
  partialOptions: Partial<T>
): T {
  const options = {} as T
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key]! : defaults[key]
  }
  return options

}
```

因此会先判断全局配置`globalOptions`是否存在当前配置属性，如果`globalOptions`不存在，即使子路由表配置也会无效，如果存在，会优先使用子路由表`record`的配置。

#### 处理别名参数alias

`alias`表示路由的别名，和路由重定向不同，它不会修改访问的`url`，所以在处理`alias`参数的时候，相当于新增一条可以访问的路由。

```ts
   // 判断别名路由，如果存在别名，全部转化为数组形式 alias: "a" -> alias: ["a"], 并且存储到 aliases 进行遍历操作
    if ('alias' in record) {
      const aliases =
        typeof record.alias === 'string' ? [record.alias] : record.alias!
      // 处理别名路由
      for (const alias of aliases) {
        normalizedRecords.push(
          assign({}, mainNormalizedRecord, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: originalRecord
              ? originalRecord.record.components
              : mainNormalizedRecord.components,
            path: alias,
            // we might be the child of an alias
            aliasOf: originalRecord
              ? originalRecord.record
              : mainNormalizedRecord,
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }) as typeof mainNormalizedRecord
        )
      }
    }
```

需要注意的是，在处理`alias`的时候，会统一转化为数组`aliases`进行遍历。在遍历的过程当中往`normalizedRecords`新增一条标准路由对象`record`。

```ts
const normalizedRecords: (typeof mainNormalizedRecord)[] = [
      mainNormalizedRecord,
    ]
```

配置上一步初始化`normalizedRecords`可以保证第一条路由肯定不是别名路由，帮助后面判断是否是别名路由进行判断，保证存在别名路由的时候，`originalRecord`是第一条路由的路由，别名路由是第一条路由的别名。

#### 遍历normalizedRecords，处理嵌套路由的path参数和生成匹配器

```ts
for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord
      if (parent && path[0] !== '/') {
        // 判断子路由的路径是否是绝对路径还是相对路径
        // path: "list" -> parent + list
        // path: "/list" -> /list
        const parentPath = parent.record.path
        // 连接符
        const connectingSlash =
          parentPath[parentPath.length - 1] === '/' ? '' : '/'
        normalizedRecord.path =
          parent.record.path + (path && connectingSlash + path)
      }
      // create the object beforehand, so it can be passed to children
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options)
    }
```

首先会处理`path`，此时存在嵌套路由的时候，会存在`parent`，并且此时子路由是相对路径，不存在`/`，此时需要判断`parent`的`path`最后是否携带`/`连接符`connectingSlash`，最后对父子路由的`path`进行拼接得到当前路由的`path`。

处理完`path`之后，会把标准路由对象传入`createRouteRecordMatcher`方法当中，生成相应的匹配器，帮助后续的`path`匹配到相对应的路由。

#### 处理originRecord

```ts
for (const normalizedRecord of normalizedRecords) {
	if (originalRecord) {
	        originalRecord.alias.push(matcher)
	      } else {
	        // otherwise, the first record is the original and others are aliases
	        originalMatcher = originalMatcher || matcher
	        if (originalMatcher !== matcher)  originalMatcher.alias.push(matcher)
	        // remove the route if named and only for the top record (avoid in nested calls)
	        // this works because the original record is the first one
	        if (isRootAdd && record.name && !isAliasRecord(matcher))
	          removeRoute(record.name)
	      }
 }
```

当`originalRecord`存在的时候，说明此时就是别名路由，直接把当前的`matcher`放入`originalRecord.alias`当中。

当`originalRecord`不存在的时候，将第一个`matcher`当中`originalRecord`进行处理，表示他是主路由，其他的都是别名路由。当再次遍历的时候，当`matcher`和`originalMatcher`不相等的时候，说明此时是别名路由`matcher`，放入到`originalMatcher`当中。

`isAliasRecord`方法会判断是否是`record`和`record`的祖先路由是否是别名路由，然后删除非别名路由。

#### 循环遍历子路由，循环调用addRoute方法处理子路由

```ts
function addRoute( /*相关参数*/ ) {
  for (const normalizedRecord of normalizedRecords) {
    // 5. 遍历子路路由，循环调用 addRoute 方法处理子路由
    if (mainNormalizedRecord.children) {
      const children = mainNormalizedRecord.children
      for (let i = 0; i < children.length; i++) {
        addRoute(
          children[i],
          matcher,
          originalRecord && originalRecord.children[i]
        )
      }
    }
  }
}

```

#### 插入matcher

```ts
function addRoute( /*相关参数*/ ) {
  for (const normalizedRecord of normalizedRecords) {
    // 排除掉没有定义 components、name、redirect 其中一个的 matcher，避免无法展示路由内容
    if (
      (matcher.record.components &&
        Object.keys(matcher.record.components).length) ||
      matcher.record.name ||
      matcher.record.redirect
    ) {
      insertMatcher(matcher)
    }
  }
}
```

在插入路由之前，排除掉没有定义`components`、`name`、`redirect`其中一个的 `matcher`，避免无法展示路由内容。然后调用`insertMatcher`方法插入到`matchers`匹配数组当中。

#### 删除原始路由matcher后的matcher集合

```ts
function addRoute( /*相关参数*/ ) {
  return originalMatcher
      ? () => removeRoute(originalMatcher!) 
      : noop
}
```
