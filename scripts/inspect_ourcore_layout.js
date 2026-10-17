const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('scripts/about_us_full.html', 'utf8');
const $ = cheerio.load(html);

const coreSection = $('#ourcore, .elementor-element-99e6fff');
console.log('Core section tag and classes:', coreSection.attr('class'));

coreSection.find('.elementor-row > div, .elementor-container > div, .elementor-column').each((i, col) => {
  console.log(`Column ${i}:`, $(col).attr('class'));
  $(col).find('.elementskit-infobox, img, h2, h3').each((j, item) => {
    if ($(item).hasClass('elementskit-infobox')) {
      console.log(`  Infobox:`, $(item).find('.elementskit-info-box-title').text().trim(), '|', $(item).find('.box-body p').text().trim());
    } else if (item.tagName === 'img') {
      console.log(`  Img:`, $(item).attr('src'));
    } else {
      console.log(`  Heading:`, $(item).text().trim());
    }
  });
});
