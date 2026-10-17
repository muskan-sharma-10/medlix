const https = require('https');
const cheerio = require('cheerio');

https.get('https://medlix.in/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const $ = cheerio.load(html);
    console.log('Live medlix.in icon tags:');
    $('link').each((i, el) => {
      const rel = $(el).attr('rel') || '';
      if (rel.toLowerCase().includes('icon')) {
        console.log(rel, '->', $(el).attr('href'), 'sizes:', $(el).attr('sizes'));
      }
    });
    $('meta').each((i, el) => {
      const name = $(el).attr('name') || '';
      if (name.toLowerCase().includes('icon') || name.toLowerCase().includes('image')) {
        console.log('meta:', name, '->', $(el).attr('content'));
      }
    });
  });
}).on('error', console.error);
