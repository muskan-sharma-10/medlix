const fs = require('fs');

const html = fs.readFileSync('d:/medlix/scripts/medlix_full.html', 'utf8');

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
console.log('--- STATS ---');
// Let's find all occurrences of 'Hospitals', 'Beds', 'Specialties', 'Doctors' with their numbers
const statsSnippetIdx = html.indexOf('Independent Hospitals');
if (statsSnippetIdx !== -1) {
  console.log('Stats text:', clean(html.substring(statsSnippetIdx - 150, statsSnippetIdx + 1200)));
}

// 2. Circle of Care
console.log('\n--- CIRCLE OF CARE ---');
const circleIdx = html.indexOf('The CIRCLE of Care');
if (circleIdx !== -1) {
  const cChunk = html.substring(circleIdx, circleIdx + 4000);
  // print all text
  console.log(clean(cChunk));
}

// 3. Why Choose Us (all 6)
console.log('\n--- WHY CHOOSE US ---');
const whyIdx = html.indexOf('Why Choose Medlix Hospital');
if (whyIdx !== -1) {
  console.log(clean(html.substring(whyIdx, whyIdx + 3000)));
}

// 4. Specialties
console.log('\n--- SPECIALTIES ---');
const spIdx = html.indexOf('Medical Specialities');
if (spIdx !== -1) {
  // Let's search inside the next 15000 chars for images and text
  const spChunk = html.substring(spIdx, spIdx + 20000);
  console.log('Specialties raw text:', clean(spChunk.substring(0, 1500)));
  // Extract all img in spChunk
  const imgRe = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let im;
  const sImgs = [];
  while ((im = imgRe.exec(spChunk)) !== null) {
    sImgs.push(im[1]);
  }
  console.log('Specialties images count:', sImgs.length, sImgs.slice(0, 10));
}

// 5. Locations
console.log('\n--- LOCATIONS ---');
const locIdx = html.indexOf('Our Locations');
if (locIdx !== -1) {
  const locChunk = html.substring(locIdx, locIdx + 10000);
  console.log(clean(locChunk.substring(0, 3000)));
}

// 6. Insurance
console.log('\n--- INSURANCE ---');
const insIdx = html.indexOf('Insurance');
if (insIdx !== -1) {
  const insChunk = html.substring(insIdx, insIdx + 8000);
  console.log(clean(insChunk.substring(0, 1000)));
  const imgRe = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let im;
  const insImgs = [];
  while ((im = imgRe.exec(insChunk)) !== null) {
    if (im[1].includes('uploads') && !insImgs.includes(im[1])) {
      insImgs.push(im[1]);
    }
  }
  console.log('Insurance images:', insImgs);
}

// 7. About Us
console.log('\n--- ABOUT US ---');
// find Intensive Care, Specialized Support Service, Medical & Surgical
const intIdx = html.indexOf('Intensive Care');
if (intIdx !== -1) {
  console.log(clean(html.substring(intIdx - 200, intIdx + 2000)));
}

// 8. Footer & Contact
console.log('\n--- FOOTER & CONTACT ---');
const reachIdx = html.indexOf('Reach Out to Us');
if (reachIdx !== -1) {
  console.log(clean(html.substring(reachIdx - 100, reachIdx + 3000)));
}
