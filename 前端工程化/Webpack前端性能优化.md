项目在完成之后会通过webpack进行打包，因此可以通过webpack对前端项目进行性能优化。

**JavaScript代码压缩**

减少JavaScript代码文件的打包体积，可以优化用户体验。

webpack4.0默认在生产环境中支持代码压缩，即mode=production模式下。实际上webpack使用terser-webpack-plugin压缩插件，对代码进行压缩，同时我们也可以开启parallel参数，进行多进程压缩。

```javascript
// config/webpack.common.js
const TerserPlugin = require('terser-webpack-plugin');
// ...
const commonConfig = {
  // ...
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4, // 开启几个进程来处理压缩，默认是 os.cpus().length - 1
      }),
    ],
  },
  // ...
}
```

**CSS代码压缩**

CSS代码压缩通过使用css-minimizer-webpack-plugin插件，去除一些无用的空格等。

```javascript
// config/webpack.common.js
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');
// ...
const commonConfig = {
  // ...
  optimization: {
    minimize: true,
    minimizer: [
      new CSSMinimizerPlugin({
        parallel: true,
      }),
    ],
  },
  // ...
}
```

**Html文件代码压缩**

在使用html-webpack-plugin插件时，可以配置minify属性优化html，对空格注释进行移除。

```javascript
module.exports = {
    ...
    plugin:[
        new HtmlwebpackPlugin({
            ...
            minify:{
                minifyCSS:false, // 是否压缩css
                collapseWhitespace:false, // 是否折叠空格
                removeComments:true // 是否移除注释
            }
        })
    ]
}
```

**图片压缩**

一般来说，图片的体积会远远大于JavaScript文件和CSS文件体积，因此常常需要对图片进行压缩。
通过配置image-webpack-loader进行压缩。

```JavaScript
module: {
  rules: [
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            // 压缩 jpeg 的配置
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            // 使用 imagemin**-optipng 压缩 png，enable: false 为关闭
            optipng: {
              enabled: false,
            },
            // 使用 imagemin-pngquant 压缩 png
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            // 压缩 gif 的配置
            gifsicle: {
              interlaced: false,
            },
            // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
            webp: {
              quality: 75
            }
          }
        }
      ]
    },
  ]
} 
```

**Tree Shaking**

Tree Shaking是指在计算机中消除死代码。依赖于ES Moudle进行静态语法分析。

在webpack中实现Tree Shaking主要通过两种方式：

* usedExports：通过标记某些函数是否被使用，之后在terser进行优化。
* sideEffects：跳过整个模块或者文件，直接查看该文件是否存在副作用。

usedExports
usedExports只需要设置为true即可。

```JavaScript
module.exports = {
    ...
    optimization:{
        usedExports
    }
}
```

sideEffects在package.json文件中进行配置。
如果sideEffects设置为false，就是告知webpack可以安全的删除未用到的exports。

```json
"sideEffecis":[
    "./src/util/format.js",
    "*.css" // 所有的css文件
]
```

**代码分离**

如果一个代码文件体积过大，可以将代码进行分离，提高代码的加载性能。

```javascript
module.exports = {
    ...
    optimization:{
        splitChunks:{
            chunks:"all"
        }
    }
}
```

-   Chunks，对同步代码还是异步代码进行处理
-   minSize： 拆分包的大小, 至少为minSize，如何包的大小不超过minSize，这个包不会拆分
-   maxSize： 将大于maxSize的包，拆分为不小于minSize的包
-   minChunks：被引入的次数，默认是1