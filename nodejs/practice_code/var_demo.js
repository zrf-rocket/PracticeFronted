// 全局作用域
var globalVar = 'globalVar';

function testScope() {
  // 函数作用域
  var funcVar = 'funcVar';

  if (true) {
    // 块级作用域
    let blockVar = 'blockVar';
  }
}

console.log(globalVar); // 'globalVar'
// console.log(funcVar); // ReferenceError: funcVar is not defined
// console.log(blockVar); // ReferenceError: blockVar is not defined



var parent = function () {
  var name = "parent_name";
  var age = 13;

  var child = function () {
    var name = "child_name";
    var childAge = 0.3;
    childAge02 = 25;  // 如果此变量不使用var定义，那么变量就被声明为全局变量了

    console.log(name, age, childAge);  // child_name 13 0.3
  };

  child();
  console.log(childAge02);  // 25
  // console.log(name, age, childAge);  // ReferenceError: childAge is not defined
};

parent();


function foo() {
  value = "SteveRocket";
  for (var i = 0; i < 10; i++) {
    var value02 = `hello ${value}`;
  }
  console.log(i); //输出  10
  console.log(value02);//输出  hello SteveRocket
}
foo();
console.log(value); // 输出 SteveRocket
console.log(global.value, global.childAge02) // 输出SteveRocket 25




var adder = function (args) {
  var base = args;
  return function (number) {
    console.log(args, number);
    return args + base;
  };
};

console.log(adder(10)(15.5));  // 25.5
console.log(adder(11.11)(15.5));  // 26.61



//闭包的注意事项
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 5);
}


for (var i = 0; i < 5; i++) {
  (function (idx) {
    setTimeout(function () {
      console.log(idx);
    }, 5);
  })(i);
}






function createCounter() {
  //es6中新增了 let 关键字，与块级作用域，具体请关注公众号：CTO Plus，参考后续的文章《let和const命令》
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getCount()); // 1




// 全局对象
console.log(this === global); // true

function testSteveRocket() {
  // 函数对象
  console.log(this === global); // false
  console.log(this === testSteveRocket); // true

  this.name = 'testSteveRocket';
}

testSteveRocket();

console.log(name); // 'testSteveRocket'

const obj = {
  // 对象方法
  testThis() {
    console.log(this === obj); // true
    console.log(this === global); // false

    this.name = 'obj.testThis';
  }
};

obj.testThis();

console.log(obj.name); // 'obj.testThis'
