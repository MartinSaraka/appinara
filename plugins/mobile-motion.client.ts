// Na mobile/tablete (< 1024px) nahrádzame @vueuse/motion reveal direktívy
// ľahkou CSS verziou (.m-reveal v main.css): menší posun, kratšie trvanie
// a delay zoseknutý na max 120 ms — obsah pod sebou naskakuje svižne,
// bez desktopového staggeru, ktorý na mobile pôsobí pomaly.
// Reduced-motion rieši reduced-motion.client.ts (beží po tomto plugine,
// takže jeho no-op direktívy majú prednosť).
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(min-width: 1024px)').matches) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('m-reveal-in')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 }
    )

    const lightReveal = {
      mounted(el: HTMLElement) {
        // SSR vypísal motion initial štýly (opacity: 0, transform) do HTML —
        // vyčistíme ich, o skrytie sa ďalej stará trieda .m-reveal
        el.style.removeProperty('opacity')
        el.style.removeProperty('transform')
        const delay = Math.min(Number(el.getAttribute('delay')) || 0, 240) / 2
        if (delay) el.style.transitionDelay = `${delay}ms`
        el.classList.add('m-reveal')
        io.observe(el)
      },
      unmounted(el: HTMLElement) {
        io.unobserve(el)
      }
    }
    for (const name of ['motion-reveal', 'motion-reveal-left', 'motion-reveal-right', 'motion-reveal-scale']) {
      nuxtApp.vueApp.directive(name, lightReveal)
    }
  })
})
