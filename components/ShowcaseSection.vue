<template>
  <!-- overflow-x-clip, NOT overflow-hidden — hidden would break position: sticky -->
  <section id="ukazky" class="relative py-20 md:py-32 bg-white dark:bg-slate-950 overflow-x-clip">
    <div class="container mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-10 lg:mb-0">
        <p v-motion-reveal class="eyebrow mb-4">02 · Ukážky riešení</p>
        <h2
          v-motion-reveal
          :delay="60"
          class="text-4xl md:text-6xl font-display font-bold mb-6 dark:text-white text-gray-900"
        >
          Čo pre vás vieme <span class="accent-text">postaviť</span>
        </h2>
        <p
          v-motion-reveal
          :delay="120"
          class="text-xl text-gray-700 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Posúvajte nižšie a pozrite si, ako naše riešenia vyzerajú v praxi
        </p>
      </div>

      <div class="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
        <!-- Sticky laptop — len desktop; na mobile má každý krok vlastný rám nižšie -->
        <div class="hidden lg:block lg:col-span-6 lg:sticky lg:top-24 self-start py-8 lg:py-24">
          <div class="relative">
            <div
              class="absolute -inset-10 rounded-[2rem] pointer-events-none transition-colors duration-700 showcase-glow"
              :class="frames[active].glow"
              aria-hidden="true"
            />
            <DeviceFrame device="laptop" container-class="relative">
              <div class="relative w-full h-full" aria-hidden="true">
                <Transition
                  v-for="(frame, i) in frames"
                  :key="i"
                  enter-active-class="transition duration-700"
                  enter-from-class="opacity-0 translate-y-3"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-500 absolute inset-0"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <div v-if="active === i" class="absolute inset-0">
                    <ShowcaseMock :mock="frame.mock" />
                  </div>
                </Transition>
              </div>
            </DeviceFrame>

            <!-- Progress dots -->
            <div class="hidden lg:flex absolute -bottom-5 left-1/2 -translate-x-1/2 gap-1.5">
              <span
                v-for="(_, i) in frames"
                :key="i"
                class="block h-1 rounded-full transition-all duration-300"
                :class="active === i ? 'w-8 bg-primary-600 dark:bg-primary-400' : 'w-3 bg-gray-300 dark:bg-slate-500'"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <!-- Scrolling steps -->
        <div class="lg:col-span-6 flex flex-col justify-center">
          <div
            v-for="(frame, i) in frames"
            :key="i"
            :ref="el => setStepRef(el, i)"
            class="lg:min-h-[75vh] flex flex-col justify-center py-10 lg:py-16"
          >
            <!-- Mobilný rám s mockupom — desktop má jeden sticky laptop vľavo -->
            <div class="lg:hidden mb-8">
              <DeviceFrame device="laptop" container-class="relative">
                <div class="relative w-full h-full" aria-hidden="true">
                  <ShowcaseMock :mock="frame.mock" />
                </div>
              </DeviceFrame>
            </div>
            <span class="eyebrow mb-4">{{ String(i + 1).padStart(2, '0') }} · {{ frame.tag }}</span>
            <h3 class="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-5">
              {{ frame.title }}
            </h3>
            <p class="text-lg md:text-xl text-gray-700 dark:text-slate-300 leading-relaxed max-w-md">
              {{ frame.body }}
            </p>
            <ul class="mt-6 space-y-2">
              <li
                v-for="point in frame.points"
                :key="point"
                class="flex items-start gap-2 text-gray-600 dark:text-slate-400"
              >
                <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Inline CTA — catches interest built up by the showcase -->
      <div v-motion-reveal class="mt-8 lg:mt-4 text-center">
        <!-- Šípka je vnorená za posledným slovom, aby pri zalomení textu neodletela k okraju -->
        <a
          href="#contact"
          class="group inline-block font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          aria-label="Prejsť na kontaktný formulár"
        >
          Niečo z tohto potrebujete?
          <span class="whitespace-nowrap">Konzultácia zdarma
            <svg class="inline-block w-5 h-5 align-[-0.25em] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const frames = [
  {
    mock: 'salon',
    tag: 'Weby pre služby',
    title: 'Web, cez ktorý sa zákazník objedná sám',
    body: 'Pre salóny, ambulancie či remeselníkov staviame stránky s online rezerváciou. Zákazník si vyberie termín aj o desiatej večer — bez telefonátu.',
    points: ['Online rezervácia termínov', 'Cenník a galéria prác', 'Google mapa a recenzie'],
    glow: 'bg-rose-500/15 dark:bg-rose-500/10'
  },
  {
    mock: 'eshop',
    tag: 'E-shopy',
    title: 'Obchod, ktorý predáva aj keď spíte',
    body: 'Prehľadné produkty, jednoduchý košík, platby aj doprava vyriešené. AI odporúčania pomôžu zákazníkovi nakúpiť viac.',
    points: ['Platobné brány a dopravcovia', 'AI odporúčania produktov', 'Správa skladu bez tabuliek'],
    glow: 'bg-primary-500/15 dark:bg-primary-500/10'
  },
  {
    mock: 'chat',
    tag: 'AI automatizácia',
    title: 'AI, ktorá odpovedá za vás — 24/7',
    body: 'Chatbot vyškolený na vašich službách odpovie na otázky, poradí s výberom a dohodne termín. Vy sa venujete práci, AI správam.',
    points: ['Odpovede z vašich podkladov', 'Odovzdanie na človeka, keď treba', 'Funguje na webe aj v Messengeri'],
    glow: 'bg-purple-500/15 dark:bg-purple-500/10'
  },
  {
    mock: 'dash',
    tag: 'Business nástroje',
    title: 'Čísla firmy na jednej obrazovke',
    body: 'Tržby, objednávky, náklady — v reálnom čase a zrozumiteľne. Rozhodujete sa podľa dát, nie podľa pocitu.',
    points: ['Prehľady v reálnom čase', 'Automatické reporty', 'Prepojenie s vašimi systémami'],
    glow: 'bg-pink-500/15 dark:bg-pink-500/10'
  }
]

const stepRefs = ref<HTMLElement[]>([])
const active = ref(0)
let observer: IntersectionObserver | null = null

function setStepRef(node: any, i: number) {
  if (node && node instanceof HTMLElement) {
    stepRefs.value[i] = node
  }
}

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') return
  observer = new IntersectionObserver(
    entries => {
      let bestIndex = active.value
      let bestRatio = 0
      for (const entry of entries) {
        if (entry.intersectionRatio > bestRatio) {
          bestRatio = entry.intersectionRatio
          const idx = stepRefs.value.indexOf(entry.target as HTMLElement)
          if (idx >= 0) bestIndex = idx
        }
      }
      if (bestRatio > 0) active.value = bestIndex
    },
    { threshold: [0.3, 0.5, 0.7] }
  )
  for (const node of stepRefs.value) {
    if (node) observer.observe(node)
  }
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.showcase-glow {
  /* pre-blurred glow — no filter */
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent 75%);
}

</style>
