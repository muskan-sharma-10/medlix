const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('scripts/doctor_single.html', 'utf8');
const $ = cheerio.load(html);

console.log('Title:', $('title').text());
console.log('H1:', $('h1').text().trim());
console.log('H2s:', $('h2').map((i, el) => $(el).text().trim()).get());
console.log('H3s:', $('h3').map((i, el) => $(el).text().trim()).get());
console.log('Images:', $('img').map((i, el) => $(el).attr('src')).get().filter(s => s && s.includes('doctor')));
