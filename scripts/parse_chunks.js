const fs = require('fs');

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

// 1. Stats
const statsHtml = fs.readFileSync('d:/medlix/scripts/chunk_stats.html', 'utf8');
console.log('--- STATS CONTENT ---');
const statItems = [];
const statBlockRegex = /<div class="elementor-widget-container">([\s\S]*?)<\/div>/gi;
// Let's also look for numbers and labels
const numRegex = /<span[^>]*class="[^"]*elementor-counter-number[^"]*"[^>]*data-to-value="([^"]+)"[^>]*>([\s\S]*?)<\/span>[\s\S]*?<div[^>]*class="elementor-counter-title">([\s\S]*?)<\/div>/gi;
let m;
while ((m = numRegex.exec(statsHtml)) !== null) {
  statItems.push({ value: m[1], label: clean(m[3]) });
}
if (statItems.length === 0) {
  // Let's print raw lines containing numbers/words
  console.log('Raw stats snippet:', clean(statsHtml.substring(0, 1000)));
} else {
  console.log('Stats found:', statItems);
}

// 2. Circle of Care
const circleHtml = fs.readFileSync('d:/medlix/scripts/chunk_circle.html', 'utf8');
console.log('\n--- CIRCLE OF CARE ---');
const circleItems = [];
// look for h3 and following p
const cRegex = /<h3[^>]*>([C|I|R|L|E]\s*[-–—]\s*[^<]+)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
while ((m = cRegex.exec(circleHtml)) !== null) {
  circleItems.push({ title: clean(m[1]), desc: clean(m[2]) });
}
console.log('Circle items found:', circleItems);

// 3. Why Choose
const whyHtml = fs.readFileSync('d:/medlix/scripts/chunk_why.html', 'utf8');
console.log('\n--- WHY CHOOSE ---');
const whyItems = [];
const wRegex = /<h3[^>]*class="elementor-image-box-title">([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*class="elementor-image-box-description">([\s\S]*?)<\/p>/gi;
while ((m = wRegex.exec(whyHtml)) !== null) {
  whyItems.push({ title: clean(m[1]), desc: clean(m[2]) });
}
console.log('Why items found:', whyItems);

// 4. Specialties
const specHtml = fs.readFileSync('d:/medlix/scripts/chunk_specialties.html', 'utf8');
console.log('\n--- SPECIALTIES ---');
const specItems = [];
// Find carousel images and captions
const spRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]*?<div class="elementor-image-carousel-caption">([^<]+)<\/div>/gi;
while ((m = spRegex.exec(specHtml)) !== null) {
  specItems.push({ image: m[1], title: clean(m[2]) });
}
if (specItems.length === 0) {
  // check alt or data
  const spRegex2 = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/gi;
  while ((m = spRegex2.exec(specHtml)) !== null) {
    if (m[1].includes('uploads')) {
      specItems.push({ image: m[1], title: m[2] });
    }
  }
}
console.log('Specialties found:', specItems);

// 5. Insurance
const insHtml = fs.readFileSync('d:/medlix/scripts/chunk_insurance.html', 'utf8');
console.log('\n--- INSURANCE ---');
const insItems = [];
const insImgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
while ((m = insImgRegex.exec(insHtml)) !== null) {
  if (m[1].includes('uploads') && !insItems.includes(m[1])) {
    insItems.push(m[1]);
  }
}
console.log('Insurance logos count:', insItems.length, insItems);

// 6. Locations
const locHtml = fs.readFileSync('d:/medlix/scripts/chunk_locations.html', 'utf8');
console.log('\n--- LOCATIONS ---');
const locItems = [];
// each location has image, title (h3), description / address
const lRegex = /<div class="[^"]*hospitalImages[^"]*"[\s\S]*?<img[^>]+src=["']([^"']+)["'][\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
while ((m = lRegex.exec(locHtml)) !== null) {
  locItems.push({ image: m[1], name: clean(m[2]), desc: clean(m[3]) });
}
if (locItems.length === 0) {
  // alternative location regex
  const lRegex2 = /<h3[^>]*class="[^"]*elementor-image-box-title[^"]*"[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*class="[^"]*elementor-image-box-description[^"]*"[^>]*>([\s\S]*?)<\/p>/gi;
  while ((m = lRegex2.exec(locHtml)) !== null) {
    locItems.push({ name: clean(m[1]), desc: clean(m[2]) });
  }
}
console.log('Locations found:', locItems);

// 7. About Us
const aboutHtml = fs.readFileSync('d:/medlix/scripts/chunk_about.html', 'utf8');
console.log('\n--- ABOUT US ---');
console.log(clean(aboutHtml.substring(0, 1500)));

// 8. Transplant
const trHtml = fs.readFileSync('d:/medlix/scripts/chunk_transplant.html', 'utf8');
console.log('\n--- TRANSPLANT ---');
const trItems = [];
const trRegex = /<h3[^>]*>([^<]*Transplant)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
while ((m = trRegex.exec(trHtml)) !== null) {
  trItems.push({ name: clean(m[1]), desc: clean(m[2]) });
}
console.log('Transplants found:', trItems);

// 9. Approach
const appHtml = fs.readFileSync('d:/medlix/scripts/chunk_approach.html', 'utf8');
console.log('\n--- APPROACH ---');
const appItems = [];
const appRegex = /<h3[^>]*class="elementskit-info-box-title">([\s\S]*?)<\/h3>[\s\S]*?<div class="box-body">\s*<p>([\s\S]*?)<\/p>/gi;
while ((m = appRegex.exec(appHtml)) !== null) {
  appItems.push({ title: clean(m[1]), desc: clean(m[2]) });
}
console.log('Approach items found:', appItems);

// 10. Footer
const footHtml = fs.readFileSync('d:/medlix/scripts/chunk_footer.html', 'utf8');
console.log('\n--- FOOTER ---');
console.log(clean(footHtml.substring(0, 2000)));
