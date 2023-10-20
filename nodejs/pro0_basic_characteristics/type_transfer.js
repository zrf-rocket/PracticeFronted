//类型转换

const num = 123;
const str = String(num);
console.log(typeof num, typeof str, str); // number string 123

const bool = true;
const boolStr = String(bool);
console.log(typeof boolStr, boolStr); // string "true"

const obj = {name: 'Alice', age: 18};
const objStr = String(obj);
console.log(typeof objStr, objStr); // string "[object Object]"

const arr = [1, 2, 3];
const arrStr = String(arr);
console.log(typeof arrStr, arrStr); // string "1,2,3"




/*
const num = 123;
const str = num.toString();
console.log(typeof str, str); // string "123"

const bool = true;
const boolStr = bool.toString();
console.log(typeof boolStr, boolStr); // string "true"

const obj = {name: 'Alice', age: 18};
const objStr = obj.toString();
console.log(typeof objStr, objStr); // string "[object Object]"

const arr = [1, 2, 3];
const arrStr = arr.toString();
console.log(typeof arrStr, arrStr); // string "1,2,3"
*/



/*
const num = 123;
const bool1 = Boolean(num);
console.log(typeof bool1, bool1); // boolean true

const str = '';
const bool2 = Boolean(str);
console.log(typeof bool2, bool2); // boolean false

const obj = {name: 'SteveRocket', age: 18};
const bool3 = Boolean(obj);
console.log(typeof bool3, bool3); // boolean true

const arr = [];
const bool4 = Boolean(arr);
console.log(typeof bool4, bool4); // boolean true  注意  此处竟然是true，类比Python为false

console.log(Boolean(undefined), Boolean(NaN)); // false false
*/




/*
const str = '123';
const num = Number(str);
console.log(typeof num, num); // number 123

const str2 = '456.456';
const num2 = Number(str2);
console.log(typeof num2, num2); // number  456.456

const bool = true;
const boolNum = Number(bool);
console.log(typeof boolNum, boolNum); // number 1

const obj = {name: 'SteveRocket', age: 18};
const objNum = Number(obj);
console.log(typeof objNum, objNum); // number NaN

const str3 = '123.456f'
const num3 = Number(str3)
console.log(typeof num3, num3); // number NaN
*/



/*
const obj = {name: 'SteveRocket', age: 25};
const jsonStr = JSON.stringify(obj);
console.log(jsonStr, typeof jsonStr);  // {"name":"SteveRocket","age":25} string

const persons = [{name: 'SteveRocket', age: 25},{name: 'Cramer', age: 18}];
const jsonStr2 = JSON.stringify(persons);
console.log(jsonStr2, typeof jsonStr2);  // [{"name":"SteveRocket","age":25},{"name":"Cramer","age":18}] string

const personStr = '[{"name": "SteveRocket", "age": 25},{"name": "Cramer", "age": 18}]';
//使用JSON函数
const personJson2 = JSON.parse(personStr);
console.log(personJson2, typeof personJson2, personJson2[0]);  // [ { name: 'SteveRocket', age: 25 }, { name: 'Cramer', age: 18 } ] object { name: 'SteveRocket', age: 25 }
*/

/*
const obj2 = {name: 'SteveRocket', age: 25, toJSON(){
    return {name: this.name.toUpperCase()};
    }};
console.log(obj2);  // { name: 'SteveRocket', age: 25, toJSON: [Function: toJSON] }
const jsonStr3 = JSON.stringify(obj2);
console.log(typeof jsonStr3, jsonStr3);  // string {"name":"STEVEROCKET"}
*/



/*
const str1 = '123';
const num1 = parseInt(str1);
console.log(typeof num1, num1); // number 123

const str2 = '0x10';
const num2 = parseInt(str2);
console.log(typeof num2, num2); // number 16

const str3 = '1010';
const num3 = parseInt(str3, 2);
console.log(typeof num3, num3); // number 10
*/



/*
const str1 = '3.14';
const num1 = parseFloat(str1);
console.log(typeof num1, num1); // number 3.14

const str2 = '1.23e+5';
const num2 = parseFloat(str2);
console.log(typeof num2, num2); // number 123000
*/



// 隐式转换
/*
const result = '123' + 456;
console.log(typeof result); // string

console.log(typeof +"123456"); // number
*/


/*
console.log(123 == '123'); // true
console.log(0 == false); // true
console.log('' == false); // true
console.log(null == undefined); // true
console.log({} == {}); // false
console.log(true == {}); // false
console.log(true == []); // false
console.log({} == []);  // false
*/



console.log(123 === '123'); // false
console.log(0 === false); // false
console.log('' === false); // false
console.log(null === undefined); // false
console.log({} === {}); // false


var number1 = 31243; var str1 = '31243';
console.log(String(number1) === String(str1));  // true