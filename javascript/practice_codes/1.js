// 编写函数，如排序、搜索、寻找惟一值、传递参数、交换值等


// 1. 声明和初始化数组
// 使用特定的大小来初始化数组，也可以通过指定值来初始化数组内容
const array = Array(5).fill("-");
console.log(array);  //[ '-', '-', '-', '-', '-' ]

const matrix = Array(5).fill(0).map(() => Array(7).fill(1));
console.log(matrix);
/*[
  [
    1, 1, 1, 1,
    1, 1, 1
  ],
  [
    1, 1, 1, 1,
    1, 1, 1
  ],
  [
    1, 1, 1, 1,
    1, 1, 1
  ],
  [
    1, 1, 1, 1,
    1, 1, 1
  ],
  [
    1, 1, 1, 1,
    1, 1, 1
  ]
]
*/


// 2. 求和，最小值和最大值
//利用 reduce方法快速找到基本的数学运算
const array2 = [8, 1, 2, 3, 4, 5];
// 求和
console.log(array2.reduce((num1, num2) => num1 + num2));  // 15
// 最大
console.log(array2.reduce((num1, num2) => num1 > num2 ? num1 : num2)); // 5
// 最小
console.log(array2.reduce((num1, num2) => num1 > num2 ? num2 : num1)); // 1


const x = (num) => {
    return num * num;
}

console.log(x(4));


//https://blog.fundebug.com/2021/06/21/top-20-javascript-ips-and-tricks-to-increase-your-speed-and-efficiency-283g/










