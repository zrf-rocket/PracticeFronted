const superagent = require('superagent');
const cheerio = require('cheerio');

// 用 superagent 去抓取 https://cnodejs.org/ 的内容
superagent.get('https://cnodejs.org/').end((err, res)=>{
    // 常规的错误处理
   if (err) {
       console.log(`请求失败，错误信息：${err}`);
       return next(err);
       // return;
   }
   // res.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为`$`剩下就都是 jquery 的内容了
   const $ = cheerio.load(res.text);
   const items = [];
   $('#topic_list .topic_title').each((ids, element)=>{
       const $element = $(element);
       items.push({
          title:$element.attr('title'),
           href:$element.attr('href')
       });
   });
   console.log(items);
});