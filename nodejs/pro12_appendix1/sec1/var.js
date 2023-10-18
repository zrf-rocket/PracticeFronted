var name = "SteveRocket";
if (true) {
    name = 'Cramer';
    var somevar = 'value';
}
console.log(somevar); // 输出 value
console.log(name);  // 输出 Cramer


function sayHello() {
    var age = 25;
    console.log(name);  // 此处输出 Cramer
}
sayHello()
// console.log(age);  // ReferenceError: age is not defined