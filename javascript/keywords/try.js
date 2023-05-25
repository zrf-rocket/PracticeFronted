function divide(a, b) {
    if (b === 0) {
        throw new Error('除数不能为0');
    }
    return a / b;
}

try {
    console.log(divide(10, 0)); // 抛出异常
} catch (e) {
    console.log(e.message); // 输出除数不能为0
}
