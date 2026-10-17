const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('scripts/about_us_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('--- Section 2: elementor-element-51fffcc ---');
console.log($('.elementor-element-51fffcc').html());

console.log('\n--- Section 3: elementor-element-9667ea0 (Stats) ---');
$('.elementor-element-9667ea0 .elementskit-funfact').each((i, el) => {
  console.log($(el).html());
});
console.log('Other text in Section 3:', $('.elementor-element-9667ea0').text().replace(/\s+/g, ' '));

console.log('\n--- Section 7: elementor-element-fa1ef09 (The Medlix Approach) ---');
$('.elementor-element-fa1ef09').find('h2, h3, p, .elementor-widget-container').each((i, el) => {
  const t = $(el).text().trim().replace(/\s+/g, ' ');
  if (t && el.tagName) {
    console.log(`${el.tagName}: ${t}`);
  }
});
