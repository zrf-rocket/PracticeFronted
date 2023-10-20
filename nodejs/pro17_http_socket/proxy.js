var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();

proxy.on("error", function(err, req, res){
	res.end();
});

var proxy_server = http.createServer(function(req, res){
	proxy.web(req, res, {
		target:"http://localhost:9091"
	});
});

proxy_server.listen(8080, function(){
	console.log("proxy server is running  port:8080");
});

