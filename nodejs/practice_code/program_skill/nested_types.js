// 类型嵌套
/*
const obj = {
    name: 'SteveRocket',
    age: 25,
    friends: [
        {name: 'Cramer', age: 22},
        {name: 'zhangsan', age: 30}
    ]
};

console.log(obj.friends[0].name);
//点号运算符会返回 undefined
console.log(obj.language);  // undefined
//方括号运算符会返回 undefined 或者抛出一个错误
console.log(obj.friends[2]);  // undefined
//方括号运算符后 再使用点运算符抛出一个错误
// console.log(obj.friends[2].name); //TypeError: Cannot read properties of undefined (reading 'name')
*/


// 类型嵌套
/*
// 构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 闭包
const createCounter = function () {
    let count = 0;
    return function () {
        count += 1;
        console.log(count);
    }
};

// 字面量哈希
const obj = {
  name: 'Cramer',
  age: 18,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
  }
};

// 多层嵌套
const outer = function() {
  const inner1 = function() {
    console.log('SteveRocket...');
  };
  const inner2 = function() {
    console.log('Cramer...');
  };
  return {
    inner1,
    inner2
  };
};

const person = new Person('SteveRocket', 28);
console.log(person.name, person.age);  //SteveRocket 28

const counter = createCounter();
counter();   // 1

obj.sayHello();  //Hello, my name is Cramer, I'm 18 years old.
outer().inner1();  //SteveRocket...
outer().inner2();  //Cramer...
*/


//prototype 拓展
/*
Array.prototype.sum = function () {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
        total += this[i];
    }
    return total;
};

const arr = [1, 2, 3, 4];
console.log(arr.sum()); // 10
*/


// 函数式编程
/*
const result = (function (num1,num2) {
    return num1+num2;
})(11,22);
console.log(result);  // 33


//使用箭头函数进行改造
const result2 = ((num1,num2)=>{return num1+num2;})(11,22);
console.log(result2); // 33

*/



//多态来实现泛型
// function sortArray(arr, compareFunc) {
//     return arr.sort(compareFunc);
// }
//
// const nums = [22, 344, 55, 67, 7, 88];
// const sortedNums = sortArray(nums, (a,b)=>a - b);
// console.log(sortedNums);  //[ 7, 22, 55, 67, 88, 344 ]



// 权限控制（私有和公有）
// class Person {
//     constructor(name, age){
//         this._name = name;  // 私有属性
//         this.age = age; // 公共属性
//     }
//     get name(){
//         return this._name;
//     }
//     set name(value){
//         this._name = value;
//     }
//
//     //公共方法
//     sayHello(){
//         console.log(`hello, my name is ${this._name}`);
//     }
//
//     // 私有方法
//     _privateMethod(){
//         console.log('This is a private method');
//     }
// }
//
// const p = new Person("SteveRocket", 28);
// console.log(p.name);  //SteveRocket
// // p.name('Cramer');   // 错误用法，执行报错：TypeError: p.name is not a function
// p.name = 'Cramer';
// console.log(p.name);  // Cramer
// p.sayHello();  //hello, my name is Cramer









//使用严格模式（Strict Mode）
'use strict';

//函数式编程库
// const R = require('ramda');



//声明和初始化数组
/*
const array = Array(5).fill('');
console.log(array);  // [ '', '', '', '', '' ]
console.log(Array(5).fill(0)); //[ 0, 0, 0, 0, 0 ]
console.log(Array(2).fill({name:'', age:0, blog:''}));  // [ { name: '', age: 0, blog: '' }, { name: '', age: 0, blog: '' } ]


const matrix = Array(3).fill(0).map(()=>Array(4).fill(1));
console.log(matrix, matrix.length);  //[ [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ] ]  3




//字符串数组、数字数组以及对象数组的排序
const students = ['steverocket', 'cramer',  'zhangsan', 22, 25, 18];
console.log(students.sort()); // [ 18, 22, 25, 'cramer', 'steverocket', 'zhangsan' ]
console.log(students.reverse()); // [ 'zhangsan', 'steverocket', 'cramer', 25, 22, 18 ]


const array = [143, 64, 364, 25, 42];
// 可以看到直接使用sort并不起作用
console.log(array.sort());  // [ 143, 25, 364, 42, 64 ]
// reverse似乎是对上一个array直接进行了翻转
console.log(array.reverse()); //[ 64, 42, 364, 25, 143 ]

// - 用于从小到大
console.log(array.sort((a,b)=>a-b));  // [ 25, 42, 64, 143, 364 ]
// + 用于从大到小
console.log(array.sort((a,b)=>b-a));  // [ 364, 143, 64, 42, 25 ]
console.log(array.reverse());  // [ 25, 42, 64, 143, 364 ]


const objectArr = [
    {name: 'steverocket',age:'hij'},
    {name: 'cramer', age:'abc'},
    {name: 'zhangdsan', age: 'def'}
];
console.log(objectArr.sort((a,b)=>a.name.localeCompare(b.age)));
//[
//   { name: 'cramer', age: 'abc' },
//   { name: 'steverocket', age: 'hij' },
//   { name: 'zhangdsan', age: 'def' }
// ]
*/



// 随机排列一个数组
const number = [1,2,3,4,5,6,7,8,9,0];
number.sort(()=>{
    return Math.random() - 0.5;
});
console.log(number);
// 每次输出的都会不一样
//[
//   9, 4, 3, 2, 6,
//   8, 7, 0, 5, 1
// ]



// 使用函数式编程库（Functional Programming Libraries）
const R = require('ramda');

const score = [1,2,3,4,5,6,7,8,9];
const sum = R.reduce(R.add, 0, score);
console.log(sum);  // 45
// R.reduced()
// R.reduceBy()
// R.reduceRight()
// R.reduceWhile()

const double = R.map(R.multiply(2), score);
console.log(double);
/*
[
   2,  4,  6,  8, 10,
  12, 14, 16, 18
]
*/
// R.mapAccum()
// R.mapAccumRight()
// R.mapObjIndexed()

console.log(R.reverse(score));
/*
[
  9, 8, 7, 6, 5,
  4, 3, 2, 1
]
*/
// const events = R.filter(R.even, score);
// console.log(events);

// R.find()
// R.findLast()
// R.findIndex()
// R.forEachObjIndexed()









































// var num=0;
// // 前++
// console.log(++num);  // 1
// // 后++
// console.log(num++);  // 1

