const fs = require('fs');
const https = require('https');
const path = require('path');

const icons = [
  {
    url: 'https://medlix.in/wp-content/uploads/2024/11/cropped-medlix-ananta-hospital-32x32.png',
    dest: ['public/favicon-32x32.png', 'public/favicon.png', 'src/app/favicon.ico', 'public/favicon.ico']
  },
  {
    url: 'https://medlix.in/wp-content/uploads/2024/11/cropped-medlix-ananta-hospital-192x192.png',
    dest: ['public/favicon-192x192.png', 'public/android-chrome-192x192.png']
  },
  {
    url: 'https://medlix.in/wp-content/uploads/2024/11/cropped-medlix-ananta-hospital-180x180.png',
    dest: ['public/apple-touch-icon.png']
  },
  {
    url: 'https://medlix.in/wp-content/uploads/2024/11/cropped-medlix-ananta-hospital-270x270.png',
    dest: ['public/mstile-270x270.png']
  }
];

function download(url, dests) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${url}: status ${res.statusCode}`);
        return resolve();
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        dests.forEach(dest => {
          const fullPath = path.resolve(dest);
          fs.mkdirSync(path.dirname(fullPath), { recursive: true });
          fs.writeFileSync(fullPath, buffer);
          console.log(`Saved: ${dest} (${buffer.length} bytes)`);
        });
        resolve();
      });
    }).on('error', err => {
      console.error(`Error downloading ${url}:`, err);
      resolve();
    });
  });
}

async function run() {
  for (const item of icons) {
    await download(item.url, item.dest);
  }
  console.log('All favicons downloaded successfully!');
}

run();
