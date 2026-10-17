const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('=== ALL ICONS ===');
$('link').each((i, el) => {
  const rel = $(el).attr('rel') || '';
  if (rel.toLowerCase().includes('icon')) {
    console.log({ rel, href: $(el).attr('href'), sizes: $(el).attr('sizes') });
  }
});
$('meta').each((i, el) => {
  const name = $(el).attr('name') || '';
  if (name.toLowerCase().includes('tileimage') || name.toLowerCase().includes('icon')) {
    console.log({ metaName: name, content: $(el).attr('content') });
  }
});

console.log('\n=== ALL ANIMATIONS IN HTML ===');
const animMap = {};
$('*').each((i, el) => {
  const ds = $(el).attr('data-settings');
  if (ds) {
    try {
      const parsed = JSON.parse(ds);
      if (parsed._animation || parsed.animation) {
        const animName = parsed._animation || parsed.animation;
        const delay = parsed._animation_delay || 0;
        animMap[animName] = (animMap[animName] || 0) + 1;
      }
    } catch(e) {}
  }
  const cls = $(el).attr('class') || '';
  if (cls.includes('animated') || cls.includes('animate')) {
    const matched = cls.match(/animate[^\s]*/g) || [];
    matched.forEach(m => { animMap[m] = (animMap[m] || 0) + 1; });
  }
});
console.log('Animation distribution:', animMap);

console.log('\n=== DETAILED ANIMATED SECTIONS ===');
$('[data-settings]').each((i, el) => {
  const ds = $(el).attr('data-settings');
  try {
    const parsed = JSON.parse(ds);
    if (parsed._animation) {
      const title = $(el).find('h1, h2, h3, h4, h5, h6, .ekit-heading--title, p').first().text().trim().replace(/\s+/g, ' ').substring(0, 60);
      console.log(`[${parsed._animation}] delay: ${parsed._animation_delay || 0}ms | Class: ${$(el).attr('class')?.slice(0, 40)} | Text: "${title}"`);
    }
  } catch(e) {}
});
