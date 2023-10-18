const Q = require('q');
var defer = Q.defer();

function getInputPromise() {
    return defer.promise;
}

// 没有提供function(rejected)的情况
/**
 * 当inputPromise状态由未完成变成fulfilled时，调用function(fulfilled)
 * 当inputPromise状态由未完成变成rejected时，这个rejected会传向outputPromise，对rejected的处理会由outputPromise来完成。
 */
var outputPromise = getInputPromise().then(function (fulfilled) {
    console.log(fulfilled);
    return `fulfilled ${fulfilled}`;
});

outputPromise.then(
    (fulfilled)=>{
        console.log(`fulfilled outputpromise ${fulfilled}`);
    },
    (rejected)=>{
        console.log(`rejected outputpromise ${rejected}`);
    }
);

// 将inputPromise的状态由未完成变成rejected
defer.reject('SteveRocket');  // rejected outputpromise SteveRocket
//将inputPromise的状态由未完成变成fulfilled
// defer.resolve('Cramer')  //fulfilled outputpromise fulfilled Cramer