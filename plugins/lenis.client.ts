import Lenis from 'lenis'

// Smooth inertia scrolling — desktop only, disabled for reduced motion.
// Lenis drives native window scroll, so IntersectionObservers and
// CSS scroll-driven animations keep working untouched.
export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!window.matchMedia('(pointer: fine)').matches) return
  // debug/test escape hatch
  if (new URLSearchParams(window.location.search).has('no-lenis')) return

  const lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true
  })

  let rafId = 0
  const raf = (time: number) => {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)

  // Same-page anchor links go through Lenis for a consistent glide
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const anchor = target.closest('a[href*="#"]') as HTMLAnchorElement | null
    if (!anchor) return
    const url = new URL(anchor.href, location.href)
    if (url.pathname !== location.pathname || !url.hash) return
    const el = document.querySelector(url.hash)
    if (!el) return
    e.preventDefault()
    lenis.scrollTo(el as HTMLElement, { offset: -72 })
  })

  return {
    provide: { lenis }
  }
})
