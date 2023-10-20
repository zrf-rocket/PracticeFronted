const cheerio = require('cheerio');
const html = '<ul id="fruits"><li class="apple">SteveRocket</li><li class="orange">Orange</li><li class="pear">Cramer</li></ul>';

const $ = cheerio.load(html);

$('#fruits').children().each((index, element) => {
  console.log($(element).text());
});



const cheerio2 = require('cheerio');
const superagent = require('superagent');

superagent.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    const $ = cheerio2.load(response.text);
    $('h2').each((index, element) => {
      console.log($(element).text());
    });
  })
  .catch(error => {
    console.log(error);
  });
