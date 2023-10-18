const express = require('express');
const app = express();
//基于express框架的第一个web服务
app.get('/', function (req, res) {
    res.send("hello cramer");
});

app.listen(3000, function () {
   console.log('Example app listening on port 3000!');
});