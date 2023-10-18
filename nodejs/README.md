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

## Node.js博客目录
Node.js系列文章推荐阅读：

-   [JavaScript匿名函数的定义、特性、作用和使用场景详解](https://link.juejin.cn?target=http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485882%26idx%3D1%26sn%3Daf48efaa958eb7475afb0295a25da656%26chksm%3De81c2abcdf6ba3aa0f0db31c59096eeed6db1394cdebe988821f1b3b3dc38994e734c6ecb9fb%26scene%3D21%23wechat_redirect "http://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485882&idx=1&sn=af48efaa958eb7475afb0295a25da656&chksm=e81c2abcdf6ba3aa0f0db31c59096eeed6db1394cdebe988821f1b3b3dc38994e734c6ecb9fb&scene=21#wechat_redirect")
-   [Node.js之正则表达式的使用方法详解和实战](https://link.juejin.cn?target=http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485880%26idx%3D2%26sn%3D0c40d7063d4f1ca3b0790de1e9f5851f%26chksm%3De81c2abedf6ba3a835270f820672fc6c1f657db746cabd839f176306e884f4bae1617a2bdfab%26scene%3D21%23wechat_redirect "http://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485880&idx=2&sn=0c40d7063d4f1ca3b0790de1e9f5851f&chksm=e81c2abedf6ba3a835270f820672fc6c1f657db746cabd839f176306e884f4bae1617a2bdfab&scene=21#wechat_redirect")
-   [Node.js测试之benchmark基准测试详解和代码示例](https://link.juejin.cn?target=http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485875%26idx%3D1%26sn%3D799a57c6d472960381259ecca213d38b%26chksm%3De81c2ab5df6ba3a3a7b65fa5cab01e03063632ce3fdc3e4529f4cffbb4b075ba644ffe2c2265%26scene%3D21%23wechat_redirect "http://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485875&idx=1&sn=799a57c6d472960381259ecca213d38b&chksm=e81c2ab5df6ba3a3a7b65fa5cab01e03063632ce3fdc3e4529f4cffbb4b075ba644ffe2c2265&scene=21#wechat_redirect")
-   [Node.js重点概念之作用域、闭包、this的使用详解和代码示例](https://link.juejin.cn?target=http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485858%26idx%3D1%26sn%3Dfcd07d51d31af75352b4328161277a89%26chksm%3De81c2aa4df6ba3b2dce5147be2aedf77cffefd692071e3d6799b5e210f531da70121d37ad546%26scene%3D21%23wechat_redirect "http://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485858&idx=1&sn=fcd07d51d31af75352b4328161277a89&chksm=e81c2aa4df6ba3b2dce5147be2aedf77cffefd692071e3d6799b5e210f531da70121d37ad546&scene=21#wechat_redirect")
-   [Node.js开发框架Express.js做一个简单的Web应用以及代码详解](https://link.juejin.cn?target=http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485821%26idx%3D1%26sn%3D8814fb6bff89edea81e15e8ecc7037e7%26chksm%3De81c2a7bdf6ba36d06b8f50c3b991359f49bdd4bd476ea92d974f040dd8875f9cd1a0758a85b%26scene%3D21%23wechat_redirect "http://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485821&idx=1&sn=8814fb6bff89edea81e15e8ecc7037e7&chksm=e81c2a7bdf6ba36d06b8f50c3b991359f49bdd4bd476ea92d974f040dd8875f9cd1a0758a85b&scene=21#wechat_redirect")
-   [Node.js高并发编程之promise的基本使用、作用和特点详细介绍以及代码示例](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485799%26idx%3D2%26sn%3D15b3abc7b1508ed521c575133e0c2e7c%26chksm%3De81c2a61df6ba37767843ffefe52da6113f47778b986e5bb78c06baece7dd7d8a4b10d3a451e%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485799&idx=2&sn=15b3abc7b1508ed521c575133e0c2e7c&chksm=e81c2a61df6ba37767843ffefe52da6113f47778b986e5bb78c06baece7dd7d8a4b10d3a451e&scene=21#wechat_redirect")
-   [Node.js数据库开发之Mongodb 与 Mongoose 的使用和详细介绍](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485770%26idx%3D1%26sn%3D944746f3d0c11031b98f449a21b67343%26chksm%3De81c2a4cdf6ba35a75edaf152b14d7edea0e0c465f30cf9c9184c1b289085179457f68322675%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485770&idx=1&sn=944746f3d0c11031b98f449a21b67343&chksm=e81c2a4cdf6ba35a75edaf152b14d7edea0e0c465f30cf9c9184c1b289085179457f68322675&scene=21#wechat_redirect")
-   [Node.js基础之require、exports、module构建模块的基本属性详细介绍](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485761%26idx%3D2%26sn%3D6c7908e1567d096a6f570ba8a4ddb27d%26chksm%3De81c2a47df6ba3518e132603ccf0daaa4f1ffe986b53d88f9471889423dc8cdcf7ef7c18bc57%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485761&idx=2&sn=6c7908e1567d096a6f570ba8a4ddb27d&chksm=e81c2a47df6ba3518e132603ccf0daaa4f1ffe986b53d88f9471889423dc8cdcf7ef7c18bc57&scene=21#wechat_redirect")
-   [Node.js并发编程eventproxy详解与代码示例](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485740%26idx%3D2%26sn%3D63afe6e0a5d55b84b821cfe24eed2e5f%26chksm%3De81c2a2adf6ba33cc0c4af4d7c2d0c6cc34c9b57d504fb0f16952d6e762bf4233dfa64e6b624%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485740&idx=2&sn=63afe6e0a5d55b84b821cfe24eed2e5f&chksm=e81c2a2adf6ba33cc0c4af4d7c2d0c6cc34c9b57d504fb0f16952d6e762bf4233dfa64e6b624&scene=21#wechat_redirect")
-   [Node.js之10个JavaScript的最佳实践技能点（1）](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485707%26idx%3D1%26sn%3De18ca4d669c00b950adfdbffaa765387%26chksm%3De81c2a0ddf6ba31bcdcd1ad93de7a8b9897e5b84d7f526737e3bcd4abae16070761a855ba536%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485707&idx=1&sn=e18ca4d669c00b950adfdbffaa765387&chksm=e81c2a0ddf6ba31bcdcd1ad93de7a8b9897e5b84d7f526737e3bcd4abae16070761a855ba536&scene=21#wechat_redirect")
-   [Node.js的热门框架：Midway.js特点、应用场景和使用方法介绍](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485621%26idx%3D3%26sn%3D510674b14d6f3c40b8b4d6c96830f1dc%26chksm%3De81c2bb3df6ba2a503932d122ddb3f05266a621e9a34a8d0c66b350850c8bde0bb3446073c45%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485621&idx=3&sn=510674b14d6f3c40b8b4d6c96830f1dc&chksm=e81c2bb3df6ba2a503932d122ddb3f05266a621e9a34a8d0c66b350850c8bde0bb3446073c45&scene=21#wechat_redirect")
-   [Node.js的热门框架：Nest.js特性、常用功能和代码示例介绍以及与Midway.js的对比分析](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485569%26idx%3D1%26sn%3Dcd48fe706700ec6381c60f4fddab7b85%26chksm%3De81c2b87df6ba2917b0dcd2164baef58c64a162a0735d9b5ceea54775d06c17f0154afce232a%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485569&idx=1&sn=cd48fe706700ec6381c60f4fddab7b85&chksm=e81c2b87df6ba2917b0dcd2164baef58c64a162a0735d9b5ceea54775d06c17f0154afce232a&scene=21#wechat_redirect")
-   [JavaScript箭头函数的基本使用和高级使用方法详解](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485373%26idx%3D2%26sn%3Dda2b15d1e8037b429f5a568219a082ef%26chksm%3De81c24bbdf6badad3a673ec45fe2ce110486fe15e8292c8381bc1bf6bc79280063d967e4ee61%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485373&idx=2&sn=da2b15d1e8037b429f5a568219a082ef&chksm=e81c24bbdf6badad3a673ec45fe2ce110486fe15e8292c8381bc1bf6bc79280063d967e4ee61&scene=21#wechat_redirect")
-   [开源项目 | 最热门高效的Node.JS开源第三方开发库和特点(持续更新......)](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485372%26idx%3D2%26sn%3Dab176cfef22e73f817a7bd52230e79a5%26chksm%3De81c24badf6badac2fb61910d503294f670f62bf751b78334025d44e79514e7eef85aef9572a%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485372&idx=2&sn=ab176cfef22e73f817a7bd52230e79a5&chksm=e81c24badf6badac2fb61910d503294f670f62bf751b78334025d44e79514e7eef85aef9572a&scene=21#wechat_redirect")
-   [前端开发技术栈（工具篇）：2023最新版nvm的Win/Linux安装和使用（详细） 27.8k stars](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485369%26idx%3D1%26sn%3De333db7ee0fd95b5efec9b33840b1cdf%26chksm%3De81c24bfdf6bada966c7e8a87a4d482c6ae5a0500d62e979f776391a51f4f812da0ebdc5805b%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485369&idx=1&sn=e333db7ee0fd95b5efec9b33840b1cdf&chksm=e81c24bfdf6bada966c7e8a87a4d482c6ae5a0500d62e979f776391a51f4f812da0ebdc5805b&scene=21#wechat_redirect")
-   [弄清楚Node.js的功能特性、运行时、组成和发展趋势分析以及与JavaScript的区别](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485367%26idx%3D1%26sn%3D77c61a12b8795c76bf2d610c45075d6d%26chksm%3De81c24b1df6bada7984da4629fc63b575db1f42d625b94ad99ec91856a0c3d0501f2023f022d%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485367&idx=1&sn=77c61a12b8795c76bf2d610c45075d6d&chksm=e81c24b1df6bada7984da4629fc63b575db1f42d625b94ad99ec91856a0c3d0501f2023f022d&scene=21#wechat_redirect")
-   [学习Node.js的9大理由以及日常开发中的14个高级特性和代码示例分享](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485191%26idx%3D2%26sn%3D1d12b7f053b644456cea64dc90a56e2a%26chksm%3De81c2401df6bad1799ac66e297432c30c1af8b4b562337d25ea3b6fa28186cf626b64c14fb28%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485191&idx=2&sn=1d12b7f053b644456cea64dc90a56e2a&chksm=e81c2401df6bad1799ac66e297432c30c1af8b4b562337d25ea3b6fa28186cf626b64c14fb28&scene=21#wechat_redirect")
-   [Node.js基本概念、特点、用途和常用模块，以及Express框架开发一个web应用](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247485189%26idx%3D2%26sn%3D080e977ad247c50deefe8da1ebc89860%26chksm%3De81c2403df6bad1514a130bd80a237bf9524bd117892d743ca7a5f4c6f9629ff983f164c81aa%26scene%3D21%23wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247485189&idx=2&sn=080e977ad247c50deefe8da1ebc89860&chksm=e81c2403df6bad1514a130bd80a237bf9524bd117892d743ca7a5f4c6f9629ff983f164c81aa&scene=21#wechat_redirect")
-   [开源项目 | JavaScript最热门的25个前端开发插件（库）总结](https://link.juejin.cn?target=http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247484535%26idx%3D1%26sn%3D0fdf4d2744caf0a6018e07a425dd54af%26chksm%3De81c2771df6bae676a050eb248fdd024f614098e32250451051c4befb6510c9fcc284c5ca344%26scene%3D21%23wechat_redirect "http://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247484535&idx=1&sn=0fdf4d2744caf0a6018e07a425dd54af&chksm=e81c2771df6bae676a050eb248fdd024f614098e32250451051c4befb6510c9fcc284c5ca344&scene=21#wechat_redirect")
-   [前端开发技术栈（模板篇）：10款较流行的前端后台管理系统模板](https://link.juejin.cn?target=http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247484443%26idx%3D1%26sn%3Dbd2c2ba5b68b1d3b4018e34df373ff4d%26chksm%3De81c271ddf6bae0b17a5247fdb5b444e1cf61862d9e1ae5740ae4cadb38b1dd035d73f811c7b%26scene%3D21%23wechat_redirect "http://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247484443&idx=1&sn=bd2c2ba5b68b1d3b4018e34df373ff4d&chksm=e81c271ddf6bae0b17a5247fdb5b444e1cf61862d9e1ae5740ae4cadb38b1dd035d73f811c7b&scene=21#wechat_redirect")
-   [50+款前端高效开发辅助工具总结](https://link.juejin.cn?target=http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247484413%26idx%3D1%26sn%3Debf16b8c1d91a80fdac4b03beaba821f%26chksm%3De81c20fbdf6ba9ed2bb20a0f801505168f66234007c3e405f8d2d947d6b001f07e56cd66a259%26scene%3D21%23wechat_redirect "http://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247484413&idx=1&sn=ebf16b8c1d91a80fdac4b03beaba821f&chksm=e81c20fbdf6ba9ed2bb20a0f801505168f66234007c3e405f8d2d947d6b001f07e56cd66a259&scene=21#wechat_redirect")
-   [开源项目 | Vue进阶：总结下日常开发中关于Vue的热门开源项目](https://link.juejin.cn?target=http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIyMzQ5MTY4OQ%3D%3D%26mid%3D2247484674%26idx%3D1%26sn%3De44410068490b38dbe647f3b6663f0e7%26chksm%3De81c2604df6baf129ec18f1f49bd19967aa41d4be644023a9e426b74916ba0303e1d004c256b%26scene%3D21%23wechat_redirect "http://mp.weixin.qq.com/s?__biz=MzIyMzQ5MTY4OQ==&mid=2247484674&idx=1&sn=e44410068490b38dbe647f3b6663f0e7&chksm=e81c2604df6baf129ec18f1f49bd19967aa41d4be644023a9e426b74916ba0303e1d004c256b&scene=21#wechat_redirect")


## 参考链接
1. [Node.js 中文网](https://nodejs.org/zh-cn/)
2. [V8 引擎官网](https://v8.dev/)
3. [Libuv 官网](http://libuv.org/)