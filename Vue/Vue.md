## Vue基础

### 1. Vue的原理

当一个组件实例被创建时，`Vue`会遍历`data`中的属性，并通过`Object.defineProperty()`（`Vue3`中使用`Proxy`）设置相应的`setter`和`getter`，在内部追踪相关的依赖，在组件被访问和修改时通知变化。每个组件都有相应的`watcher`实例，它会在组件渲染的过程中把属性记录为依赖，之后每当依赖项的`setter`调用时，会通知`watcher`重新计算，致使与它关联的组件进行更新。

![0_tB3MJCzh_cB6i3mS-1.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1b16025a35b4cd2b343a92e740621b7~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 2. 双向数据绑定的原理

### 3. 使用 Object.defineProperty() 来进行数据劫持有什么缺点？

* `Vue2`中使用`Object.defineProperty()`方法进行数据劫持，需要对各个属性进行重写，添加`setter`和`getter`方法，遇到对象深层嵌套，需要递归遍历，开销较大。
* 数组不采用`Object.defineProperty()`方法进行劫持，浪费性能，需要对数组单独处理，并且重写数组的相关方法。
* `Object.defineProperty()`方法不支持ES6中的`Set`，`Map`数据类型结构进行响应式代理。
* `Object.defineProperty()`方法对对象新增或者删除属性无法监控到变化，需要调用`Vue2`中的`set`和`delete`方法进行响应式处理。

在`Vue3`中通过`Proxy`对对象进行代理，实现数据劫持。该方法唯一的缺点就是兼容性问题。

### 5. Computed 和 Watch 的区别

**`computed`**

* `computed`计算属性支持缓存，只有依赖的数据变化时，才会触发计算属性的更新
* 不支持异步的操作
* 计算属性可以在模板当中使用，简化复杂的操作

**原理**

* 在`Vue`中`computed`是通过维护一个`dirty`属性实现缓存功能，当`dirty`为`false`时，计算属性会直接使用缓存的数据，不进行计算。当`dirty`为true时，计算属性会重新执行方法，计算新的`value`值。

**`watch`**

* `watch`不支持缓存，一旦数据更新，立即执行相应的操作
* 支持异步操作
* `immediate`立即执行，`deep`深度监听

**原理**

* `Vue2`和`Vue3`底层分别创建`watcher`对象和`reactiveEffect`对象，实现数据变化，立即执行相关操作。

### 6. Computed 和 Methods 的区别

可以将同一个函数定义为`methods`或者`computed`，最终的结果二者相同

**不同点：**

- computed: 计算属性是基于它们的依赖进行缓存的，依赖于缓存属性，只有在它的相关依赖发生改变时才会重新求值；
- method 调用总会执行该函数。

### 13. v-if和v-show的区别

* `v-if`在`Vue`中的模板编译阶段，根据条件判断该`DOM`元素是否编译或者卸载，而`v-show`是在渲染阶段，给`DOM`元素设置`display`样式控制显隐。
* `v-if`适合页面不频繁改动的场景，而`v-show`适合页面频繁改动的场景。
* `v-if`是惰性的，如果初始判断条件为假，即阻断后续代码的执行，不进行编译，而`v-show`无论初始条件如何，都会进行模板编译，然后缓存，被页面保留。
* `v-if`有更高的切换消耗，`v-show`有更高的初始渲染消耗。

### 27. Vue是如何收集依赖的

* 在`Vue2`中，每一个`Vue`组件初始化时，会调用`$mount`方法进行挂载，在模板编译的过程中，会执行`defineReactive()`方法对数据进行响应式操作。每一个属性都对应一个`dep`存放所依赖的`watcher`。默认在渲染的过程中会获取响应式数据触发`getter`方法，内部执行`dep.depend()`方法收集依赖。当数据更新时，会触发`setter`方法，内部执行`dep.notify()`方法更新数据。

* 在`Vue3`中，会通过`WeakMap`对象将每一个属性和`effect`进行映射，在属性被读取时触发`getter`方法，内部执行`track()`方法收集依赖，在数据更新时，会找到对应的`effect`对象，执行`trigger()`方法进行更新。

### 43. v-if 与 v-for优先级判断

* 在`Vue2`中，`v-for`的优先级要高于`v-if`，在源码中通过`if-else`语句进行判断，会先解析`v-for`遍历列表元素，在解析`v-if`判断元素的隐藏与显示。

* 在`Vue3`中，`v-if`的优先级要高于`v-for`，在源码中通过`switch-case`语句进行判断，会先解析`v-if`，在解析`v-for`判断元素的隐藏与显示。

  **解决办法：**设置**计算属性**过滤所需要展示的数据，提高性能。计算属性的性能相对更高一些。

