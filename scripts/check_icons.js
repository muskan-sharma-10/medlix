const https = require('https');
const fs = require('fs');

const urls = [
  'https://medlix.in/wp-content/uploads/2024/11/cropped-medlix-ananta-hospital-32x32.png',
  'https://medlix.in/wp-content/uploads/2024/11/cropped-medlix-ananta-hospital-192x192.png',
  'https://medlix.in/wp-content/uploads/2024/11/logo.png'
];

urls.forEach((u, i) => {
  https.get(u, res => {
    console.log(u, 'status:', res.statusCode, 'content-type:', res.headers['content-type'], 'size:', res.headers['content-length']);
  });
});
