### 1. Vue项目部署服务器后刷新404问题

> 问题场景

Vue项目在本地可以正常运行，但是部署到服务器之后，如果刷新页面，就会出现404页面。

> 问题原因

Vue属于单页面应用，所有用户的交互都是通过动态的重写当前页面，不管构建多少页面，最终都会生成一个index.html页面。

```nginx
server {
	listen 80;
	server_name www.xxx.com;

	localtion / {
		index /data/dist/index.html;
	}
}
```

当我们输入页面时，会打开dist目录下面的index.html页面，然后再根据我们配置的路由进行跳转进入到www.xxx.com/login页面。

但是当我们直接输入www.xxx.com/login时，会无法找到页面，导致404。

> 为什么hash模式下没有问题

因为hash模式中，hash的值不会被携带发送至服务端，因此服务器请求的页面一直是www.xxx.com。即使没有配置login，也不会发生404错误。

> 解决方案

* 从前端路由解决，任意页面都重定向至index页面。
* nginx配置`try_files $uri $uri/ /index.html;`。
* 在Vue中的所有页面配置一个404页面。


