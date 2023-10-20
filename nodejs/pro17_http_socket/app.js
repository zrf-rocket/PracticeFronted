var http = require("http");

var server = http.createServer(function(req,res){
	if(req.url == "/"){
		fs.readFile("./server_socketio.html",function(err,data){
			res.end(data);
		});
	}
});