const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('scripts/about_us_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('--- WHY CHOOSE US ---');
$('#whychoose, .elementor-element-8d3c239').find('.elementor-widget-image-box, .elementor-widget-heading, .elementor-widget-icon-box, .elementor-column').each((i, el) => {
  const img = $(el).find('img').attr('src');
  const title = $(el).find('h3, .elementor-image-box-title, .elementor-heading-title').text().trim();
  const desc = $(el).find('p, .elementor-image-box-description').text().trim();
  if (title || desc || img) {
    console.log(`Item: Title="${title}" | Desc="${desc}" | Img="${img}"`);
  }
});

console.log('\n--- THE MEDLIX APPROACH ---');
$('#approach, .elementor-element-fa1ef09').find('.elementor-widget-image-box, .elementor-column, .elementor-widget').each((i, el) => {
  const img = $(el).find('img').attr('src');
  const title = $(el).find('h2, h3, .elementor-image-box-title').text().trim();
  const desc = $(el).find('p, .elementor-image-box-description').text().trim();
  if (title || desc || img) {
    console.log(`Approach Item: Title="${title}" | Desc="${desc}" | Img="${img}"`);
  }
});
