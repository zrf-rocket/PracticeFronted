// 首先引入 mongoose 这个模块
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/steverocket');
// 连接对应的数据库：mongodb://localhost/steverocket
// mongodb 是 protocol scheme 的名称；localhost 是 mongod 所在的服务器地址（IP、域名）；端口号省略则默认连接 27017；steverocket 是数据库的名称
// mongodb 中不需要建立数据库，当你需要连接的数据库不存在时，会自动创建一个出来。


//创建了一个名为 Person 的 model，它在数据库中的名字根据传给 mongoose.model 的第一个参数决定
var Person = mongoose.model('Person', {
    name: String,   // String 类型的 name
    age: Number,    // Number 类型的 age
    blog: String,
    gender: Boolean, // Boolean 类型的 gender
    tags: [String],
    create_at: Date
});

// new 一个rocket的新对象
var rocket = new Person({
    name:"SteveRocket",
    age:25,
    blog:"https://mp.weixin.qq.com/s/0yqGBPbOI6QxHqK17WxU8Q"
});
// 为属性赋值
rocket.gender = true;
rocket.tags = ["Big", "Small"]

// 调用 .save 方法后，mongoose 会去 mongodb 中的 steverocket 数据库里，存入一条记录。
rocket.save(function (err) {
    if (err){
        console.log(err)
    }
    console.log("create success");
});