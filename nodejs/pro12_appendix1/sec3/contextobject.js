var someuser = {
  name: 'byvoid',
  display: function() {
    console.log(this.name);
  }
};

someuser.display(); // 输出 byvoid

var foo = {
  bar: someuser.display,
  name: 'foobar'
};

foo.bar(); // 输出 foobar
