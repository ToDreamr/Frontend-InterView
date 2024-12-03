## 如何提高Webpack的构建速度

**优化loader配置**

* 缩小文件的搜索范围，使用include和exclude配置项指定和排除loader的搜素路径
* 缓存经过Babel编译后的文件，下次只需要编译更改的文件即可，加快打包速率

```javascript
module.export = {
	module: {
		rules: {
			test: /\.js$/,
			include: path.resolve(__dirname, './src'),
			exclude: /node_modules/,
			use: [{ loader:'babel-loader?cacheDirectory=true' }],
		}
	}
}
```

**合理使用resolve参数**

* resolve.extensions：导入的文件没有后缀时，webpack自动补全后缀并且查找文件是否存在，查询的顺序会按照配置顺序进行遍历。
* resolve.alias：给路径取一个别名，映射新的导入路径，可以减少查找的过程。

```javascript
const config = {
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@': path.join(__dirname, './src'),
		}
	}
}
```

**优化 resolve.modules**

resolve.modules用于配置webpack去那个目录下面寻找第三方模块，可以配置resolve.modules优化模块的搜索时间。

```javascript
module.exports = {
  resolve: {
    // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
    // 其中 __dirname 表示当前工作目录，也就是项目根目录
    modules: [path.resolve(__dirname, 'node_modules')]
  },
};
```

**使用 DLLPlugin 插件**

DDL是动态函数链接库，webpack实现了DDL的功能，为了实现将一些不经常改变的代码抽成一个共享库，在这个库被编译的时候，引入到其他的项目中。

使用步骤：

* 打包一个DDL库
* 引入DDL库

单独配置一个 webpack.dll.config.js 文件，打包第三方库代码

```javascript
// webpack.dll.config.js
module.exports = {
    entry: {
        // 定义程序中打包公共文件的入口文件vendor.js
        vendor: [path.resolve(src, 'js', 'vendor.js')],
    },
    
    plugins: [
        new webpack.DllPlugin({
            // manifest缓存文件的请求上下文（默认为webpack执行环境上下文）
            context: process.cwd(),
            
            // manifest.json文件的输出位置
            path: path.join(src, 'js', 'dll', '[name]-manifest.json'),
            
            // 定义打包的公共vendor文件对外暴露的函数名
            name: '[name]_[hash]'
        })
    ]
}
```

引入 DLL 库

使用webpack自带的DllReferencePlugin插件对 mainfest.json映射文件进行分析，获取要使用的DLL库

```javascript
new webpack.DllReferencePlugin({
	context: process.cwd(),
	// manifest.json 就是之前打包出来的 json 文件
	manifest: require('./manifest.json')
}),
```

还需要在模板当中注入vendor.dll.js文件

```html
<!-- index.html -->
<script type="text/javascript" src="/src/js/dll/vendor.dll.js"></script>
```

**合理使用sourceMap**

打包生成sourceMap时，如果信息越详细，那么打包的速度越慢。

**terser 启动多线程**

使用terser插件进行多进程的编译。

```JavaScript
module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
};
```

