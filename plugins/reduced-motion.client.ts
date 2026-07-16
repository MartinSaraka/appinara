// Používatelia s prefers-reduced-motion nemajú dostávať JS scroll animácie.
// @vueuse/motion animuje inline štýlmi, takže CSS kill-switch v main.css naň nestačí —
// tu prepíšeme custom v-motion-* direktívy na no-op (obsah ostane staticky viditeľný).
// app:created beží po všetkých pluginoch (vrátane motion modulu), ale pred renderom.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // SSR vypíše initial štýly (opacity: 0, transform) do HTML cez getSSRProps —
    // preto ich pri mounte explicitne vyčistíme, inak by obsah ostal skrytý.
    const staticReveal = {
      mounted(el: HTMLElement) {
        el.style.removeProperty('opacity')
        el.style.removeProperty('transform')
      }
    }
    for (const name of ['motion-reveal', 'motion-reveal-left', 'motion-reveal-right', 'motion-reveal-scale', 'motion']) {
      nuxtApp.vueApp.directive(name, staticReveal)
    }
  })
})
