const eventproxy = require('eventproxy');
const superagent = require('superagent');
const cheerio = require('cheerio');
const url = require('node:url');  // Nodejs内置模块

// eventproxy 的实例
const ep = new eventproxy();

const cnodeUrl = 'https://cnodejs.org';

// 使用`ep.after()`方法来控制并发  命令 ep 重复监听 3 次 `topic_html` 事件再行动
ep.after('topic_html', 3, (topics) => {
  topics = topics.map((topicPair) => {
    const topicUrl = topicPair[0];
    const topicHtml = topicPair[1];
    const $ = cheerio.load(topicHtml);
    return ({
      title: $('.topic_full_title').text().trim(),
      href: topicUrl,
      comment1: $('.reply_content').eq(0).text().trim(),
    });
  });
  console.log('final:');
  console.log(topics);
});

superagent.get(cnodeUrl)
  .end((err, res) => {
    if (err) {
      console.log(`请求失败，错误信息：${err}`);
      return;
    }
    const topicUrls = [];
    const $ = cheerio.load(res.text);
    $('#topic_list .topic_title').each((idx, element) => {
      const $element = $(element);
      const href = $element.attr('href');
      topicUrls.push(href);

      // 可以获取完整的URL地址
      const href2 = url.resolve(cnodeUrl, href);
      console.log(href2);
    });

    console.log(topicUrls.length, topicUrls);

    topicUrls.forEach((topicUrl) => {
      superagent.get(`${cnodeUrl}${topicUrl}`)
        .end((err, res) => {
          console.log(`fetch ${topicUrl} successful`);
          ep.emit('topic_html', [topicUrl, res.text]);
        });
    });
  });
