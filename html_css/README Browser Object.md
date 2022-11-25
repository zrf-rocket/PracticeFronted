# Browser Object
## Window Object
Window 对象表示浏览器中打开的窗口。
如果文档包含框架（< frame > 或 < iframe > 标签），浏览器会为 HTML 文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。  
__注意：__ 没有应用于 window 对象的公开标准，不过所有浏览器都支持该对象。


## Navigator Object



## Screen Object



## History Object



## Location Object



## Storage Object
Web 存储 API 提供了 sessionStorage （会话存储） 和 localStorage（本地存储）两个存储对象来对网页的数据进行添加、删除、修改、查询操作。
* localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
* sessionStorage 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。