const cheerio = require('cheerio');
const fs = require('fs');

const $ = cheerio.load(fs.readFileSync('scripts/live_footer_dump.html', 'utf8'));

const s1 = $('.elementor-element-16a2');
s1.find('.elementor-top-column').each((i, col) => {
  console.log(`\n================== Column ${i} ==================`);
  console.log($(col).html());
});
