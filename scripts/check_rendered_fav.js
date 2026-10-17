const http = require('http');

http.get('http://localhost:3001/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/<link[^>]*>/gi) || [];
    const iconLinks = matches.filter(l => l.includes('icon'));
    console.log('Icon links in HTML:', iconLinks);
  });
});
