const fs = require('fs');

const rawHtml = fs.readFileSync('d:/medlix/scripts/medlix_full.html', 'utf8');

function clean(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#038;/g, '&')
    .replace(/&#8211;/g, '-')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

// 1. CIRCLE OF CARE: Let's extract between "The CIRCLE of Care" and the next big section
const circleStart = rawHtml.indexOf('The CIRCLE of Care: Our Core Values');
const circleChunk = rawHtml.substring(circleStart, circleStart + 6000);
// Split by elementskit-info-box-title
const cItems = circleChunk.match(/<h3[^>]*class="elementskit-info-box-title">([\s\S]*?)<\/h3>[\s\S]*?<div class="box-body">\s*<p>([\s\S]*?)<\/p>/gi) || [];
console.log('--- CIRCLE OF CARE (COUNT ' + cItems.length + ') ---');
cItems.forEach(ci => {
  const tm = ci.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const pm = ci.match(/<p>([\s\S]*?)<\/p>/i);
  console.log(clean(tm[1]), '==>', clean(pm[1]));
});

// 2. INSURANCE LOGOS AT INDEX 395707
console.log('\n--- INSURANCE CAROUSEL LOGOS (BODY) ---');
const insBlock = rawHtml.substring(395700, 395700 + 10000);
const insLogos = [];
const imgRegex = /<img[^>]+(?:src|data-src)=["']([^"']+)["'][^>]*>/gi;
let im;
while ((im = imgRegex.exec(insBlock)) !== null) {
  if (im[1].includes('uploads') && !insLogos.includes(im[1])) {
    insLogos.push(im[1]);
  }
}
console.log('Insurance Logos:', insLogos);

// 3. TRANSPLANT SERVICES (4 CARDS)
console.log('\n--- TRANSPLANT SERVICES (BODY) ---');
const trStart = rawHtml.indexOf('Transplant Services</h2>');
const trChunk = rawHtml.substring(trStart, trStart + 6000);
const trItems = trChunk.match(/<h3[^>]*class="elementskit-info-box-title">([\s\S]*?)<\/h3>[\s\S]*?<div class="box-body">\s*<p>([\s\S]*?)<\/p>/gi) || [];
trItems.forEach(ti => {
  const tm = ti.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const pm = ti.match(/<p>([\s\S]*?)<\/p>/i);
  console.log(clean(tm[1]), '==>', clean(pm[1]));
});

// 4. ABOUT US 3 CARDS
console.log('\n--- ABOUT US 3 CARDS ---');
const abStart = rawHtml.indexOf('Intensive Care</h3>', 300000);
const abChunk = rawHtml.substring(abStart - 200, abStart + 4000);
const abItems = abChunk.match(/<h3[^>]*class="elementskit-info-box-title">([\s\S]*?)<\/h3>[\s\S]*?<div class="box-body">\s*<p>([\s\S]*?)<\/p>/gi) || [];
abItems.forEach(ai => {
  const tm = ai.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const pm = ai.match(/<p>([\s\S]*?)<\/p>/i);
  console.log(clean(tm[1]), '==>', clean(pm[1]));
});

// 5. ALL HOSPITALS / LOCATIONS
console.log('\n--- ALL HOSPITALS / LOCATIONS ---');
const locStart = rawHtml.indexOf('Our Locations</h2>');
const locChunk = rawHtml.substring(locStart, locStart + 8000);
const locMatches = locChunk.match(/<h3[^>]*class="elementor-image-box-title">([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*class="elementor-image-box-description">([\s\S]*?)<\/p>/gi) || [];
locMatches.forEach(lm => {
  const tm = lm.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const pm = lm.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  console.log(clean(tm[1]), '==>', clean(pm[1]));
});
