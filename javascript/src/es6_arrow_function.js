// 箭头函数示例
/*
// 无参数的箭头函数
const x = () => {

}

// 有一个参数
const x1 = (param) => {
  
}

// 有多个参数
const x2 = (param1, param2, ) => {
  
}

let value = "this is ES6 style"

// 有返回值
const x3 = () => {
  return value;
}

// 简写的返回值
const x4 = () => value;

console.log(x())
console.log(x1("steverocket"))
console.log(x2("steverocket", "steverocket02", ))
console.log(x3())
console.log(x4())

//如果只有一条语句，可以省略花括号
const x5 = () => console.log('this is es6 style')
//函数调用
x5()


// 使用箭头函数计算两个数的乘法运算
const sum = (num1, num2) => num1 * num2;

console.log(sum(1.5, 2)); // 输出 3


const obj = {
  name: 'SteveRocket',
  sayName: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

obj.sayName()  //输出 SteveRocket



const obj2 = {
  name: "SteveRocket02",
  sayHello: function() {
    var self = this;
    setTimeout(function() { console.log("Hello, I'm " + self.name); }, 1000);
  }
};

obj2.sayHello(); // 输出 "Hello, I'm SteveRocket02"（等待 1 秒后输出）


// 普通函数遍历数组
arr = ["a", "b", "c", "d"];
arr.forEach(function (item) {
  console.log(item);
});

// 箭头函数
arr.forEach((item)=>console.log(item))


const arr2 = [1, 2, 3, 4, 5, 6];
const sumOdd = arr=>
    arr.filter(num=>num%2 !==0) // 过滤出所有奇数
        .reduce((acc,curr)=>acc+curr, 0);  // 过滤出所有奇数

console.log(sumOdd(arr2))
*/

// 带有默认值的参数
const greet = (name = "SteveRocket") => {
    console.log(`Hello, ${name}`);
}
greet();   //Hello, SteveRocket
greet('cramer') //Hello, cramer


// 变长参数列表
const sum = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(11, 22, 33));
console.log(sum(1, 2, 3, 4, 5, 6));


// 对象解构
const greet2 = ({name = 'Cramer', age}) => {
    console.log(`Hello, ${name}, you are ${age} years old.`);
}
greet2({age:25});  //Hello, Cramer, you are 25 years old.
greet2({age:26, name:"SteveRocket"}); // Hello, SteveRocket, you are 26 years old.


//箭头函数可以作为回调函数
const numbers = [1,2,3,4,5]
const doubled = numbers.map(number => number * 2);
console.log(doubled);  // [ 2, 4, 6, 8, 10 ]


//箭头函数可以使用闭包，保存函数执行上下文
const counter = () => {
    let count = 0;

    return ()=>{
        count++;
        console.log(count);
    }
}

const increment = counter();
increment(); // 输出：1
increment(); // 输出：2
increment(); // 输出：3





