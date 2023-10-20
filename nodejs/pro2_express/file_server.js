var http = require("http");
var express = require("express");
var app = express();

app.use(express.static("./public"));
app.use(app.router);

app.get("/files", function(req, res){
	res.sendfile("images/ye.jpg");
});

http.createServer(app).listen(9090, function(){
	console.log("app started");
});
console.log("app started at port:9090");