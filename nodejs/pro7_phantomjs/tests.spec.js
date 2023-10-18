var should = chai.should();
describe('测试案例：', function () {
  it('值为0，结果为0', function () {
    //此处使用了window对象。
    window.fibonacci(0).should.equal(0);
  });
  it('值为10，结果为55', function () {
    window.fibonacci(10).should.equal(55);
  });
  it('值为10，结果为55', function () {
    window.fibonacci(10).should.equal(556);
  });
  it('值为10，结果为55', function () {
    window.fibonacci("this is string").should.equal(55);
  });
});