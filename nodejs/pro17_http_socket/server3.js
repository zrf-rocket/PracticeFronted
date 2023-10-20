var http = require("http");

//创建一个服务器  回调函数表示接收到请求之后做的事情
var server = http.createServer(function(req, res){
	//req表示请求  res表示响应
	console.log("服务器接收到了请求" + req.url);
	// req.url属性，表示用户的请求URL地址。所有的路由设计，都是通过req.url来实现的。

	// 识别URL，用到两个新模块，第一个就是url模块，第二个就是querystring模块	
	// querystring.parse('foo=bar&baz=qux&baz=quux&corge');
	
	res.write("1+2+3=" + (1+2+3) + "\n");
	res.end("1+2+3=" + 1+2+3);
});

server.listen(8888,"0.0.0.0");