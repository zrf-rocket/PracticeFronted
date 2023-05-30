var someuser = {
  name: 'byvoid',
  display: function(words) {
    console.log(this.name + ' says ' + words);
  }
};

var foo = {
  name: 'foobar'
};

someuser.display.call(foo, 'hello'); // 输出 foobar says hello
