// 从JSON文件中获取配置信息

// const fs = require('fs');
// 上下导入方式等价
const fs = require('node:fs');

fs.readFile('./config.json', 'utf8', (err, data)=>{
    if(err) throw err;
    const config = JSON.parse(data);
    console.log(config.appName); // 输出：My App
    console.log(config.weixin);  // 输出：https://mp.weixin.qq.com/s/0yqGBPbOI6QxHqK17WxU8Q
});




// 从js模块中获取配置信息

const config = require("./config")
console.log(config.csdn);  // 输出：https://blog.csdn.net/zhouruifu2015/
// 遍历输出对象中的key和value
for (let key in config){
    console.log(key, config[key]);
}




//使用环境变量 从环境变量中读取项目配置信息
const myBlog = process.env.BLOG;
console.log(myBlog);










