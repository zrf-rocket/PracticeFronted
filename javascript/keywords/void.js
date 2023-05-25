function doSomething() {
    console.log('执行了doSomething函数');
}

var result = void doSomething();
console.log(result); // 输出undefined
