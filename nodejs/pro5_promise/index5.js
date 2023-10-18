const Q = require('q');
var defer = Q.defer();

function getInputPromise() {
    return defer.promise;
}

// 没有提供function(fulfilled)的情况
/**
 * 当inputPromise状态由未完成变成fulfilled时，传递给outputPromise，对fulfilled的处理会由outputPromise来完成。
 * 当inputPromise状态由未完成变成rejected时，调用function(rejected)
 * function(fulfilled)将新的promise赋给outputPromise
 * 未完成改变为rejected
 */
var outputPromise = getInputPromise().then(null,
    function (fulfilled) {
        console.log(fulfilled);
        return `fulfilled ${fulfilled}`;
    }
);
// 如果inputPromise的状态由未完成变成fulfilled, 此时对fulfilled的处理会由outputPromise来完成。


outputPromise.then(
    (fulfilled)=>{
        console.log(`fulfilled outputpromise ${fulfilled}`);
    },
    (rejected)=>{
        console.log(`rejected outputpromise ${rejected}`);
    }
);

// 将getInputPromise的状态由未完成变成rejected
// defer.reject('SteveRocket');  // fulfilled outputpromise fulfilled SteveRocket

//将getInputPromise的状态由未完成变成fulfilled
defer.resolve('Cramer')  //fulfilled outputpromise Cramer