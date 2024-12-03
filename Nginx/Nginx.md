Ngnix是轻量级的高性能服务器。
* Nginx是事件驱动型，可以支持百万级别的TCP连接。
* Nginx是一个跨平台的服务器，支持Windows、Linux、Mac Os等操作系统。
* 稳定性较高。
* 高度模块化以及自由软件许可证使得第三方模块层出不穷。

## 正向代理与反向代理

代理是指在客户端与服务器之间假设的一层服务器，代理客户端的请求转发给服务器，然后将服务器的响应转发给

>正向代理

正向代理是位于客户端与服务端之间的服务器，为了从原始服务器之间获得资源，客户端向代理发送一个请求并指定目标 (原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。
正向代理是为客户端进行服务，原始服务器无法知道真实的客户端是谁。

> 反向代理

反向代理是指代理服务器接受客户端请求，然后将请求分发给内部的服务器上面，并将响应的结果返回给对应的客户端系统，此时代理服务器表现为反向代理。反向代理对于客户端是模糊的，客户端无法知道自己访问的是哪一台服务器。

## 负载均衡

如果请求的数量过多，我们可以增加服务器的数量，然后将请求分发至各台服务器上面，被称为负载均衡。

~~~nginx
upstream balanceServer {
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;

    server 10.1.22.35:12345;
}

server { 
    server_name  fe.server.com;
    listen 80;
    location /api {
        proxy_pass http://balanceServer;
  }
}
~~~

> 轮询算法

轮询算法会根据请求到达代理服务器的顺序按照服务器的配置顺序进行分发。如果某一台服务器宕机，会被自动剔除。

> weight权重

weight指定服务器的权重，权重越高，访问率越高。可以用于服务器性能不均的情况。

> ip_hash

ip_hash根据访问的ip的hash值进行分配，这样子会导致访问的客户端会访问同一个IP地址，可以一定程度上解决集群服务器的session共享问题。

> 最少连接算法

web请求会被转发至最少连接的服务器上面。