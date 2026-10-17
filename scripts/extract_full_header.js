const fs = require('fs');
const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');

// Find the header section container
const topIdx = html.indexOf('9220143473');
const startIdx = html.lastIndexOf('<section', topIdx - 100);
const endIdx = html.indexOf('</header>', topIdx);
console.log('startIdx:', startIdx, 'endIdx:', endIdx);

// If no </header>, look for the section closing after navigation menu
const navIdx = html.indexOf('Doctors / Medical Specialists', topIdx);
console.log('navIdx:', navIdx);
const navSectionEnd = html.indexOf('</section>', navIdx + 500);

const fullHeader = html.substring(startIdx, navSectionEnd + 10);
fs.writeFileSync('scripts/live_full_header.html', fullHeader);
console.log('Saved live_full_header.html, size:', fullHeader.length);
