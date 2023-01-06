# JavaScript

The_Definitive_Guide_6th_Edition 目录为 `《[JavaScript权威指南(第六版)].(美)David.Flanagan》`书籍代码

<pre>
JavaScript与HTML和CSS共同构成了网页，其中：
    HTML 用来定义网页的内容，例如标题、正文、图像等；
    CSS 用来控制网页的外观和布局，例如颜色、字体、背景等；
    JavaScript 用来实时更新网页中的内容，控制了网页的行为，例如从服务器获取数据并更新到网页中，修改某些标签的样式或其中的内容等，可以让网页更加生动。
</pre>

## JavaScript的特点
1) 解释型脚本语言  
JavaScript 是一种解释型脚本语言，与 C、C++ 等语言需要先编译再运行不同，使用 JavaScript 编写的代码不需要编译，可以直接运行。
2) 面向对象  
JavaScript 是一种面向对象语言，使用 JavaScript 不仅可以创建对象，也能操作使用已有的对象。
3) 弱类型  
JavaScript 是一种弱类型的编程语言，对使用的数据类型没有严格的要求，例如您可以将一个变量初始化为任意类型，也可以随时改变这个变量的类型。
4) 动态性  
JavaScript 是一种采用事件驱动的脚本语言，它不需要借助 Web 服务器就可以对用户的输入做出响应，例如我们在访问一个网页时，通过鼠标在网页中进行点击或滚动窗口时，通过 JavaScript 可以直接对这些事件做出响应。
5) 跨平台  
JavaScript 不依赖操作系统，在浏览器中就可以运行。因此一个 JavaScript 脚本在编写完成后可以在任意系统上运行，只需要系统上的浏览器支持 JavaScript 即可。



## 数据类型

## 对象

1. Array对象
2. Boolean对象
3. Date对象
   时间戳
   时间戳与字符串日期互转
   日期计算
   倒推
   往前推

4. Math对象
5. Number对象
6. String对象
7. RegExp对象
8. 全局属性/函数
9. Error对象
10. DOM元素
DOM事件、DOM EventListener、DOM元素、HTML collection对象、NodeList对象

11. Element对象
12. attributes对象
13. 浏览器BOM对象 
    1. Window
    2. Window Screen
    3. Window Location
    4. Window History
    5. Navigator
    6. 弹窗
    7. 计时事件
    8. Cookie
    9. session
    10. 前端缓存
    11. localStorage
    12. sessionStorage
    13. token


#### 运算符

## 作用域

## 事件

## 字符串

字符串操作
位数不足填充

#### 截取

运算符
三目运算符 ?:
整除
向前取整
Math.ceil(winners.length/winner_nums);
向后取整
四舍五入
保留小数点
取余
取模
与
或
非

比较
条件
Switch
for
while
break和continue
typeof
类型转换
数字_整型互转
正则表达式
错误
调试
变量
变量提升

严格模式
使用误区
表单
获取jQuery form表单的数据serialize
表单验证
验证api
保留关键字
this
let和const
JSON
字典
JSON.parse
JSON.stringly
两个字典合并
void
异步编程
promise
代码规范

## 函数

    参数、调用、闭包

## 类

    继承、静态方法


## 高级

    prototype
    Number对象
    String
    Date日期
    Array数组
    Boolean布尔
    Math算数
    RegExp对象


JS库
测试JQuery
测试prototype
创建/确定完之后关闭dialog模态框
选择器
事件
   事件委托
   事件冒泡与事件捕获
效果
文档操作
属性操作
css操作
Ajax
循环数组
数据
核心
属性

JS获取字典中的值，没拿到对应的key则使用默认值

JS实例

## 函数式编程lambda

## 参考资料

JavaScript对象
HTML DOM对象
JavaScript异步编程
JavaScript静态方法


## JavaScript 与 ECMAScript 的关系
<pre>
ECMAScript（简称“ES”）是根据 ECMA-262 标准实现的通用脚本语言，ECMA-262 标准主要规定了这门语言的语法、类型、语句、关键字、保留字、操作符、对象等几个部分，目前 ECMAScript 的最新版是 ECMAScript6（简称“ES6”）。

至于 JavaScript，有时人们会将 JavaScript 与 ECMAScript 看作是相同的，其实不然，JavaScript 中所包含的内容远比 ECMA-262 中规定的多得多，完整的 JavaScript 是由以下三个部分组成：
   核心（ECMAScript）：提供语言的语法和基本对象；
   文档对象模型（DOM）：提供处理网页内容的方法和接口；
   浏览器对象模型（BOM）：提供与浏览器进行交互的方法和接口。
</pre>

## 前端缓存

<pre>
是浏览器为了提升网站的加载性能，缩短用户等待时间而采取的措施，浏览器总是想尽量少地向服务器发送请求，能够从自己保存的副本中得到的，就不去麻烦服务器了，毕竟自己动手丰衣足食嘛，所以更准确的叫法应该为浏览器缓存，下文中如果出现缓存等字眼，指的就是前端缓存或浏览器缓存。
</pre>

### 1.Cookie

<pre>
cookie是比较老的前端缓存技术了，它的特点是想要使用它前端必须要有服务（静态网页是不行的），而且存储大小限制在4kb。那么为什么必须要有服务才能使用cookie呢？因为只要有请求涉及cookie，cookie就要在服务器和浏览器之间来回传送，而且由于浏览器的跨域限制，客户端和服务端必须要保证同源的原则,由于cookie是存放在前端的，所以安全问题一直是个大问题，因此一般重要的信息不建议放在cookie中存放。
</pre>

### 2.Session

<pre>
对于服务端的程序眼来说session大家肯定很熟悉了，session是一种服务端的机制，也就是能把信息存放在服务端，所以安全可以保障，它的原理是通过session id来识别客户端，这个session id是存放在cookie中的（当然session id让用户看见没无妨），服务端会通过session id来识别客户端进行匹配和判断。它和cookie对比起来差距就很明显了，一个是把数据存在客户端；一个存在服务端，从安全性考虑的话一般像用户名密码这种私密信息一般放在session中。
</pre>

### 3.localStorage

<pre>
它的特点就是“持久”，一旦通过保存，不通过手动清除的话，就会一直保存在前端，它的保存格式是键值对的方式也就是“key-value”的方式保存的，它的存储空间大小限制在500万字符左右，一下是它的一些使用方法：
    localStorage.length 获得storage中的个数
    localStorage.key(n) 获得storage中第n个元素对的键值（第一个元素是0）
    localStorage.getItem(key) 获取键值key对应的值
    localStorage.key 获取键值key对应的值
    localStorage.setItem(key, value) 添加数据，键值为key，值为value
    localStorage.removeItem(key) 移除键值为key的数据
    localStorage.clear() 清除所有数据
</pre>

### 4.sessionStorage

<pre>
这个和localStorage有什么区别呢？sessionStorage是一种会话级别的本地存储，一旦关闭浏览器他就会消失，而前者是很“持久”的，即使你关闭一万次浏览器也没事，所以差距还是很大的。后两者是H5才有的特性，因为现在都是前后端分离的开发模式，前端工程师都很青睐这两种前端缓存方式，以下是sessionStorage的记本用法：
    sessionStorage.length 获得storage中的个数
    sessionStorage.key(n) 获得storage中第n个元素对的键值（第一个元素是0）
    sessionStorage.getItem(key) 获取键值key对应的值
    sessionStorage.key 获取键值key对应的值
    sessionStorage.setItem(key, value) 添加数据，键值为key，值为value
    sessionStorage.removeItem(key) 移除键值为key的数据
    sessionStorage.clear() 清除所有数据
</pre>










