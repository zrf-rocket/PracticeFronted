function strConnect1(infomations) {
    if (infomations === "PYTHON") {
        return "Python SteveRocket";
    } else if (infomations === "NODE") {
        return "Node SteveRocket";
    } else if (infomations === "HELLO") {
        return "Hello SteveRocket";
    }
}
console.log(strConnect1("PYTHON"));
console.log(strConnect1("HELLO"));


//改造成如下


function strConnect(infomations="hello") { // 函数默认参数
    //对空字符串进行toUpperCase()会报错，TypeError: Cannot read properties of undefined (reading 'toUpperCase')
    //return infomations[0].toUpperCase() + infomations.slice(1).toLowerCase() + ' SteveRocket';
    //等价
    return `${infomations[0].toUpperCase() + infomations.slice(1).toLowerCase() } SteveRocket`
}

console.log(strConnect("this is"));
console.log(strConnect());