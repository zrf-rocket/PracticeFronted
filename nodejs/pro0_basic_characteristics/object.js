const config1 = {
  appName: 'My App',
  author: 'steverocket',
  version: '1.0.0',
  port: 3000,
  weixin: 'https://mp.weixin.qq.com/s/0yqGBPbOI6QxHqK17WxU8Q',
  csdn: 'https://blog.csdn.net/zhouruifu2015/',
  git: 'https://gitee.com/SteveRocket/practice_python.git'
}

console.log(config1.valueOf());


// js中遍历对象，同时得到key与value的几种方法

//Object.keys()
// 输出对象的key  返回对象自身的所有可枚举的属性并以数组形式返回
console.log(Object.keys(config));

// 输出对象的value  返回对象自身的所有可枚举的属性值并以数组形式返回
console.log(Object.values(config));

// 根据key获取value
Object.keys(config).map(key=>console.log(config[key]))



// 使用for循环  循环变量对象，并根据对象的key获取value
for (let configKey in config) {
    console.log(configKey, config[configKey]);
}



// 使用lodash库实现
import loadsh from 'lodash'
lodash.map(config, (item, key) => console.log(key, item));



// 使用Object.entries方法
const config = require("./config");
for (const [key, value] of Object.entries(config)){
    console.log(key, value);
}
