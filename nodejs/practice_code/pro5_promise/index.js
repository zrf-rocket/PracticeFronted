const Q = require('q');

var defer = Q.defer();

/**
 * 获取初始promise
 */

function getInitialPromise() {
    // 通过defer获得promise
    return defer.promise;
}

/**
 * 为promise设置三种状态的回调函数
 */
getInitialPromise().then(function (success) {
    console.log(success);
}, function (error) {
    console.log(error);
}, function (progress) {
    console.log(progress);
});

defer.notify('in progress...');  //控制台打印in progress...
defer.resolve('resolve...'); //控制台打印resolve...
defer.reject('rekect...'); //没有输出，promise的状态只能改变一次




function asyncFunction() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('success steverocket');
        }, 1000);
    });
}

asyncFunction().then(result=>{
    console.log(result);
}).catch(error => {
    console.error(error);
});