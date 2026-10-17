const fs = require('fs');

// Read the official 32x32 PNG from public/favicon-32x32.png
const pngBuffer = fs.readFileSync('public/favicon-32x32.png');

// Copy as src/app/icon.png which Next.js App Router natively supports
fs.writeFileSync('src/app/icon.png', pngBuffer);
fs.writeFileSync('public/icon.png', pngBuffer);

// Construct a valid standard ICO header wrapping the 32x32 PNG buffer
// ICONDIR (6 bytes):
// 2 bytes: reserved (0)
// 2 bytes: image type (1 for icon)
// 2 bytes: number of images (1)
// ICONDIRENTRY (16 bytes):
// 1 byte: width (32)
// 1 byte: height (32)
// 1 byte: color count (0)
// 1 byte: reserved (0)
// 2 bytes: color planes (1)
// 2 bytes: bits per pixel (32)
// 4 bytes: size of image data (pngBuffer.length)
// 4 bytes: offset of image data from beginning of file (6 + 16 = 22)

const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type 1 = ICO
header.writeUInt16LE(1, 4); // count 1

header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt8(0, 8);  // color count
header.writeUInt8(0, 9);  // reserved
header.writeUInt16LE(1, 10); // color planes
header.writeUInt16LE(32, 12); // bpp
header.writeUInt32LE(pngBuffer.length, 14); // image size
header.writeUInt32LE(22, 18); // offset

const icoBuffer = Buffer.concat([header, pngBuffer]);

// Remove the raw PNG from src/app/favicon.ico so Next.js doesn't conflict,
// or write the valid ICO buffer:
fs.writeFileSync('src/app/favicon.ico', icoBuffer);
fs.writeFileSync('public/favicon.ico', icoBuffer);

console.log('Successfully generated valid ICO file and icon.png! Length:', icoBuffer.length);
