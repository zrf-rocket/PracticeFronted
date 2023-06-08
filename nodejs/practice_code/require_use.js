var steverocket = require('./config');
console.log(steverocket);

var steverocket2 = require('./config.js');
console.log(steverocket2);

var steverocket3= require('D:\\source_code\\practice_fronted\\nodejs\\practice_code\\config');
console.log(steverocket3);

var steverocket4= require('D:\\source_code\\practice_fronted\\nodejs\\practice_code\\config.js');
console.log(steverocket4);

// 加载和使用一个JSON文件
var data = require('./config.json');
console.log(data);


module1 = require('./exports_use')
module1.sayHello();

module2 = require('./module_use')
module2();