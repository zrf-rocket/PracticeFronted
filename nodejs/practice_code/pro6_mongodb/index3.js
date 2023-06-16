const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/steverocket', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 定义结构
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// 创建模型
const User = mongoose.model('User', userSchema);

//创建数据
const user = new User({name:"SteveRocket", age:25});

user.save((err,user)=>{
   if (err) return console.error(err);
   console.log(user)
});

User.find({ name: 'SteveRocket' }, function (err, users) {
  if (err) return console.error(err);
  console.log(users);
});

// const db = mongoose.connection;
