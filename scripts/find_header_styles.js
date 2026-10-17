const fs = require('fs');
const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');

const regex = /\.elementor-element-2774ad2[^{]*\{[^}]*\}/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[0]);
}

const regex2 = /\.elementor-element-2e7172a[^{]*\{[^}]*\}/g;
while ((m = regex2.exec(html)) !== null) {
  console.log(m[0]);
}

// Search for any CSS containing background for 2774ad2
const styleTags = html.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
console.log('Total style tags:', styleTags.length);
styleTags.forEach(st => {
  if (st.includes('2774ad2') || st.includes('medizco_topbar') || st.includes('2e7172a')) {
    console.log('Found matching style tag snippet:');
    const lines = st.split('\n').filter(l => l.includes('2774ad2') || l.includes('medizco_topbar') || l.includes('2e7172a'));
    console.log(lines.join('\n'));
  }
});
