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
    .replace(/\s+/g, ' ')
    .trim();
}

console.log('--- STATS FULL SECTION ---');
const statIdx = html.indexOf('Independent Hospitals');
const statBlock = html.substring(statIdx - 500, statIdx + 3000);
// Find all number-percentages and their funfact-title
const funfactRegex = /<span class="number-percentage"[^>]*data-value="([^"]+)"[^>]*>[\s\S]*?<\/span>[\s\S]*?<p class="funfact-title">([\s\S]*?)<\/p>/gi;
let fm;
const allStats = [];
while ((fm = funfactRegex.exec(statBlock)) !== null) {
  allStats.push({ value: fm[1], title: clean(fm[2]) });
}
console.log('Extracted Stats:', allStats);

console.log('\n--- CIRCLE OF CARE ALL 6 ---');
const circleIdx = html.indexOf('The CIRCLE of Care: Our Core Values');
const circleBlock = html.substring(circleIdx, circleIdx + 6000);
// look for all h3 and p in this block
const cRegex = /<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<div class="box-body">\s*<p>([\s\S]*?)<\/p>/gi;
let cm;
const circleValues = [];
while ((cm = cRegex.exec(circleBlock)) !== null) {
  circleValues.push({ title: clean(cm[1]), desc: clean(cm[2]) });
}
console.log('Extracted Circle:', circleValues);

console.log('\n--- INSURANCE LOGOS ---');
const insIdx = html.indexOf('Insurance Tie –Ups');
const insBlock = html.substring(insIdx, insIdx + 8000);
const insImgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
const insLogos = [];
let im;
while ((im = insImgRegex.exec(insBlock)) !== null) {
  if (im[1].includes('uploads') && !insLogos.includes(im[1])) {
    insLogos.push(im[1]);
  }
}
console.log('Extracted Insurance Logos:', insLogos);

console.log('\n--- LOCATIONS ALL ---');
const locIdx = html.indexOf('Our Locations</h2>');
const locBlock = html.substring(locIdx, locIdx + 12000);
// Find each hospital card
const locCardRegex = /<div class="elementor-image-box-wrapper">[\s\S]*?<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]*?<h3 class="elementor-image-box-title">([\s\S]*?)<\/h3>[\s\S]*?<p class="elementor-image-box-description">([\s\S]*?)<\/p>/gi;
const locations = [];
let lm;
while ((lm = locCardRegex.exec(locBlock)) !== null) {
  locations.push({
    image: lm[1],
    title: clean(lm[2]),
    desc: clean(lm[3])
  });
}
console.log('Extracted Locations:', locations);

console.log('\n--- ABOUT US DETAILS ---');
// Let's find About Us in the body
const aboutMatch = html.match(/<h2[^>]*class="[^"]*elementskit-section-title[^"]*"[^>]*>About Us<\/h2>/i);
if (aboutMatch) {
  const aIdx = html.indexOf(aboutMatch[0]);
  const aBlock = html.substring(aIdx - 1000, aIdx + 5000);
  console.log('About us heading & text:', clean(aBlock.substring(0, 1500)));
  // find images in about block
  const aImgs = [];
  let aim;
  const aImgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  while ((aim = aImgRegex.exec(aBlock)) !== null) {
    if (aim[1].includes('uploads') && !aImgs.includes(aim[1])) aImgs.push(aim[1]);
  }
  console.log('About Images:', aImgs);
}

console.log('\n--- SPECIALTIES IN BODY ---');
// Let's find "Medical Specialities" in body
const specHeadingIdx = html.lastIndexOf('Medical Specialities');
console.log('Last index of Medical Specialities:', specHeadingIdx);
const specBlock = html.substring(specHeadingIdx, specHeadingIdx + 10000);
console.log('Spec snippet:', clean(specBlock.substring(0, 1000)));
const sImgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]*?<figcaption class="elementor-image-carousel-caption">([\s\S]*?)<\/figcaption>|<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]*?<div class="elementor-image-carousel-caption">([\s\S]*?)<\/div>/gi;
let sm;
const bodySpecs = [];
while ((sm = sImgRegex.exec(specBlock)) !== null) {
  const img = sm[1] || sm[3];
  const cap = clean(sm[2] || sm[4]);
  bodySpecs.push({ img, cap });
}
console.log('Body specialties found:', bodySpecs);

console.log('\n--- TRANSPLANT SERVICES ---');
const trIdx = html.indexOf('Transplant Services</h2>');
if (trIdx !== -1) {
  const trBlock = html.substring(trIdx, trIdx + 5000);
  const trRegex = /<h3[^>]*class="elementskit-info-box-title">([\s\S]*?)<\/h3>[\s\S]*?<div class="box-body">\s*<p>([\s\S]*?)<\/p>/gi;
  const transplants = [];
  let trm;
  while ((trm = trRegex.exec(trBlock)) !== null) {
    transplants.push({ title: clean(trm[1]), desc: clean(trm[2]) });
  }
  console.log('Transplants:', transplants);
}

console.log('\n--- APPROACH SERVICES ---');
const appIdx = html.indexOf('The Medlix Approach</h2>');
if (appIdx !== -1) {
  const appBlock = html.substring(appIdx, appIdx + 5000);
  const appRegex = /<h3[^>]*class="elementskit-info-box-title">([\s\S]*?)<\/h3>[\s\S]*?<div class="box-body">\s*<p>([\s\S]*?)<\/p>/gi;
  const approach = [];
  let apm;
  while ((apm = appRegex.exec(appBlock)) !== null) {
    approach.push({ title: clean(apm[1]), desc: clean(apm[2]) });
  }
  console.log('Approach items:', approach);
}

console.log('\n--- FOOTER ADDRESS & OUTPATIENT ---');
const footIdx = html.indexOf('Our Hospitals</h4>');
if (footIdx !== -1) {
  console.log(clean(html.substring(footIdx - 200, footIdx + 2000)));
}
