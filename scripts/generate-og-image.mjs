/**
 * Generates public/og-image.png (1200×630) for Open Graph / LinkedIn previews.
 * Run: npm run generate-og
 */
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = join(__dirname, '..', 'public', 'og-image.png')

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4f46e5"/>
      <stop offset="45%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#be185d"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="630" fill="#0f172a" fill-opacity="0.15"/>
  <text x="72" y="220" font-family="system-ui,Segoe UI,Arial,sans-serif" font-size="72" font-weight="700" fill="#ffffff">Appinara</text>
  <text x="72" y="300" font-family="system-ui,Segoe UI,Arial,sans-serif" font-size="34" fill="#e2e8f0">AI integrácie · weby · automatizácie</text>
  <text x="72" y="380" font-family="system-ui,Segoe UI,Arial,sans-serif" font-size="26" fill="#cbd5e1">Riešenia pre slovenské firmy</text>
  <text x="72" y="520" font-family="system-ui,Segoe UI,Arial,sans-serif" font-size="24" fill="#94a3b8">appinara.sk</text>
</svg>`

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer()
writeFileSync(outPath, png)
console.log('Wrote', outPath)
