# NodeJS
[移步工程](https://gitee.com/SteveRocket/practice_nodejs)

<img src="./imgs/wechat.png" width="500px" alt="公众号：CTO Plus"/>

## NodeJS是什么
<pre>
在 Node.js 之前，JavaScript 只能运行在浏览器中，作为网页脚本使用，为网页添加一些特效，或者和服务器进行通信。有了 Node.js 以后，JavaScript 就可以脱离浏览器，像其它编程语言一样直接在计算机上使用，再也不受浏览器的限制了。
Node.js 不是一门新的编程语言，也不是一个 JavaScript 框架，它是一套 JavaScript 运行环境，用来支持 JavaScript 代码的执行。
Node.js是一个JavaScript运行时（Runtime）。
</pre>

<pre>
有了运行时NodeJS，JavaScript除了用于Web前端编程（网页编程），还有如下功能：
    1. 开发网站后台，这原本是 PHP、Java、Python、Ruby 等编程语言擅长的；
    2. 开发GUI程序，也就是我们常说的带界面的电脑软件，比如QQ、360、迅雷等；
    3. 手机APP，包括 Android APP、iOS APP；
    4. CLI工具，也就是不带界面的命令行程序。
</pre>


[下载地址：](https://nodejs.org/zh-cn/download/) https://nodejs.org/zh-cn/download/  

## 编写程序

node 运行js文件
运行：node demo1.js

## 运行时是什么？
程序在运行期间需要依赖的一系列组件或者工具；把这些工具和组件打包在一起提供给开发者，开发者就能运行自己编写的代码。

对于 JavaScript 来说，它在运行期间需要依赖以下组件：
1) 解释器
JavaScript 是一种脚本语言，需要一边解释一边运行，用到哪些源代码就编译哪些源代码，整个过程由解释器完成。没有解释器的话，JavaScript 只是一堆纯文本文件，不能被计算机识别。
2) 标准库
我们在 JavaScript 代码中会调用一些内置函数，这些函数不是我们自己编写的，而是标准库自带的。
3) 本地模块
所谓本地模块，就是已经被提前编译好的模块，它们是二进制文件，和可执行文件在内部结构上没有什么区别，只是不能单独运行而已。这些本地模块其实就是动态链接库（在 Windows 下是 .dll 文件），如果你使用过C语言、C++ 等编译型语言，那你应该能够更好地理解它。

JavaScript 的很多功能都需要本地模块的支持，比如：
<pre>
1. Cookie 用于存储少量的用户数据，它是用户计算机上的一种小文件，使用 Cookie 必须有文件操作模块的支持。
2. Ajax 可以借助互联网从服务器请求数据，这是一种网络操作，必须有网络库的支持。
3. 一步一步跟踪代码的执行流程，从中发现逻辑错误，这个过程叫做调试，需要有调试器（Debugger）的支持。
4. JavaScript 可以操作 HTML，这需要 HTML 解析模块提前构建起 DOM 树。

本地模块一般封装了通用功能，对性能要求较高，所以通常使用编译型语言来实现，比如C语言、C++、汇编语言等。

JavaScript 解释器需要本地模块的支持，标准库在编写时也会调用本地模块的接口，而我们编写的JavaScript代码一般不会直接使用本地模块，所以 Web前端程序员触及不到它们。
</pre>
总结  
* 解释器、标准库、本地模块等各种组件/工具共同支撑了 JavaScript 代码的运行，它们统称为 JavaScript 运行时。
* 在Node.js之前，JavaScript 运行时被绑定在浏览器中，作为浏览器的各种模块出现。这意味着，要想运行 JavaScript 代码就必须启动浏览器，JavaScript 逃不出浏览器的手掌心，它的功能受到很大的限制，只能作为网页脚本使用。
* V8 引擎构建了 Node.js，拓展了 JavaScript 的编程能力；
* Node.js 衍生了 Libuv 库，给网络开发增加了一款优秀的工具。

## Node.js的组成
Node.js 运行时主要由 V8 引擎、标准库和本地模块组成，尤其是本地模块的多少，从底层决定了 Node.js 功能的强弱。
1) V8 引擎
<pre>
V8 引擎就是 JavaScript 解释器，它负责解析和执行 JavaScript 代码。

V8 引擎借鉴了 Java 虚拟机和 C++ 编译器的众多技术，它将 JavaScript 代码直接编译成原生机器码，并且使用了缓存机制来提高性能，这使得 JavaScript 的运行速度可以媲美二进制程序。
</pre>
2) 本地模块  
<pre>
Node.js 集成了众多高性能的开源库，它们使用 C/C++ 语言实现。  

Node.js 直接在计算机上运行 JavaScript 代码，并且要赋予 JavaScript 强大的能力，所以它的本地模块和浏览器中的运行时有很多大区别，甚至说几乎没有什么关联。Node.js 几乎完全抛弃了浏览器，自己从头构建了一套全新的 JavaScript 运行时。
</pre>
4) 标准库  
<pre>
本地模块使用 C/C++ 编写，而 Node.js 面向 JavaScript 开发人员，所以必须要封装本地模块的 C/C++ 接口，提供一套优雅的 JavaScript 接口给开发人员，并且要保持接口在不同平台（操作系统）上的一致性。
</pre>

## 函数式编程


## 参考链接
1. [Node.js 中文网](https://nodejs.org/zh-cn/)
2. [V8 引擎官网](https://v8.dev/)
3. [Libuv 官网](http://libuv.org/)