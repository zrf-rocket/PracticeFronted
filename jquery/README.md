# jQuery
## 简介
<pre>
jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.
jQuery 是一个 JavaScript 函数库。jQuery 极大地简化了 JavaScript 编程。
</pre>

jQuery 库包含以下特性：
* HTML 元素选取
* HTML 元素操作
* CSS 操作
* HTML 事件函数
* JavaScript 特效和动画
* HTML DOM 遍历和修改
* AJAX
* Utilities


## 实例
##### demo3-选择器  
##### demo4-事件  

##### demo5-效果-隐藏显示  
##### demo6-效果-淡入淡出  
##### demo7-效果-滑动  
##### demo8-效果-动画  
##### demo9-效果-停止动画  
##### demo10-效果-callback  
##### demo11-效果-链  

##### demo12-html-捕获_获取  
##### demo13-html-设置  
##### demo14-html-添加元素  
##### demo15-html-删除元素  
##### demo16-html-CSS类  
##### demo17-html-css方法  
##### demo18-html-尺寸  

##### demo19-遍历  
##### demo20-祖先  
##### demo21-后代  
##### demo22-同胞  
##### demo23-过滤  

##### demo20-Ajax-Ajax load()方法  
##### demo21-Ajax-get()方法post()方法  

##### demo22-noConflict()方法  
##### demo23-JSONP  

##### demo24-validate插件
##### demo25-cookie
##### demo26-accordion
##### demo27-autocomplete
##### demo28-growl
##### demo29-密码验证
##### demo30-prettydate
##### demo31-tooltip
##### demo32-treeview


## JQuery常用插件
### 1. 模态窗口插件：SimpleModal
SimpleModal是一个轻量级的jQuery插件，它为模态窗口的开发提供了一个强有力的接口，可以把它当作模态窗口的框架。SimpleModal非常的灵活，可以创建你能够想象到的任何东西i，并且 你还不需要考虑UI开发中的跨浏览器相关问题。
SimpleModal插件的下载地址：http://www.ericmmartin.com/projects/simplemodal/

### 2. 管理Cookie的插件：Cookie
Cookie是网站设计者放置在客户端的小文本文件。Cookie能为用户提供很多的便利，例如购物网站存储用户曾经浏览过的产品列表，或者门户网站记住用户喜欢选择浏览哪类新闻。在用户运行的情况下，还可以存储用户的登陆情况，使得用户在访问网站时不必每次都键入这些信息。
jQuery提供了一个十分简单的插件来管理网站的Cookie，该插件的名称也是Cookie.
jQuery Cookie插件的下载地址：http://plugins.jquery.com/cookie/

### 3. jQuery UI插件
jQuery UI源自于一个jQuery插件——Interface。Interface插件最早版本我1.2，只支持jQuery1.1.2的版本，后来有人对Interface的大部分代表基于jQuery1.2的API进行重构，并统一了API。由于改进重大，因此版本号不是1.3而是直接跳到1.5，并且改名为jQuery UI。
jQuery UI主要分为3个部分，交互、微件和效果库
交互。这里都是一些 与鼠标 交互相关的内容。包括拖动，置放，缩放，选择 和排序 等待。微件（Widget）中有部分是基于这些交互组建来制作的。此库需要 一个jQuery UI 核心库——ui.core.js支持
微件。这里主要是一些界面的扩展。里边包括 了手风琴导航，自动完成，取色器，对话框，滑块，标签 ，日历，放大镜，进度条和微调控制器等待。此库需要 一个jQuery UI 核心库——ui.core.js支持
效果库。此库用于提供丰富的动画效果，让动画不再局限于animate()方法。效果库有自己的一套核心即effects.core.js，无需jQuery的核心库ui.core.js支持
jQuery UI插件的下载地址为：http://jqueryui.com/download/all/。选择“jQuery UI 1.6rc2”链接可以直接下载完整套件，包括源码，发行版和测试驱动等。

### 4. 动态绑定事件插件:livequery
jQuery的事件绑定功能使得jQuery代码与HTML代码能够完全分离，这样代码的层次关系更加清晰，维护起来也更加简单。然而对于动态加载到页面的HTML元素，每次都需要重新绑定事件到这些元素上，十分不便。一款新的插件由此产生，即livequery，可以利用它给相应的DOM元素注册时间或者触发回调函数函数。不仅当前选择器匹配的元素会被绑定事件，而且后来通过JavaScript添加的元素都会被绑定事件。当元素不再和选择器匹配时，livequery会自动取消事件注册，使得开发者不再需要关注HTML元素的来源，只需要关注如何编写其绑定的事件即可。
通过jQuery选择器选择一个DOM元素，livequery插件会实时地在整个DOM范围将其持久化。这意味着无论元素是先前存在的还是后来动态加载的，事件都会被绑定，就像是CSS给元素添加样式一样。同时，这款插件几乎在没占用什么资源的情况下就做到了这些功能。
jQuery livequery插件的下载地址：http://plugins.jquery.com/livequery/

### 5. jQuery表单插件：Form
jQuery Form插件是一个优秀的Ajax表单插件，可以非常容易地、无侵入地升级HTML表单以支持Ajax。jQuery有两个核心方法——ajaxForm()和ajaxSubmit()，它们集合了从控制表单元素到决定如何管理提交进程的功能。另外iain，插件还包括其他的一些方法：formToArray()、formSerialize()、fieldSerialize()、fieldValue()、clearForm()和resetForm()等
jQuery Form表单插件下载地址：http://jquery.malsup.com/form/。

### 6. jQuery表单验证插件：Validation
最常使用JavScript的场合就是表单的验证，而jQuery作为一个优秀的JavaScript库，也提供了一个优秀的表单验证插件——Validation.Validation是历史最悠久的jQuery插件之一，经过了全球范围内不同项目的验证，并得到了许多Web开发者的好评。作为一个标准的验证方法库，Validation拥有如下优点：
内置验证规则：拥有必填、数字、E-Mail、URL和信用卡号码等19类内置验证规则
自定义验证规则：可以很方便地自定义验证规则
简单强大的验证信息提示：默认了验证信息提示，并提供自定义覆盖默认提示信息的功能
实时验证：可以通过keyup或blur事件触发验证，而不仅仅在表单提交的时候验证。
插件下载地址：http://bassistance.de/jquery-plugins/jquery-plugin-validation/
Validation插件的官方API地址为： http://docs.jquery.com/Plugins/Validation

## 函数式编程



## 参考资料
[jQuery官网：](https://jquery.com/) https://jquery.com/  



