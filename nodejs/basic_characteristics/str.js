let str = 'Hello, SteveRocket!';
console.log(str.length);  // 19


console.log(str.charAt(0)); // 输出：H
console.log(str.charAt(7)); // 输出：S
// 如果超出字符串的长度则获取的是空字符串
console.log('' === str.charAt(22));  // 输出：true



let str1 = 'Hello,';
let str2 = ' SteveRocket!';
console.log(str1.concat(str2));  // Hello, SteveRocket!
console.log(str1 + str2); // Hello, SteveRocket!


let str3 = 'Hello, SteveRocket，这是中文!';
console.log(str3.toUpperCase()); // 输出：HELLO, STEVEROCKET，这是中文!
console.log(str3.toLowerCase()); // 输出：hello, steverocket，这是中文!


let str4 = 'Hello, SteveRocket! 这是中文!';
console.log(str4.indexOf('o')); // 输出：4
console.log(str4.lastIndexOf('这')); // 输出：20


let str5 = 'Hello, SteveRocket!';
console.log(str5.substring(0, 5)); // 输出：Hello
console.log(str5.substr(0,5));  //输出：Hello
//指定开始 和 结束位置
console.log(str5.slice(7, 9)); //输出：St
//指定开始位置 到 末尾
console.log(str5.slice(7)); // 输出：SteveRocket!


let str6 = 'Hello, SteveRocket!';
console.log(str6.split(',')); //输出：[ 'Hello', ' SteveRocket!' ]


const str7 = 'Hello SteveRocket.png';
console.log(str7.endsWith('.png')); // true
console.log(str7.endsWith('.png', str7.length)); // true
console.log(str7.endsWith('SteveRocket')); // false

console.log(str7.startsWith('Hello')); // true
console.log(str7.startsWith('SteveRocket')); // false


const str8 = 'Hello SteveRocket. 这是中文';
const regexp = /[a-zA-Z]/g;
const iterator = str8.matchAll(regexp);
console.log(iterator, typeof  iterator);  // Object [RegExp String Iterator] {} object
for (const match of iterator) {
    console.log(match[0]);
}


const str = 'Hello SteveRocket';
const anchorStr = str.anchor('myAnchor');
console.log(anchorStr); // <a name="myAnchor">Hello SteveRocket</a>


const str2 = 'Hello SteveRocket';
const bigStr = str2.big();
console.log(bigStr); // <big>Hello SteveRocket</big>


const str3 = 'Hello SteveRocket';
const blinkStr = str3.blink();
console.log(blinkStr); // <blink>Hello SteveRocket</blink>


const str4 = 'Hello SteveRocket';
const boldStr = str4.bold();
console.log(boldStr); // <b>Hello SteveRocket</b>


const str5 = 'SteveRocket';
const subStr = str5.sub();
console.log(subStr); // <sub>SteveRocket</sub>


const str6 = 'x^2 + y^2';
const supStr = str6.sup();
console.log(supStr); // <sup>x^2 + y^2</sup>


let name = 'SteveRocket';
let age = 25;
let message = `My name is ${name} and I'm ${age} years old. ${age + 100}`;
console.log(message);



let arr = ["Hello", "Cramer!"];
let str = arr.join(", ");   // 类似python的 ‘-’.join()
console.log(str);  // Hello, Cramer!

let str2 = "   Hello, SteveRocket!   ";
let trimmedStr = str2.trim();
console.log(`-${str2}--${trimmedStr}-`);  // -   Hello, SteveRocket!   --Hello, SteveRocket!-
console.log(`-${str2.trimLeft()}、${str2.trimRight()}、${str2.trimEnd()}、${str2.trimStart()}-`);
// -Hello, SteveRocket!   、   Hello, SteveRocket!、   Hello, SteveRocket!、Hello, SteveRocket!   -


let str3 = "Hello, SteveRocket!";
let replacedStr = str3.replace("SteveRocket", "Cramer");
console.log(replacedStr, str3);// Hello, Cramer! Hello, SteveRocket!



console.log('abc'.padStart(10));         // "       abc"
console.log('abc'.padStart(10, "foo"));  // "foofoofabc"
console.log('abc'.padStart(6,"123465")); // "123abc"
console.log('abc'.padStart(8, "0"));     // "00000abc"
console.log('abc'.padStart(1));          // "abc"

console.log('steve'.padEnd(10));          // "steve     "
console.log('steve'.padEnd(10, "foo"));   // "stevefoofo"
console.log('steve'.padEnd(6, "123456")); // "steve1"
console.log('steve'.padEnd(1));           // "steve"



let num = 9898;
// 在字符串开头填充指定长度的字符串
let sTr = num.toString().padStart(8,'0');
console.log(typeof num, typeof sTr);  // 输出：number string
console.log(num, sTr);  // 输出：9898 00009898

// 在字符串末尾填充指定长度的字符串
let sTr2 = num.toString().padEnd(8, '-');
console.log(sTr2);   // 输出：9898----
