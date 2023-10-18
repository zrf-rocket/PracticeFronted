const express = require('express');
// 高级中间件
const app = express();

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log("user " + id + " request");
    //处理用户ID
    res.send("hello cramer", id);  // TODO 此处会导致抛异常
});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send("Something broker!");
});

app.listen(3000, () => {
    console.log('Server listen on port:3000');
});