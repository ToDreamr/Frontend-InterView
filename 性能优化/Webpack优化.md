## Webpack优化

### 1. 如何提⾼**webpack**的打包速度?

* **优化loader配置**

  Webpack在使用loader时，可以配置include，exclude，text属性来匹配文件。

  同时我们也可以设置缓存的文件，将编译后的文件缓存起来，下次只需要编译更改后的文件即可。

  ~~~javascript
  module.exports = {
    module: {
      rules: [
        {
          // js 文件才使用 babel
          test: /\.js$/,
          loader: 'babel-loader?cacheDirectory=true',
          // 只在 src 文件夹下查找
          include: [resolve('src')],
          // 不会去查找的路径
          exclude: /node_modules/
        }
      ]
    }
  }
  ~~~

* **HappyPack**

  因为JavaScript是单线程的，所以Webpack打包的时候也是单线程的，因此在执行编译任务的时候，会出现长时间等待的情况。

  **HappyPack 可以将 Loader 的同步执行转换为并行的**，这样就能充分利用系统资源来加快打包效率了。

  ~~~javascript
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        // id 后面的内容对应下面
        loader: 'happypack/loader?id=happybabel'
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'happybabel',
      loaders: ['babel-loader?cacheDirectory'],
      // 开启 4 个线程
      threads: 4
    })
  ]
  ~~~

* **代码压缩**

  使用UglifyJS压缩代码文件，或者将mode设置为production默认开启上述功能。我们不仅可以压缩JavaScript文件，还可以压缩HTML，CSS文件，可以通过配置删除多余的console.log。

* `resolve.extensions`：用来表明文件后缀列表，默认查找顺序是 `['.js', '.json']`，我们在设置查找顺序的时候应该把常用后缀放置到前面，方便查询。
* `resolve.alias`：可以通过别名的方式来映射一个路径，能让 Webpack 更快找到路径。

### 2. 如何减少 Webpack 打包体积

* **按需加载**

  在开发SPA单页面应用时，项目会存在很多路由页面，如果这些页面全部打包进一个JS文件，就会一次性加载很多不需要的代码，耗费较长时间。如果我们希望提高首页的加载效率，应该减少首页加载文件的体积。因此可以通过按需加载。都是当使用的时候再去下载对应文件，返回一个 `Promise`，当 `Promise` 成功以后去执行回调。

* **Scope Hoisting 会分析出模块之间的依赖关系，尽可能的把打包出来的模块合并到一个函数中去。**
* **Tree Shaking 可以实现删除项目中未被引用的代码**。

### 3. 如何⽤webpack来优化前端性能？

* 代码压缩。
* CDN静态资源加速。
* Tree Shaking。
* 按需加载。

