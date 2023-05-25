function divide(a, b) {
    if (b === 0) {
        throw new Error('除数不能为0');
    }
    return a / b;
}

console.log(divide(10, 0)); // 抛出异常
