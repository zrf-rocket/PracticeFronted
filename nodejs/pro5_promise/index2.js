const Q = require('q');

var defer = Q.defer();

function getInputPromise() {
    return defer.promise;
}

// then方法返回一个promise  用outputPromise指向then返回的promise
/**
 * 当getInputPromise状态由未完成变成fulfilled时，调用function(fulfilled)
 * 当getInputPromise状态由未完成变成rejected时，调用function(rejected)
 * 将then返回的promise赋给outputPromise
 * function(fulfilled) 和 function(rejected) 通过返回字符串将outputPromise的状态由未完成改变为fulfilled
 * @private
 */
var outputPromise = getInputPromise().then(function (fulfilled) {
    console.log(`fulfilled: ${fulfilled}`);
    return 'fulfilled';
},function (rejected) {
    console.log(`rejected: ${rejected}`);
    return 'rejected';
});

// 此处outputPromise就变成了受 `function(fulfilled)` 或者 `function(rejected)`控制状态的promise
// 当function(fulfilled)或者function(rejected)返回一个值，比如一个字符串，数组，对象等等，那么outputPromise的状态就会变成fulfilled。
console.log(outputPromise, typeof outputPromise);


// （带参数）当我们把getInputPromise的状态通过defer.resovle()变成fulfilled时，控制台输出fulfilled.
// defer.resolve("resolve SteveRocket");  // fulfilled: resolve SteveRocket

// （不带参数）将getInputPromise的状态由未完成变成fulfilled
// defer.resolve(); //输出 fulfilled: fulfilled



// （带参数）当我们把getInputPromise的状态通过defer.reject()变成rejected，控制台输出rejected
defer.reject('reject Cramer');  // rejected: reject Cramer

// （不带参数）将getInputPromise的状态由未完成变成rejected
// defer.reject(); //输出 fulfilled: rejected


/**
 * 当outputPromise状态由未完成变成fulfilled时，调用function(fulfilled)，控制台打印'fulfilled: fulfilled'。
 * 当outputPromise状态由未完成变成rejected, 调用function(rejected), 控制台打印'rejected: rejected'。
 * 当function(fulfilled)或者function(rejected)抛出异常时，那么outputPromise的状态就会变成rejected
 */
outputPromise.then(function(fulfilled){
  console.log('fulfilled: ' + fulfilled);  // fulfilled: fulfilled
},function(rejected){
  console.log('rejected: ' + rejected);  // fulfilled: rejected
});