const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('scripts/medlix_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('=== THE MEDLIX APPROACH SECTION 4cd05ab ===');
const approach = $('[data-id="4cd05ab"]');
approach.find('*').each((_, el) => {
  const attrs = $(el).attr();
  for (const k in attrs) {
    if (attrs[k] && (attrs[k].includes('.png') || attrs[k].includes('.jpg') || attrs[k].includes('.jpeg'))) {
      console.log($(el).prop('tagName'), k, attrs[k].slice(0, 150));
    }
  }
});
