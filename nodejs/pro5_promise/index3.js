var Q = require('q');
var fs = require('node:fs');
var defer = Q.defer();

function getInputPromise() {
    return defer.promise;  // 通过defer获得promise
}

var outputPromise = getInputPromise().then(function (fulfilled) {
    console.log(fulfilled);
    var localDefer = Q.defer();
    fs.readFile('package.json', 'utf8', function (err,data) {
      if(!err && data) {
          localDefer.resolve(data);
      } else{
          throw new Error('fulfilled...');
      }
    });
    return localDefer.promise;
},function (rejected) {
    console.log(rejected);
    throw new Error('rejected...');
},function (progress) {
    console.log(progress);
    throw new Error('progress...');
});


outputPromise.then(function (fulfilled) {
    //当outputPromise状态由未完成变成fulfilled时，调用function(fulfilled)，控制台输出文件的内容
    console.log('fulfilled:' + fulfilled);
},function (rejected) {
    //当outputPromise状态由未完成变成rejected, 调用function(rejected)
    console.log('rejected:' + rejected);
},function (progress) {
    console.log('progress:' + progress);
})

//将inputPromise的状态由未完成变成rejected
// defer.reject('SteveRocket');   // rejected:Error: rejected...

//将inputPromise的状态由未完成变成fulfilled
defer.resolve('Cramer');  // rejected:Error: fulfilled...

//获取inputPromise的Progress状态
// defer.notify('Progress');  // Error: progress...

// 当function(fulfilled)或者function(rejected)返回一个promise时，outputPromise就会成为这个新的promise
// 作用主要在于聚合结果(Q.all)，管理延时，异常恢复等等