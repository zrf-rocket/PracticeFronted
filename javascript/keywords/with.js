var obj = {
    name: 'SteveRocket',
    age: 20
};
with (obj) {
    console.log(name); // 输出SteveRocket
    console.log(age); // 输出20
}
