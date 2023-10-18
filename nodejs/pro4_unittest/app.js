// var fibonacci = function (number) {
//     if (number === 0) {
//         return 0;
//     }
//     if (number === 1) {
//         return 1;
//     }
//     return fibonacci(number - 1) + fibonacci(number - 2);
// }

//* 当 n === 0 时，返回 0；n === 1时，返回 1;
// * n > 1 时，返回 `fibonacci(n) === fibonacci(n-1) + fibonacci(n-2)`，如 `fibonacci(10) === 55`;
// * n 不可大于10，否则抛错，因为 Node.js 的计算性能没那么强。
// * n 也不可小于 0，否则抛错，因为没意义。
// * n 不为数字时，抛错。


// 1. 递归方式 简洁版
// var fibonacci = function (number) {
//     if (number <= 1) {
//         return number;
//     }
//     return fibonacci(number - 1) + fibonacci(number - 2);
// }


// 2. 循环方式
// var fibonacci = function fibonacci(number) {
//     if (number <= 1) {
//         return number;
//     }
//     let fib = [0, 1];
//     for (let i = 2; i <= number; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib[number];
// }

//以上代码中，方式1 函数使用递归的方式计算Fibonacci序列，而方式2 函数使用循环的方式计算Fibonacci序列。两种方式都可以得到相同的结果，
// 但递归方式可能在计算较大的n值时会有性能问题。因此，对于大的n值，推荐使用循环方式实现Fibonacci序列。


// 1. 递归方式 加强版
var fibonacci = function (number) {
    if (typeof number !== 'number')
        throw new  Error('number should be a Number');
    if (number < 0)
        throw new Error('Number should >=0')
    if (0 <= number && number <= 1)
        return number;
    return fibonacci(number - 1) + fibonacci(number - 2);
}


// 将fibonacci方法导出去
exports.fibonacci = fibonacci;

if (require.main === module) {
    // 如果是直接执行 main.js，则进入此处
    // 如果 main.js 被其他文件 require，则此处不会执行。
    var num = Number(process.argv[2]);
    console.log(`fibonacci('${num}') is ${fibonacci(num)}`);
}