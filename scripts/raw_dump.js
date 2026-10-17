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
    .replace(/\s+/g, ' ')
    .trim();
}

function dumpAround(query, lenBefore = 100, lenAfter = 2500) {
  let idx = 0;
  let count = 0;
  while ((idx = rawHtml.indexOf(query, idx)) !== -1) {
    count++;
    console.log(`\n================ MATCH #${count} FOR "${query}" (idx ${idx}) ================`);
    const slice = rawHtml.substring(Math.max(0, idx - lenBefore), Math.min(rawHtml.length, idx + lenAfter));
    console.log('--- CLEAN TEXT ---');
    console.log(clean(slice));
    console.log('--- RAW HTML (first 800) ---');
    console.log(slice.substring(0, 800));
    idx += query.length;
    if (count >= 3) break;
  }
}

console.log('>>> DUMPING CIRCLE OF CARE:');
dumpAround('The CIRCLE of Care', 50, 4000);

console.log('>>> DUMPING STATS:');
dumpAround('Independent Hospitals', 300, 1500);

console.log('>>> DUMPING SPECIALTIES:');
dumpAround('Medical Specialities', 50, 3000);

console.log('>>> DUMPING LOCATIONS:');
dumpAround('Our Locations', 50, 4000);

console.log('>>> DUMPING INSURANCE:');
dumpAround('Insurance Tie', 50, 4000);
