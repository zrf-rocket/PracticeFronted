const express = require('express');
// 此处将express导入的包赋值给了常量express，实例化后的值赋值给了常量app
const app = express();

// 中间件  中间件是一种在请求到达路由处理程序之前执行的功能。
app.use((req, res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});


// 视图引擎
app.set('view engine', 'ejs');

app.get('/user/:id', (req,res)=>{
    //请求 http://localhost:3000/user/123
    const user = {id:req.params.id, name: 'Cramer'};
    res.send('user', {user:user});
});


// 此处的第二个参数handler使用了箭头函数
app.get('/', (req, res)=>{
    res.send('这是箭头函数方式的express服务');
});

// 路由功能
app.get('/login', (req, res)=>{
    res.send("This is the login page! Login success");
});

// RESTful API
app.get('/api/users', (req,res)=>{
    const users = [{ id: 1, name: 'SteveRocket', age: 25 }, { id: 2, name: 'Cramer', age: 24}];
    res.json(users);
});

app.listen(3000, ()=>{
    console.log('Example app listening on port 3000! http://localhost:3000');
});
