const express = require('express');
const app = express();
//基于express框架的第二个web服务，参数化路由
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log('Hello Cramer！用户ID：', id, typeof id);
    //处理用户ID
    res.send('Hello Cramer！your ID：' + id);
});

app.listen(3000, () => {
    console.log('Server started on port:3000')
});