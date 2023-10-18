// const add = function (num1,num2) {
//     return num1 + num2;
// };
//
// console.log(add(11,22)); // 33



// const greet = function (name) {
//  console.log(`Hello, ${name}!`);
// };
// greet('SteveRocket'); // 输出 Hello, SteveRocket!



// function calculate(operation, a, b) {
//  return operation(a, b);
// }
//
// const add = function (a, b) {
//  return a + b;
// };
//
// console.log(calculate(add, 2, 3)); // 输出 5



// function createCounter() {
//     let count = 0;
//     return function () {
//         count += 1;
//         return count;
//     };
// }
//
// const counter = createCounter();
// console.log(counter()); // 输出 1
// console.log(counter());  // 输出 2
// console.log(createCounter()); //[Function (anonymous)]


//
// (function () {
//     const name = 'SteveRocket';
//     console.log(`Hello, ${name}!`);  //Hello, SteveRocket!
// })();
//
//
// (()=>{
//     console.log('es6的箭头函数');  //es6的箭头函数
// })();
//
//
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // 输出 5
//
//
// console.log(
//     //把函数作为一个操作数进行调用
//     (function (a,b) {
//         return a + b;
//     })(2, 3)
// );  //返回数值5
//
//
// // 2秒后 调用匿名函数
// setTimeout(function() {
//   console.log("Delayed message! SteveRocket");
// }, 2000);


console.log(add(22, 33));  // 输出 55
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 输出 5


// console.log(add2(21, 31));  // ReferenceError: Cannot access 'add2' before initialization
const add2 = function (a, b) {
    return a + b;
};
console.log(add2(21, 31)); // 输出 52


const add3 = function () {
    console.log('函数表达式直接被执行');  //函数表达式直接被执行
}();

/*
function add4(){
    console.log('函数声明式');
}();
报错：SyntaxError: Unexpected token ')'
*/






//匿名方式1----推荐使用这个----这种经常用来构建沙箱模式
(function () {
    console.log('匿名方式1被自动执行');  //匿名方式1被自动执行
 } ());

(function () {
    console.log('匿名方式2被自动执行');  //匿名方式2被自动执行
})();



//自执行匿名函数表达式
var expr1 = function () { console.log(10) } ();   // 10
let expr2 = true && function () { console.log(20); }();  // 20
0, function () { console.log(30) } ();  // 30


!function () { console.log(40); } ();  // 输出 40
~function () { console.log(50); } ();  // 输出 50
-function () { console.log(60); } ();  // 输出 60
+function () { console.log(70); } ();  // 输出 70

new function () { console.log(80); };  //  80
new function () { console.log(90); } ();  // 90
new function () { console.log(90+num); } (num=12);  //  90
