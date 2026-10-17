const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('scripts/about_us_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('Title:', $('title').text());

console.log('Search for ourcore:');
console.log('#ourcore exists?', $('#ourcore').length);
if ($('#ourcore').length) {
  console.log('ourcore text preview:');
  console.log($('#ourcore').text().substring(0, 300));
}

// Let's search for "ourcore" anywhere in the html
const idx = html.indexOf('ourcore');
console.log('ourcore in raw html index:', idx);
if (idx !== -1) {
  console.log('Surrounding html around ourcore:\n', html.substring(idx - 200, idx + 500));
}

// Let's dump all headings in the page
console.log('\n--- Headings in page ---');
$('h1, h2, h3, h4, h5, h6').each((i, el) => {
  const text = $(el).text().trim().replace(/\s+/g, ' ');
  if (text) {
    console.log(`${el.tagName}: ${text}`);
  }
});
