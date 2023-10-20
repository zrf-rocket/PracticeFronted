// 1. 匹配邮箱地址
const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const email = 'test@test.com';

if (emailReg.test(email)) {
  console.log('邮箱格式正确');
} else {
  console.log('邮箱格式错误');
}

const email2 = 'rocket_2014@126.com';
console.log(emailReg.test(email2));  // 输出：true

const email3 = 'rocket$_2014@12%6.com';
console.log(emailReg.test(email3)); // 输出：false

// 2. 匹配 URL
const urlReg = /^((https?|ftp):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?(\?[\w-]+=[\w%]+&?)?$/;

const url = 'https://www.baidu.com';


if (urlReg.test(url)) {
  console.log('URL 格式正确');
} else {
  console.log('URL 格式错误');
}
const url2 = 'https://mp.weixin.qq.com/s/0yqGBPbOI6QxHqK17WxU8Q';
console.log(urlReg.test(url2));


//3. 提取 HTML 标签内容
const html = '<h1>Hello SteveRocket</h1>';
const h1Reg = /<h1>(.*?)<\/h1>/;
const result = h1Reg.exec(html);
console.log(result[1]); // 输出 Hello SteveRocket


// 4. 替换字符串中的内容-replace
const str = 'Hello SteveRocket';
const result2 = str.replace(/\s/g, '-');
console.log(result2); // 输出 Hello-SteveRocket


// 5. 返回所有匹配的字符串数组-match

const str5 = 'Hello SteveRocket';
const regex5 = /e/g;
const matches5 = str5.match(regex5);
console.log(matches5); // [ 'e', 'e', 'e', 'e' ]

// 6. 返回第一个匹配的字符串的位置-search

const str6 = 'Hello SteveRocket';
const regex6 = /e/;
const position = str6.search(regex6);
console.log(position); // 1

// 7. 根据正则表达式匹配的位置分割字符串-split

const str7 = 'Hello SteveRocket';
const regex7 = /l/;
const parts = str7.split(regex7);
console.log(parts); // [ 'He', '', 'o SteveRocket' ]


// 8. 返回所有匹配的字符串及其详细信息-matchAll

const str8 = 'Hello SteveRocket';
const regex8 = /l/g;
const matches = [...str8.matchAll(regex8)];
console.log(matches);
// [
//   [ 'l', index: 2, input: 'Hello SteveRocket', groups: undefined ],
//   [ 'l', index: 3, input: 'Hello SteveRocket', groups: undefined ]
// ]



// 9. 替换所有匹配的字符串-replace

const str9 = 'Hello SteveRocket';
const regex9 = /e/g;
const newStr = str9.replace(regex9, 'E');
console.log(newStr); // HEllo StEvERockEt


// 10. 返回正则表达式的字符串表示-toString

const regex10 = /Hello SteveRocket/;
const str10 = regex10.toString();
console.log(str10); // "/Hello SteveRocket/"






//11. 正则表达式-igm
//1. g：全局匹配模式。
const str11 = 'Hello SteveRocket LLL';
const regex11 = /l/g;
const matches11 = str11.match(regex11);
console.log(matches11); // ["l", "l"]

console.log('hello hell SteveRocket'.match(/h(.*?)\b/g));  // [ 'hello', 'hell' ]
console.log('hello hell SteveRocket'.match(/h(.*?)\b/));
[
  'hello',
  'ello',
  index: 0,
  input: 'hello hell SteveRocket',
  groups: undefined
]

console.log(/h(.*?)\b/g.exec('hello steverocket haha'))
console.log(/h(.*?)\b/g.exec('hello steverocket haha'))

console.log(/h(.*?)\b/.exec('hello steverocket haha'))
console.log(/h(.*?)\b/.exec('hello steverocket haha'))

var re = /h(.*?)\b/g;
console.log(re.exec('hello steverocket haha'))
console.log(re.exec('hello steverocket haha'))



//2. i：忽略大小写匹配模式。
const str12 = 'Hello SteveRocket LLL';
const regex = /hello/i;
const match = str12.match(regex);
console.log(match);
// 返回结果是一个数组
//[
//   'Hello',
//   index: 0,
//   input: 'Hello SteveRocket LLL',
//   groups: undefined
//]

console.log(match[0]);  // Hello

console.log(str12.match(/ll/i));
//[ 'll', index: 2, input: 'Hello SteveRocket LLL', groups: undefined ]



//3. m：多行匹配模式。
const str13 = 'Hello\nSteveRocket\nLLLd';
const regex13 = /^h|d$/gm;
const matches13 = str13.match(regex13);
console.log(matches13); // 输出：[ 'd' ]    没匹配到则输出： null



console.log(/a/.test('A'))  //  false
console.log(/a/i.test('A'))  // true


console.log('hello steverocket haha'.match(/h.*?\b/))
//[
//   'hello',
//   index: 0,
//   input: 'hello steverocket haha',
//   groups: undefined
//]
console.log('hello steverocket haha'.match(/h.*?\b/g)) // [ 'hello', 'haha' ]
console.log('hello\nsteverocket\ncramer'.match(/^[\s\S]*?$/g)) // [ 'hello\nsteverocket\ncramer' ]
console.log('hello\nsteverocket\ncramer'.match(/^[\s\S]*?$/gm)) // [ 'hello', 'steverocket', 'cramer' ]



var multiline = require('multiline');
var multilineText = multiline.stripIndent(function () {
/*
    cramer commit
    ```
    hello steverocket, this is nodejs .```
    ```
    foot
*/
});
console.log(multilineText);
var match1 = multilineText.match(/^```[\s\S]+?^```/gm);
console.log(match1);  // [ '```\r\nhello steverocket, this is nodejs .```\r\n```' ]
// 等价于
var match2 = multilineText.match(/^```[^]+?^```/gm);
console.log(match2) ;  // [ '```\r\nhello steverocket, this is nodejs .```\r\n```' ]




//1. 正向先行断言（Positive Lookahead Assertion）
const str = 'hello steverocket';
const regex = /steverocket(?=)/;
const matches = str.match(regex);
console.log(matches);


//2. 负向先行断言（Negative Lookahead Assertion）
const str2 = 'hello steverocket';
const regex2 = /steverocket(?!=!)/;
const matches2 = str2.match(regex2);
console.log(matches2);


// 3. 正向后行断言（Positive Lookbehind Assertion）
const str3 = 'hello steverocket';
const regex3 = /(?<=hello )steverocket/;
const matches3 = str3.match(regex3);
console.log(matches3);


//4. 负向后行断言（Negative Lookbehind Assertion）
const str4 = 'hello cramer';
const regex4 = /(?<!hi )cramer/;
const matches4 = str4.match(regex4);
console.log(matches4);





String.prototype.match() 和 RegExp.prototype.exec()的匹配区别
const str = 'hello world';
const regex = /l/g;
const matches = str.match(regex);
console.log(matches); // ["l", "l", "l"]

const str2 = 'hello world';
const regex2 = /l/g;
let match;
while (match = regex2.exec(str2)) {
  console.log(match[0], regex2.lastIndex);
}


const str = 'hello world';
const regex = /l/;
const matches = str.match(regex);
console.log(matches); // [ 'l', index: 2, input: 'hello world', groups: undefined ]


const str2 = 'hello world';
const regex2 = /l/g;
const matches2 = str2.match(regex2);
console.log(matches2); // ["l", "l", "l"]



const str = 'hello world';
const regex = /l/;
let match = regex.exec(str);
console.log(match); // [ 'l', index: 2, input: 'hello world', groups: undefined ]
match = regex.exec(str);
console.log(match); // [ 'l', index: 2, input: 'hello world', groups: undefined ]
match = regex.exec(str);
console.log(match); // [ 'l', index: 2, input: 'hello world', groups: undefined ]

const str2 = 'hello world';
const regex2 = /l/g;
let match2 = regex2.exec(str2);
console.log(match2); // [ 'l', index: 2, input: 'hello world', groups: undefined ]
match2 = regex2.exec(str2);
console.log(match2); // [ 'l', index: 3, input: 'hello world', groups: undefined ]
match2 = regex2.exec(str2);
console.log(match2); // [ 'l', index: 9, input: 'hello world', groups: undefined ]











