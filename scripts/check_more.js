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

console.log('--- COMPASSION (CIRCLE OF CARE 4,5,6) ---');
const compIdx = rawHtml.indexOf('Compassion');
if (compIdx !== -1) {
  console.log(clean(rawHtml.substring(compIdx - 50, compIdx + 1500)));
}
const learnIdx = rawHtml.indexOf('Learning');
if (learnIdx !== -1) {
  console.log(clean(rawHtml.substring(learnIdx - 50, learnIdx + 1500)));
}

console.log('\n--- STATS ALL 4 NUMBERS ---');
const funIdx = rawHtml.indexOf('Independent Hospitals');
const funChunk = rawHtml.substring(funIdx - 400, funIdx + 4000);
// Extract all instances of data-value and the following funfact-title or text
const dRegex = /data-value="([^"]+)"[\s\S]*?<p class="funfact-title">([\s\S]*?)<\/p>/gi;
let dm;
while ((dm = dRegex.exec(funChunk)) !== null) {
  console.log(`Stat: ${dm[1]} -> ${clean(dm[2])}`);
}

console.log('\n--- TRANSPLANT 4 SERVICES ---');
const trIdx = rawHtml.indexOf('Transplant Services</h2>');
if (trIdx !== -1) {
  console.log(clean(rawHtml.substring(trIdx, trIdx + 4000)));
}

console.log('\n--- ABOUT US 3 SERVICES IN BODY ---');
// Let's find "Intensive Care" in body
const abMatches = [];
let aidx = 0;
while ((aidx = rawHtml.indexOf('Intensive Care', aidx)) !== -1) {
  abMatches.push(aidx);
  aidx += 14;
}
console.log('Intensive care indices:', abMatches);
abMatches.forEach(idx => {
  if (idx > 100000) {
    console.log(clean(rawHtml.substring(idx - 100, idx + 1500)));
  }
});

console.log('\n--- INSURANCE CAROUSEL LOGOS ---');
const insHeadIdx = rawHtml.indexOf('Insurance Tie –Ups');
if (insHeadIdx !== -1) {
  const insChunk = rawHtml.substring(insHeadIdx, insHeadIdx + 5000);
  console.log('Ins raw html:', insChunk.substring(0, 2000));
}
