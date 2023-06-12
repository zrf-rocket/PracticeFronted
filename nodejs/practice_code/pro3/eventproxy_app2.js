const eventproxy = require('eventproxy');
const fs = require('node:fs');
// 等价
//const fs = require('fs');

// 第一步：得到一个 eventproxy 实例
const ep = new eventproxy();

// 第二步：告诉它要监听哪些事件，并给它一个回调函数。ep.all('event1', 'event2', function (result1, result2) {})
// 通过 all 方法来监听多个事件的触发情况
// 当file1和file2 两个事件未同时完成时，ep.emit() 调用之后不会做任何事；当两个事件都完成的时候，就会调用末尾的回调函数，来对它们进行统一处理。
ep.all('file1', 'file2', function (data1, data2) {
    console.log(data1, data2);
});

fs.readFile('package-lock.json', 'utf-8', function (err,data) {
    // 此处的参数1：file1 要和 ep.all中的参数保持一致
    ep.emit('file1', data);
});

fs.readFile('node_modules/htmlparser2/package.json', 'utf8', function (err, data) {
    // 第三步：在适当的时候触发 ep.emit('event_name', eventData)
    //通过 emit 方法来触发事件  当文件读取完毕，就通过emit来告诉ep文件读取操作完毕。
    ep.emit('file2', data);
});