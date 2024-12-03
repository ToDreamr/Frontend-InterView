Webpack是一个模块化打包工具，可以使用Webpack管理模块依赖，并且编译输出模块所需的静态文件。它可以很好的管理和打包Web开发所用到的HTML，JavaScript，CSS以及各种静态文件，让开发更加高效。对于不同类型的文件，Webpack都有相应的模块加载器。Webpack会分析各个模块之间的关系，最终生成优化并且合并后的静态文件。

## Webpack的能力：

* 模块打包：根据业务把代码自由划分模块，保证打包后的项目结构清晰可读。
* 编译兼容：Wepack的Loader机制，可以帮助我们的代码进行polyfill，还可以编译相关的.less，.scss，.vue等这类在浏览器无法识别的格式文件。
* 能力扩展：Webpack的Plugin机制，帮助我们在模块化和编译兼容的基础上，进一步实现如：按需加载，代码压缩等功能。

## Webpack的核心模块

* entry：项目打包的入口文件。
* output：项目打包的输出文件位置。
* loader：用于转换某些类型的模块，webpack只能处理js，json类型的文件，因此其他类型的文件需要转换为js语言，test识别哪些文件被转化，use表示使用什么loader进行转化。
* plugin：优化代码，资源管理。
* module：在模块化编程中，开发者将程序分解成功能离散的chunk，称之为模块。

## Webpack的常用的Loader

* babel-loader：把ES6语法转化为ES5语法。
* css-loader：加载CSS，支持模块化、压缩、文件导入等特性。
* sass-loader：将SCSS/SASS代码转化为CSS。
* ts-loader：将Typescript转化为JavaScript。
* awesome-typescript-loader：将Typescript转化为JavaScript，性能上优于ts-loader。
* style-loader：将CSS代码注入到JavaScript中，通过DOM加载CSS。
* file-loader：把文件输出到一个文件夹中，在代码中通过相对URL取引用输出的文件（图片或者字体）。
* url-loader：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码。
* eslint-loader：通过ESlint检查JavaScript代码是否符合同意编码要求与规范，审查代码是否存在语法错误。

## Webpack的常用的Plugin

* uglifyjs-webpack-plugin：不支持ES6压缩。
* terser-webpack-plugin：支持ES6压缩。
* mini-css-extract-plugin：分离样式文件，将CSS提取为独立的文件，支持按需加载。
* define-plugin：定义环境变量。
* webpack-bundle-analyzer：可视化webpack输出文件的体积。
* html-webpack-html：简化html文件创建。

## Loader 和 Plugin 的区别？

**作用不同**

* Loader是加载器，Webpack把一切的文件视为模块，但是Webpack只能解析原生的JavaScript文件，如果其他文件也想要打包，就需要loader进行编译解析。
* Plugin是插件，Plugin可以扩展Webpack的功能，让Webpack更加灵活和强大。在Webpack运行时会触发一些时间，plugin可以监听这些事件，从而通过Webpack的API改变输出结果。

**用法不同**

* Loader在module.rules中配置，作为模块的解析规则存在。类型是数组，每一项描述对于什么类型的文件通过什么loader进行加载。
* Plugin在plugins中配置，类型为数组，每一项都是一个plugin实例，参数都通过构造函数传入。

## Webpack的构建流程

* 初始化，Webpack启动构建时，会读取整合配置参数，加载plugin。
* 编译：从entry开始，递归解析entry所依赖的module，并且每个module都会调用相应的loader去编译解析。
* 输出：经过编译解析的module会生成一个个chunk，最后webpack会把这些chuck转换为文件，输出到output当中。在整个的构建的流程中，webpack也会执行plugin中的一些插件，完成相关的任务。

## Webpack的热更新原理

HMR全称是模块热替换，可以理解为在应用程序运行过程中，替换删除添加模块，而无需刷新整个应用程序。

例如，我们在应用运行过程中修改了某个模块，通过自动刷新会导致整个应用的整体刷新，那页面中的状态信息都会丢失。如果使用的是 HMR，就可以实现只将修改的模块实时替换至应用中，不必完全刷新整个应用。

```javascript
const webpack = require('webpack')
module.exports = {
  // ...
  devServer: {
    // 开启 HMR 特性
    hot: true
    // hotOnly: true
  }
}
```

**HMR原理**

* 在使用webpack-dev-server启动一个服务后，浏览器与服务器之间会维护一个Websocket长连接。
* Webpack内部实现watch监听文件修改，只要有修改，就会重新打包文件上传到内存当中。
* 每次热更新都会生成一个json文件（缓存文件）和一个JavaScript文件（更新文件）向浏览器推送。json文件带有文件的hash值和文件的chuckId。
* 浏览器拿到新的文件后，就会加载这两个文件，对修改的模块进行更新。

## Babel的原理是什么

babel 的转译过程分为三个阶段，这三步具体是：

* 解析：将代码转化为AST（抽象语法树）。在解析过程中主要分为词法解析与语法解析。
* 转化：对解析阶段得到的AST通过babel-traverse进行深度遍历，进行添加删除更改操作。
* 生成：将变换后的AST转化为新的代码。通过babel-generator进行深度遍历，然后构建表示为代码的字符串。

## source map 是什么？生产环境怎么用？

项目在经过编译打包压缩之后，部署到生产环境，在需要debuger的时候，源代码不具备良好的可读性。因此需要source map将编译打包后的代码映射回源代码，使得代码变得简单。

```javascript
devtool: "source-map";
```

生产环境下一般有三种情况：

* hidden-source-map：可以查看代码的准确错误，但是不能追踪源代码错误，只能提示到构建代码的错误位置。
* sourcemap：可以查看错误代码准确信息和源代码的错误位置。
* nosources-source-map：只会显示具体行数和源代码错误的文件，安全性比sourcemap高。


