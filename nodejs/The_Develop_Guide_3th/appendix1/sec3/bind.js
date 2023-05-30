var someuser = {
  name: 'byvoid',
  func: function() {
    console.log(this.name);
  }
};

var foo = {
  name: 'foobar'
};

foo.func = someuser.func;
foo.func(); // 输出 foobar

foo.func1 = someuser.func.bind(someuser);
foo.func1(); // 输出 byvoid

func = someuser.func.bind(foo);
func(); // 输出 foobar

func2 = func;
func2(); // 输出 foobar
