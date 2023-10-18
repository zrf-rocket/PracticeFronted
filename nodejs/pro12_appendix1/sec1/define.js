var scope = 'global scope';

var f = function() {
  //在访问未定义的变量scope输出 undefined
  console.log(scope); // 输出 undefined
  var scope = 'local scope';
}
f();

console.log(scope); // 输出 global scope

//在访问未定义的变量或定义了但没有初始化的变量时，获得的值都是 undefined
var age;
console.log(age);  // undefined

// JavaScript 的内部实现并不是这样，未定义变量和值为 undefined 的变量还是有区别的

// 未定义的变量name抛异常
// console.log(name);  // ReferenceError: name is not defined