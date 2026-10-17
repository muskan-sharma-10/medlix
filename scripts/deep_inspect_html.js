const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('scripts/medlix_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('=== STYLESHEETS & FONTS ===');
$('link[rel="stylesheet"]').each((i, el) => {
  const href = $(el).attr('href');
  if (href && (href.includes('font') || href.includes('elementor') || href.includes('style'))) {
    console.log(href);
  }
});

console.log('\n=== HEADER STRUCTURE ===');
const header = $('header').html() || $('.elementor-location-header').html() || $('nav').html();
console.log('Header snippet:', header ? header.slice(0, 1000) : 'No header tag found');

console.log('\n=== ELEMENTOR SECTIONS (data-id & classes) ===');
$('.elementor-section-wrap > .elementor-element, .elementor-section').each((i, el) => {
  const id = $(el).attr('data-id');
  const cls = $(el).attr('class');
  const text = $(el).text().replace(/\s+/g, ' ').trim().slice(0, 100);
  if (id) {
    console.log(`Section [${id}] (classes: ${cls}): "${text}"`);
  }
});
