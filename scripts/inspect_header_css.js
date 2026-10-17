const fs = require('fs');
const header = fs.readFileSync('scripts/live_full_header.html', 'utf8');

// Look for inline styles or classes in the header section
const sections = header.match(/<section[^>]*>[\s\S]*?<\/section>/gi);
console.log('Sections count in header:', sections ? sections.length : 0);
if (sections) {
  sections.forEach((sec, i) => {
    const classMatch = sec.match(/class="([^"]*)"/);
    const styleMatch = sec.match(/style="([^"]*)"/);
    console.log(`Section ${i}: class="${classMatch ? classMatch[1] : ''}" style="${styleMatch ? styleMatch[1] : ''}"`);
  });
}
