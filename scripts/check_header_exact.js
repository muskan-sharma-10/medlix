const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('scripts/medlix_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('=== TOPBAR TEXT & LINKS ===');
$('[data-id="2774ad2"]').each((_, el) => {
  console.log($(el).text().replace(/\s+/g, ' ').trim());
  $(el).find('a').each((_, a) => console.log('LINK:', $(a).attr('href'), $(a).text().trim()));
});

console.log('\n=== HEADER NAVBAR TEXT & LINKS ===');
$('[data-id="2e7172a"]').each((_, el) => {
  $(el).find('a').each((_, a) => console.log('NAV:', $(a).attr('href'), $(a).text().trim()));
});
