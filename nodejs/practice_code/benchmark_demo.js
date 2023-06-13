const benchmark = require('benchmark');

const suite = new benchmark.Suite;

// add tests
suite.add('RegExp#test', function() {
  /o/.test('Hello SteveRocket!');
})
.add('String#indexOf', function() {
  'Hello SteveRocket!'.indexOf('o') > -1;
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });




const func1 = function (str) {
    return +str;
}

const func2 = function (str) {
    return parseInt(str, 10);
}

const func3 = function (str) {
    return Number(str);
}

var number = '989898989';

// 写 benchmark suite
// 添加测试
suite.add('+', function() {
  func1(number);
})
.add('parseInt', function() {
  func2(number);
})
.add('Number', function () {
  func3(number);
})
// 每个测试跑完后，输出信息
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });

