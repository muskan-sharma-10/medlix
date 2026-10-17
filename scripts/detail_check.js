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

// 1. Stats #4
const statIdx = rawHtml.indexOf('Medical Specialties');
console.log('--- STAT #4 ---');
console.log(clean(rawHtml.substring(statIdx, statIdx + 1000)));

// 2. Circle of care full text
const cIdx = rawHtml.indexOf('The CIRCLE of Care');
console.log('\n--- CIRCLE OF CARE RAW ---');
console.log(clean(rawHtml.substring(cIdx, cIdx + 4500)));

// 3. Insurance logos raw
const insIdx = rawHtml.indexOf('Insurance Tie');
console.log('\n--- INSURANCE RAW ---');
const insBlock = rawHtml.substring(insIdx, insIdx + 3000);
const imgMatches = insBlock.match(/https:\/\/medlix\.in\/wp-content\/uploads\/[^\s"'>]+/gi) || [];
console.log('Ins images found:', [...new Set(imgMatches)]);

// 4. Locations raw
const locIdx = rawHtml.indexOf('Our Locations');
console.log('\n--- LOCATIONS RAW ---');
console.log(clean(rawHtml.substring(locIdx, locIdx + 5000)));
const locBlock = rawHtml.substring(locIdx, locIdx + 5000);
const locImages = locBlock.match(/https:\/\/medlix\.in\/wp-content\/uploads\/[^\s"'>]+/gi) || [];
console.log('Loc images:', [...new Set(locImages)]);

// 5. Transplant services raw
const trIdx = rawHtml.indexOf('Transplant Services');
console.log('\n--- TRANSPLANT RAW ---');
console.log(clean(rawHtml.substring(trIdx, trIdx + 3000)));

// 6. About us 3 points (Intensive Care, Specialized Support Service, Medical & Surgical)
const abIdx = rawHtml.indexOf('Intensive Care');
console.log('\n--- ABOUT 3 POINTS ---');
console.log(clean(rawHtml.substring(abIdx - 100, abIdx + 2500)));

// 7. Footer - Outpatient timings & Emergency & Address
const ftIdx = rawHtml.indexOf('Outpatient timings');
console.log('\n--- OUTPATIENT & FOOTER ---');
console.log(clean(rawHtml.substring(ftIdx - 200, ftIdx + 2500)));
