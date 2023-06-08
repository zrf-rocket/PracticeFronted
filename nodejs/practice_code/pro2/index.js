// 引入依赖
var express = require('express');
var utility = require('utility');
const request = require('request');

// 实例化express
var app = express();

app.get('/', (req,res)=>{
    // 从 req.query 中取出 q 参数。
    var query = req.query.q;

    // 调用 utility.md5 方法，得到 md5 之后的值
    var md5Value = utility.md5(query);

    res.send(md5Value);
});

app.get('/get_data', (req,res)=>{
    var query = req.query.q;
    request(query, (error, response, body) => {
      if(!error && response.statusCode === 200){
          console.log(body);
          res.send(body);
      }
    });
});

const PORT = 3000;
app.listen(PORT, (req,res)=>{
   console.log(`Example app listening on port 3000! http://localhost:${PORT}`);
});