const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('scripts/medlix_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('=== HERO SLIDER SECTION 151ff71 ===');
const hero = $('[data-id="151ff71"]');
hero.find('*').each((_, el) => {
  const attrs = $(el).attr();
  for (const k in attrs) {
    if (attrs[k] && (attrs[k].includes('.png') || attrs[k].includes('.jpg') || attrs[k].includes('.jpeg'))) {
      console.log($(el).prop('tagName'), k, attrs[k].slice(0, 150));
    }
  }
});
