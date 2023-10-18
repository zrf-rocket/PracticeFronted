const async = require('async');

// 并发连接数的计数器
let concurrencyCount = 0;

// 构造一个fetchUrl的函数
const fetchUrl = (url, callback) => {
    // delay 的值在 2000 以内，是个随机的整数
    const delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrencyCount++;

    console.log(`现在的并发数是 ${concurrencyCount}，正在抓取的是 ${url}，耗时 ${delay} 毫秒`);
    setTimeout(() => {
        concurrencyCount--;
        callback(null, `${url} html content`);
    }, delay);
};

const urls = [];
for (let i = 0; i < 30; i++) {
    urls.push(`http://datasource_${i}`);
}

//使用async 的 mapLimit(arr, limit, iterator, callback) 接口来并发抓取
async.mapLimit(urls, 5, (url, callback) => {
    fetchUrl(url, callback);
}, (err, result) => {
    console.log('final:');
    console.log(result);
});