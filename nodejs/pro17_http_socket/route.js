var http = require("http");
// var url = require("url");


http.createServer(function(req, res){
	var urls = req.url;

	res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});

	//获取字符串指定区域部分的内容
	var substr = urls.substr(0,9);
	console.log(substr);

	var id = urls.substr(9);
	console.log(id.length);


	if(substr == "/student/"){
		// var stu_id = urls.substr(10, -1);  //这种方式取不出来子串
		// var stu_id = urls.substr(9); //ok
		// if(/\d{10}/.test(id)){
		if(/^\d{10}$/.test(id)){  //用于限定边界  此处就免了对长度的判断
			res.end("would you select student infos..." + id);
		}else{
			res.end("error infos student");
		}
		/**
		http://localhost:8090/student/1234567890
		would you select student infos.../student/1234567890
		**/
	}else if(substr == "/teacher/"){
		// var tea_id = urls.substr(10, -1);
        // if(/\d{6}/.test(id) && id.length==6){ //OK 此处还需要判断下长度

        if(/^\d{6}$/.test(id)){  //用于限定边界  此处就免了对长度的判断
			res.end("would you select teacher infos..." + id);	
		}else{
			res.end("error infos teacher");
		}
		/**
		http://localhost:8090/teacher/123456
		would you select teacher infos.../teacher/123456
		**/
	}

	res.end("url error!");
	//判断是否以指定字符串开头或结尾
	//判断指定字符串是否存在
	//字符串拆分
}).listen(8090);