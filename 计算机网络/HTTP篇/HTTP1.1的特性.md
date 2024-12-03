```ad-note
title: Links
* [HTTP 特性 | 小林coding](https://xiaolincoding.com/network/2_http/http_interview.html#http-%E7%89%B9%E6%80%A7)
* [HTTP | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)
```

![[HTTP1.1的特性-思维导图.png]]

## HTTP/1.1 的优点
---
**1. 简单**

HTTP 基本的报文格式就是 `header + body`，头部信息也是 `key-value` 简单文本的形式，**易于理解**，降低了学习和使用的门槛。😄

**2. 灵活和易于扩展**

HTTP 协议里的各类请求方法、URI/URL、状态码、头字段等每个组成要求都没有固定死，允许开发人员自定义和扩充。

同时 HTTP 协议工作在应用层，那它**下层可以随便变化**。

```ad-example
* HTTPS 就是在 HTTP 与 TCP之间增加了 SSL/TLS 安全传输层；
* HTTP/1.1 和 HTTP/2.0 传输协议使用的是 TCP 协议，但是 HTTP/3.0 传输协议改用了 UDP 协议
```

**3. 应用广泛和跨平台**

互联网发展至今，HTTP 的应用范围非常广泛，从台式机到浏览器到手机各类的 APP 应用，都可以使用 HTTP 协议进行通信，天然具有**跨平台**的特性。


## HTTP/1.1 的缺点
---
HTTP 也存在一些缺陷，分别是「无状态、明文传输」，同时还有「不安全」。

**1. 无状态**

无状态的优势：浏览器不需要保存 HTTP 的状态，所以就不需要消耗额外的资源来记录，可以减轻服务器的负担，把更多的 CPU 和内存留给对外服务。

但是无状态也存在一定的坏处，因为服务器没有记录 HTTP 的状态，因此会导致进行关联操作时十分麻烦棘手。

```ad-example
登录 -> 添加购物车 -> 下单 -> 结算 -> 支付，这一个系列的操作都需要知道用户的身份信息，但因为服务器没有保存用户的身份信息，导致每一次请求都需要重新验证身份，用户的体验会下降。
```

对于无状态的问题，最简单的方式可以通过[Cookie](https://zh.wikipedia.org/wiki/Cookie)技术去解决，`Cookie` 通过在请求和响应报文中加入 `Cookie` 信息来控制客户端的状态。

![](https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/HTTP/14-cookie%E6%8A%80%E6%9C%AF.png)

**2. 明文传输**

明文意味着在传输过程中的信息，是可以直接阅读的，为调试工作带来的便利性。

但是也因为是明文传输，导致 HTTP 的所有信息暴露在光天化日下，在传输的过程中，信息的内容没有隐私可言，很容易被窃取，导致用户的重要信息丢失。

**3. 不安全**

HTTP 最严重的缺点就是不安全：

* 通信使用明文，内容可能被窃听。
* 无法验证通信方的身份，可能身份被伪装。
* 无法验证信息的完整性，信息可能被篡改。

正因为 HTTP 的安全问题，可以使用 [HTTPS](https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%AE%89%E5%85%A8%E5%8D%8F%E8%AE%AE) 的方式解决，也就是引入 SSL/TLS 层，保证传输的安全性。


## HTTP/1.1 的性能
---
HTTP 协议是基于 **TCP协议**，并且使用 **请求-应答** 的通信模式。

**1. 长连接**

早期的 HTTP/1.0 存在性能问题，即每次发起一个请求，都要新建一次 TCP 连接（三次握手），而且是串行请求，做了所谓的 TCP 连接建立和断开，增加了通信的开销。

为了解决上述的问题，HTTP/1.1 提出了 **长连接** 的通信方式，也叫做持久连接。这种方式的好处在于减少 TCP 连接的重复建立和断开所造成的额外开销，减轻了服务器的负担。

持久连接的特点是：只要任意一端没有明确提出断开连接，则保持 TCP 连接状态。

当然，如果某个 HTTP 长连接超过一定的时间都没有任何的数据交互，服务端就会主动断开连接。

![](https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/HTTP/16-%E7%9F%AD%E8%BF%9E%E6%8E%A5%E4%B8%8E%E9%95%BF%E8%BF%9E%E6%8E%A5.png)

**2. 队头阻塞**

「请求 - 应答」的模式会造成 HTTP 的性能问题。

因为当顺序发送的请求序列中的一个请求因为某些原因被阻塞时，在后面排队的请求也会被一同阻塞，导致客户端一直请求不到数据，也就是**队头阻塞**。

![](https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/HTTP/18-%E9%98%9F%E5%A4%B4%E9%98%BB%E5%A1%9E.png)

```ad-example
队头阻塞类似于路上堵车🚙。
```
