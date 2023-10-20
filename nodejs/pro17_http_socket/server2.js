var http = require("http");
http.createServer(function(request, response){
	console.log("request received, i'm server A");
	response.writeHead(200, {
		"Content-Type":"text/plain"
	});
	response.write("I'm service A");
	response.end();
}).listen(9091);
console.log("service started... port:9091");

