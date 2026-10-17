const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('scripts/doctors_page.html', 'utf8');
const $ = cheerio.load(html);

console.log('Title:', $('title').text());
console.log('H1:', $('h1').text());
console.log('All Headings:');
$('h1, h2, h3, h4, h5').each((i, el) => {
  console.log($(el).prop('tagName'), $(el).text().replace(/\s+/g, ' ').trim());
});

console.log('\nAll Links:');
$('a').each((i, el) => {
  const href = $(el).attr('href');
  if (href && (href.includes('doctor') || href.includes('dr'))) {
    console.log(href, $(el).text().replace(/\s+/g, ' ').trim());
  }
});
