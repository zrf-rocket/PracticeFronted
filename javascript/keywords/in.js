var obj = {a: 1, b: 2, c: 3};
// 判断一个字符串是否在一个对象中
if ('a' in obj) {
    console.log('obj包含属性a');
} else {
    console.log('obj不包含属性a');
}


// 判断一个字符串是否包含子字符串
var blog = 'https://mp.weixin.qq.com/s/0yqGBPbOI6QxHqK17WxU8Q'
// console.log('mp.weixin.qq.com' in blog); // 错误用法
console.log(blog.indexOf('mp.weixin.qq.com')); //判断一个字符串是否在另一个字符串中，存在则输出子字符串所出现的索引位置
console.log(blog.indexOf('mp.weixin.qq.coms'));  // 不存在输出 -1