## HTTP状态码

**状态类别**

| 类别 | 原因                             | 描述                       |
| ---- | -------------------------------- | -------------------------- |
| 1xx  | Informational（信息状态码）      | 接受的信息正在处理         |
| 2xx  | Success（成功状态码）            | 请求正常处理完毕           |
| 3xx  | Redirection（重定向状态码）      | 请求需要进一步操作进行处理 |
| 4xx  | Client Error（客户端失败状态码） | 客户端无法处理请求         |
| 5xx  | Server Error（服务器失败状态码） | 服务端处理请求错误         |

### 1. 2XX (Success 成功状态码)

* 200 OK，表示客户端发送的请求，服务端成功进行处理。
* 204 No Content，表示请求成功，但是响应报文当中没有实体。
* 206 Partial Content，表示进行范围请求。

### 2. 3XX (Redirection 重定向状态码)

* 301 move permanetly，永久重定向，表示服务端资源被分配新的`URL。`
* 302 found，临时重定向，表示服务端资源临时被分配新的`URL`。
* 303 see other，表示资源存在另一个新的`URL`，应当使用`GET`方法获取资源。
* 304 not modified，表示资源在本地被缓存。
* 307 temporary redirect，表示服务端资源临时被分配新的`URL`，但是期望客户端保持请求方法不变向请地址发送请求。

### 3. 4XX (Client Error 客户端失败状态码)

* 400 bad request，表示客户端请求报文错误。
* 401 unauthorized，表示缺少`HTTP`身份认证。
* 403 forbidden，表示缺少权限访问当前资源文件。
* 404 not found，表示服务器上没有找到相关资源。

### 4. 5XX (Server Error 服务器失败状态码)

* 500 internal sever error，表示服务端在执行代码时出错。
* 501 Not Implemented，表示服务器不支持当前请求所需要的某个功能。
* 502 Bad Gateway，表示网关或者代理服务器错误。
* 503 service unavailable，表示服务器维护，暂时无法处理请求。

###  5. 同样是重定向，**307**，**303**，**302**的区别？

302时`HTTP1.0`的状态码，表示资源的重定向，在`HTTP1.1`版本的时候细分为303，307状态码，303状态码明确表示应当采用`GET`方法获取资源，它会把`POST`请求改为`GET`请求进行重定向。307会遵循浏览器标准，不会从`POST`变为`GET`。