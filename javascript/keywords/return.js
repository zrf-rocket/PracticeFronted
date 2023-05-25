function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); // 输出3



function multiReturn() {
    return "name", "steverocket", 25;
}

console.log(multiReturn()) // 输出 25



function multiReturn3() {
    // return ["name", "steverocket", 25];  // 输出 [ 'name', 'steverocket', 25 ]
    // return {"name", "steverocket", 25};   // 错误用法
    return ("name", "steverocket", 25);    // 输出 25
}

console.log(multiReturn3())
