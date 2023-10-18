var generateClosure = function() {
  var count = 0;
  var get = function() {
    count ++;
    return count;
  };
  return get;
};

var counter = generateClosure();
console.log(counter()); // 输出 1
console.log(counter()); // 输出 2
console.log(counter()); // 输出 3
