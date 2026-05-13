/**
 * Subpath pre Node.js import `#internal/nuxt/paths` (Nuxt SSR bundle).
 * Musí byť mimo `.nuxt/` — `nuxt prepare` priečinok `.nuxt` maže.
 * @see https://github.com/nuxt/nuxt/issues/26731
 */
export function baseURL() {
  const raw = process.env.NUXT_APP_BASE_URL ?? ''
  if (!raw || raw === '/') {
    return ''
  }
  return raw.replace(/\/$/, '')
}
