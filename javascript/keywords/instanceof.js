function Person(name) {
    this.name = name;
}

var p = new Person('SteveRocket');
if (p instanceof Person) {
    console.log('p是Person类的实例');
} else {
    console.log('p不是Person类的实例');
}
console.log(typeof p);  //输出：object