const fs = require('fs');

const html = fs.readFileSync('d:/medlix/scripts/medlix_full.html', 'utf8');

// 1. Title & Meta
const titleMatch = html.match(/<title>(.*?)<\/title>/i);
console.log('TITLE:', titleMatch ? titleMatch[1] : 'N/A');

// 2. Navigation items
console.log('\n--- NAV MENUS ---');
const navRegex = /<nav[^>]*>([\s\S]*?)<\/nav>/gi;
let navMatch;
while ((navMatch = navRegex.exec(html)) !== null) {
  const links = [];
  const aRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let aMatch;
  while ((aMatch = aRegex.exec(navMatch[1])) !== null) {
    const text = aMatch[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    if (text) links.push({ href: aMatch[1], text });
  }
  console.log('Nav found:', links);
}

// Check menu list items
const menuRegex = /<ul[^>]+class=["'][^"']*(?:menu|nav)[^"']*["'][^>]*>([\s\S]*?)<\/ul>/gi;
let menuMatch;
while ((menuMatch = menuRegex.exec(html)) !== null) {
  const links = [];
  const aRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let aMatch;
  while ((aMatch = aRegex.exec(menuMatch[1])) !== null) {
    const text = aMatch[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    if (text) links.push({ href: aMatch[1], text });
  }
  console.log('Menu list found:', links);
}

// 3. All Headings
console.log('\n--- HEADINGS ---');
const hRegex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
let hMatch;
const headings = [];
while ((hMatch = hRegex.exec(html)) !== null) {
  const text = hMatch[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (text) {
    headings.push({ tag: 'h' + hMatch[1], text });
  }
}
console.log(headings);

// 4. All Images
console.log('\n--- IMAGES ---');
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let imgMatch;
const images = [];
while ((imgMatch = imgRegex.exec(html)) !== null) {
  const full = imgMatch[0];
  const src = imgMatch[1];
  const altMatch = full.match(/alt=["']([^"']*)["']/i);
  images.push({ src, alt: altMatch ? altMatch[1] : '' });
}
console.log('Total images found:', images.length);
fs.writeFileSync('d:/medlix/scripts/extracted_images.json', JSON.stringify(images, null, 2));

// 5. Look for Circle of care, statistics, etc.
console.log('\n--- SEARCHING SPECIFIC TERMS ---');
const terms = ['CIRCLE', 'Care', 'Integrity', 'Respect', 'Compassion', 'Learning', 'Excellence', 'Beds', 'Aarvy', 'Tie-Up', 'Insurance', 'Emergency', 'Comprehensive Care'];
terms.forEach(term => {
  const idx = html.indexOf(term);
  console.log(`Term "${term}": found at index ${idx}`);
});
