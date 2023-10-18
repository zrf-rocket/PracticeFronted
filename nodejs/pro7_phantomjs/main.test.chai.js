// 测试断言库 chai
const {add, mul} = require('../pro4_unittest/main');
const {should, expect, assert} = require('chai');

expect(4.5).to.be.a('number');

// 用于断言给定的表达式是否为真
assert(5.0 > 4.9, '5.0 is greater than 4.9');

// const author = 'steverocket';
// author.should.be.a('string');

// const foo = 'bar';
// foo.should.be.a('string');

// to 用于链式断言，用于连接多个断言
expect(5).to.be.a('number').and.to.be.above(3);

expect([11,22,33]).to.include(22);
expect([11,22,33]).to.includes(22, 'number');
expect(true).to.be.ok;


should();
// add(1,2,3).should.equal(5);  // AssertionError: expected 6 to equal 5
add(1,2,3).should.equal(6);

console.log(typeof add(1,2,3));
// 用于断言给定值的类型
expect(add(1,2,3)).to.be.a('number');
// expect(add(1,2,3)).to.be.a('string');  // AssertionError: expected 6 to be a string

// 用于断言两个值是否相等
// expect(add(1,2,3)).to.be.equal(5);   // AssertionError: expected 6 to equal 5


