// 一、引入 required 模块
var http = require("http");
//使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http

// 二、创建服务器
http.createServer(function(request, response){
	//发送http头
	response.writeHead(200, {"Content-Type":"text/plain"});//http状态值  内容类型
	//发送响应数据
	response.end("this is nodejs server!");
}).listen(8888);
// 使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。
// 函数通过 request, response 参数来接收和响应数据。

console.log("Server running at http://127.0.0.1:8888/");




