// 引入 `express` 模块，并将它赋给 `express` 这个变量等待使用
var express = require('express');

// 实例化 express ，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋给 app 变量
var app = express();

// app包含了非常多的方法，包括最常用的 get、post、put/patch、delete，在这里我们调用其中的 get 方法，为我们的 `/` 路径指定一个 handler 函数。
// 这个 handler 函数会接收 req 和 res 两个对象，他们分别是请求的 request 和 response。

// req 中包含了浏览器传来的各种信息，比如 query、body、headers等，都可以通过 req 对象访问到。

app.get('/', function (req, res) {
    // res 对象，我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如 header 信息，比如想要向浏览器输出的内容。这里调用了它的 send 方法，向浏览器输出一个字符串。
    res.send('Hello SteveRocket, this is express server');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000! http://localhost:3000');
});