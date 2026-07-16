/** Generates the 1200×630 social preview for Appinara. */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = join(__dirname, '..', 'public', 'og-image.png')

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0H0V56" fill="none" stroke="#F2EDE4" stroke-opacity=".08"/>
    </pattern>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientTransform="translate(220 70) rotate(45) scale(560 420)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6366F1" stop-opacity=".38"/><stop offset="1" stop-color="#8B5CF6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0A0A0A"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="72" y="70" width="62" height="62" fill="#FAF6EC" stroke="#F2EDE4" stroke-width="2"/>
  <rect x="65" y="63" width="18" height="18" fill="#DB74D8"/>
  <rect x="123" y="121" width="18" height="18" fill="#818CF8"/>
  <text x="91" y="118" font-family="Arial,sans-serif" font-size="43" font-style="italic" font-weight="800" fill="#0A0A0A">A</text>
  <text x="154" y="118" font-family="Arial,sans-serif" font-size="42" font-style="italic" font-weight="700" fill="#F2EDE4">Appinara</text>
  <text x="72" y="280" font-family="Arial,sans-serif" font-size="72" font-weight="800" fill="#F2EDE4">Web, ktorý predáva.</text>
  <text x="72" y="366" font-family="Arial,sans-serif" font-size="72" font-weight="800" fill="#A5B4FC">AI, ktorá šetrí čas.</text>
  <text x="72" y="458" font-family="Arial,sans-serif" font-size="25" fill="#B5B2AB">Weby · e-shopy · AI automatizácie · business nástroje</text>
  <line x1="72" y1="515" x2="1128" y2="515" stroke="#F2EDE4" stroke-opacity=".25"/>
  <text x="72" y="565" font-family="Arial,sans-serif" font-size="21" font-weight="700" letter-spacing="2" fill="#F2EDE4">APPINARA.SK</text>
  <text x="1128" y="565" text-anchor="end" font-family="Arial,sans-serif" font-size="17" letter-spacing="2" fill="#6F6D67">BRATISLAVA / SLOVENSKO</text>
</svg>`

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer()
writeFileSync(outPath, png)
console.log('Wrote', outPath)

const publicDir = join(__dirname, '..', 'public')
const logo = readFileSync(join(publicDir, 'logo.svg'))
for (const [name, size] of [
  ['favicon-96x96.png', 96],
  ['apple-touch-icon.png', 180],
  ['web-app-manifest-192x192.png', 192],
  ['web-app-manifest-512x512.png', 512]
]) {
  await sharp(logo).resize(size, size).png({ compressionLevel: 9 }).toFile(join(publicDir, name))
  console.log('Wrote', join(publicDir, name))
}
