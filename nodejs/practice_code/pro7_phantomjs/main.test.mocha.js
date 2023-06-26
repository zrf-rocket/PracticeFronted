const {add, mul} = require('../pro4_unittest/main');
const {should, expect, assert} = require('chai');

describe('math', () => {
    // test suite
    describe('add', () => {
        // 测试用例
        it('1+2+3=6', () => {
            expect(add(1,2,3),6)
        });
        it('-2 + -3 = -5', () => {
            expect(add(-2,-3), -5);
        });
        it('', ()=>{
            // 这是一个空的测试用例
        });
        // 只执行这个测试用例 only, 跳过这个测试用例 skip
        // it.only('', ()=>{
        //
        // });
    });
    describe('mul', () => {
        // 测试用例
        it('2 * 3 = 6', () => {
            expect(mul(2,3),6);
        });
    });
});
