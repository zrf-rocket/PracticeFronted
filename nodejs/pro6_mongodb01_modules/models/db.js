/**
 * Created by 微信公众号：CTOPlus     Datetime on 2023/9/28 16:44.
 */
//引包
var mongoose = require('mongoose');
//创建数据库连接
var db      = mongoose.createConnection('mongodb://127.0.0.1:27017/haha');
//监听open事件
db.once('open', function (callback) {
    console.log("数据库成功连接");
});
//向外暴露这个db对象
module.exports = db;