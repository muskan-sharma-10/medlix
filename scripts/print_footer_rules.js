const fs = require('fs');
const css = fs.readFileSync('scripts/footer_css_dump.css', 'utf8');

['1675e85', '16a2', 'b8f', '484a', '2097', '4a6d', '52f0', '7aee'].forEach(id => {
  console.log(`\n================== Rules for ${id} ==================`);
  const regex = new RegExp(`\\.elementor-element-${id}[^{]*\\{[^}]*\\}`, 'g');
  let match;
  while ((match = regex.exec(css)) !== null) {
    console.log(match[0]);
  }
});
