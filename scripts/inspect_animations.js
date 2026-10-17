const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('--- FAVICONS ---');
$('link[rel*="icon"]').each((i, el) => {
  console.log($(el).attr('rel'), $(el).attr('href'), $(el).attr('sizes'));
});

console.log('--- ANIMATION CLASSES / SETTINGS ---');
const animElements = [];
$('[data-settings], [class*="animate"], [class*="animated"], [class*="animation"]').each((i, el) => {
  const cls = $(el).attr('class');
  const ds = $(el).attr('data-settings');
  animElements.push({ tag: el.tagName, cls, ds });
});
console.log('Total animated elements found:', animElements.length);
console.log('Sample anim elements:', JSON.stringify(animElements.slice(0, 15), null, 2));

console.log('--- SCRIPT / CSS LIBRARIES ---');
$('link[rel="stylesheet"]').each((i, el) => {
  const href = $(el).attr('href');
  if (href && (href.includes('anim') || href.includes('slider') || href.includes('rev') || href.includes('swiper') || href.includes('aos') || href.includes('elementor'))) {
    console.log('CSS:', href);
  }
});
$('script[src]').each((i, el) => {
  const src = $(el).attr('src');
  if (src && (src.includes('anim') || src.includes('slider') || src.includes('rev') || src.includes('swiper') || src.includes('aos') || src.includes('elementor') || src.includes('gsap') || src.includes('scroll'))) {
    console.log('JS:', src);
  }
});
