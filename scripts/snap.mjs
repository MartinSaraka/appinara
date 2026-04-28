import { writeFileSync } from 'node:fs'
import { spawn } from 'node:child_process'
import { setTimeout as wait } from 'node:timers/promises'

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const PORT = 9333
const SHOTS = 'C:/Users/Martin/AppData/Local/Temp/screenshots'

const targets = [
  { name: 'v2-home-hero',      url: 'http://localhost:3000/',         w: 1440, dark: false, viewport: 900 },
  { name: 'v2-home-hero-dark', url: 'http://localhost:3000/',         w: 1440, dark: true,  viewport: 900 },
  { name: 'v2-home-hero-mob',  url: 'http://localhost:3000/',         w: 390,  dark: false, viewport: 844 },
  { name: 'v2-home-full',      url: 'http://localhost:3000/',         w: 1440, dark: false },
  { name: 'v2-home-full-dark', url: 'http://localhost:3000/',         w: 1440, dark: true },
  { name: 'v2-omne',           url: 'http://localhost:3000/o-mne',    w: 1440, dark: false },
  { name: 'v2-riesenia',       url: 'http://localhost:3000/riesenia', w: 1440, dark: false },
  { name: 'v2-audit',          url: 'http://localhost:3000/ai-audit', w: 1440, dark: false }
]

const chrome = spawn(CHROME, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=' + (process.env.TEMP || '/tmp') + '/chrome-snap-' + Date.now(),
  'about:blank'
], { stdio: 'ignore', detached: false })

await wait(2000)

async function rpc(ws, method, params) {
  const id = Math.floor(Math.random() * 1e9)
  return new Promise((resolve, reject) => {
    const onMsg = (ev) => {
      const msg = JSON.parse(typeof ev.data === 'string' ? ev.data : new TextDecoder().decode(ev.data))
      if (msg.id === id) {
        ws.removeEventListener('message', onMsg)
        if (msg.error) reject(new Error(method + ': ' + JSON.stringify(msg.error)))
        else resolve(msg.result)
      }
    }
    ws.addEventListener('message', onMsg)
    ws.send(JSON.stringify({ id, method, params }))
  })
}

const json = await fetch(`http://localhost:${PORT}/json/version`).then(r => r.json())
const browserWs = new WebSocket(json.webSocketDebuggerUrl)
await new Promise(r => browserWs.addEventListener('open', r, { once: true }))

for (const t of targets) {
  // Create a fresh tab
  const tab = await fetch(`http://localhost:${PORT}/json/new`, { method: 'PUT' }).then(r => r.json())
  const ws = new WebSocket(tab.webSocketDebuggerUrl)
  await new Promise(r => ws.addEventListener('open', r, { once: true }))

  await rpc(ws, 'Page.enable', {})
  await rpc(ws, 'Emulation.setDeviceMetricsOverride', {
    width: t.w, height: t.viewport || 900, deviceScaleFactor: 1, mobile: t.w < 500
  })
  if (t.dark) {
    await rpc(ws, 'Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: 'dark' }] })
  }
  await rpc(ws, 'Page.navigate', { url: t.url })
  await wait(3500)
  // Re-apply (in case navigation reset some state)
  await rpc(ws, 'Emulation.setDeviceMetricsOverride', {
    width: t.w, height: t.viewport || 900, deviceScaleFactor: 1, mobile: t.w < 500
  })
  await wait(400)

  // Force motion-hidden elements to be visible (override the @vueuse/motion initial state)
  await rpc(ws, 'Runtime.evaluate', {
    expression: `(() => {
      const css = '*,*::before,*::after{transition:none!important;animation:none!important}[style*="opacity: 0"], [style*="opacity:0"]{opacity:1!important;transform:none!important}';
      const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
      // Also walk and clear inline opacity:0 / transform style left by motion
      document.querySelectorAll('*').forEach(el => {
        if (el.style && (el.style.opacity === '0' || /translate|scale/.test(el.style.transform))) {
          el.style.opacity = '1'; el.style.transform = 'none';
        }
      });
      // Trigger any IntersectionObservers by scrolling all the way and back
      window.scrollTo(0, document.body.scrollHeight);
    })()`,
    returnByValue: true
  })
  await wait(800)
  await rpc(ws, 'Runtime.evaluate', { expression: 'window.scrollTo(0,0)' })
  await wait(400)

  const layout = await rpc(ws, 'Page.getLayoutMetrics', {})
  const fullHeight = layout.contentSize.height
  const fullWidth = layout.contentSize.width
  const useFull = !t.viewport
  const height = useFull ? fullHeight : t.viewport
  const width = fullWidth
  const shot = await rpc(ws, 'Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true,
    clip: { x: 0, y: 0, width, height, scale: 1 }
  })
  writeFileSync(`${SHOTS}/${t.name}.png`, Buffer.from(shot.data, 'base64'))
  console.log(`${t.name}: ${width}x${height}`)
  ws.close()
  await fetch(`http://localhost:${PORT}/json/close/${tab.id}`)
}

browserWs.close()
chrome.kill()
console.log('done')
