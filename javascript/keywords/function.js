function add(a, b) {
    return a * b;
}

console.log(add(1.5, 2.0)); // 输出3


// 定义带有默认参数的函数
function sayHello(name="steverocket", blog='https://mp.weixin.qq.com/s/0yqGBPbOI6QxHqK17WxU8Q') {
    console.log('my name is ',name, 'this is my blog', blog);
}
sayHello()