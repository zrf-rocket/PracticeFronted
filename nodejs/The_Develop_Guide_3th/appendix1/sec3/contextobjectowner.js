var someuser = {
  name: 'byvoid',
  func: function() {
    console.log(this.name);
  }
};

var foo = {
  name: 'foobar'
};

someuser.func(); // 输出 byvoid

foo.func = someuser.func;
foo.func(); // 输出 foobar

name = 'global';
func = someuser.func;
func(); // 输出 global
