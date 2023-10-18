var Q = require('q');

var defer = Q.defer();

function getInputPromise() {
    return defer.promise;
}

/**
 * 当inputPromise状态由未完成变成fulfilled时，调用then(function(fulfilled))
 * 当inputPromise状态由未完成变成rejected时，调用fail(function(error))
 * function(fulfilled)将新的promise赋给outputPromise
 * 未完成改变为reject
 */
var outputPromise = getInputPromise().then((fulfilled)=>{
    return fulfilled;
}).progress((progress)=>{
    // 可以使用progress(function(progress))来专门针对进度信息进行处理，而不是使用 `then(function(success){},function(error){},function(progress){})`
    console.log(progress);
}).fail((error)=>{
    // 可以使用fail(function(error))来专门针对错误处理，而不是使用then(null,function(error))
    console.log('fail:' + error);
});

// defer.reject('inputpromise rejected');  // fail:inputpromise rejected

// defer.resolve('inputpromise fulfilled');

defer.notify(1);  // 1
defer.notify(2);  // 2
defer.notify(2.5);  // 2.5
defer.notify(null);  // null
defer.notify("435346");  // "435346"



