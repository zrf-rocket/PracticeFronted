var v1 = 'v1';
var name = 'SteveRocket';
var f1 = function() {
  name = 'Cramer';
  console.log(v1); // 输出 v1
};
f1();

var f2 = function() {
  var v1 = 'local';
  console.log(v1); // 输出 local
  console.log(name);  // 输出 Cramer
  name = null;
};
f2();

console.log(name); // 输出 null
