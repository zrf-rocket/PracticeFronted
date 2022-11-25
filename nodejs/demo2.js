//创建 Node.js 应用
//使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
var http = require('http');

/*
Node.js 应用组成：
    引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
    创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
    接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。
*/

//使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。 函数通过 request, response 参数来接收和响应数据。
http.createServer(function(request, response){

}).listen(80);


