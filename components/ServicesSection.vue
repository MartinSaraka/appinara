<template>
  <section
    id="services"
    class="relative section-spacing bg-bone dark:bg-anthracite overflow-hidden"
    @mousemove="onMove"
    @mouseleave="hovered = -1"
  >
    <div class="container mx-auto px-6 relative max-w-6xl">

      <header class="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
        <p class="eyebrow mb-6">Služby</p>
        <h2
          v-motion-fade-visible
          class="font-display font-normal text-display-lg text-ink-900 dark:text-bone-100 text-balance"
          style="line-height: 1.02;"
        >
          Štyri oblasti, v ktorých
          <em class="italic font-normal">viem najviac</em>
          pomôcť.
        </h2>
        <p class="mt-7 text-lg text-ink-700 dark:text-bone-100/80 leading-relaxed text-pretty">
          Najradšej pracujem na projektoch, ktoré bežia po nasadení mesiace bez údržby.
        </p>
      </header>

      <ol class="services-list">
        <li
          v-for="(service, index) in services"
          :key="service.title"
          class="service-row group"
          :class="{ 'is-hovered': hovered === index }"
          @mouseenter="hovered = index"
          @focusin="hovered = index"
          @focusout="hovered = -1"
        >
          <a :href="service.href" class="service-link" :aria-label="`${service.title} — ${service.description}`">
            <span class="service-num font-mono">({{ String(index + 1).padStart(2, '0') }})</span>

            <span class="service-icon" aria-hidden="true">
              <img :src="service.icon" alt="" class="w-7 h-7 md:w-8 md:h-8" loading="lazy" />
            </span>

            <span class="service-title font-display">
              <span class="service-title-text">{{ service.title }}</span>
              <span class="service-title-arrow" aria-hidden="true">→</span>
            </span>

            <span class="service-desc">{{ service.description }}</span>

            <span class="service-tag font-mono" aria-hidden="true">{{ service.tag }}</span>
          </a>
        </li>
      </ol>
    </div>

    <!-- Cursor-following preview image (desktop only) -->
    <div
      class="service-preview"
      :class="hovered >= 0 ? 'is-visible' : ''"
      :style="{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)` }"
      aria-hidden="true"
    >
      <div class="service-preview-frame img-placeholder">
        <img
          v-if="hovered >= 0"
          :src="services[hovered]?.preview"
          alt=""
          class="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div class="service-preview-meta font-mono">
          <span>{{ hovered >= 0 ? services[hovered]?.tag : '' }}</span>
          <span>↗</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const services = [
  {
    title: 'AI a automatizácia',
    description:
      'Chatboty, follow-up a úlohy, ktoré by inak padali na ľudí alebo do schránky.',
    tag: 'AI · automation',
    icon: '/images/service-ai.svg',
    preview: '/images/work-01.svg',
    href: '#contact'
  },
  {
    title: 'Weby a aplikácie',
    description:
      'Rýchle weby a interné nástroje, ktoré zvládnu dopyty aj každodennú prevádzku.',
    tag: 'Web · app',
    icon: '/images/service-web.svg',
    preview: '/images/work-02.svg',
    href: '#contact'
  },
  {
    title: 'E‑commerce',
    description:
      'Predaj online s platbami a prevádzkovými procesmi pod kontrolou.',
    tag: 'Shop · pay',
    icon: '/images/service-shop.svg',
    preview: '/images/work-03.svg',
    href: '#contact'
  },
  {
    title: 'Firemné nástroje',
    description:
      'CRM, prehľady a dashboardy namiesto tabuliek roztrúsených po tíme.',
    tag: 'CRM · BI',
    icon: '/images/service-data.svg',
    preview: '/images/work-04.svg',
    href: '#contact'
  }
]

const hovered = ref(-1)
const cursor = ref({ x: 0, y: 0 })

function onMove(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  cursor.value = { x: e.clientX - rect.left, y: e.clientY - rect.top }
}
</script>

<style scoped>
.services-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(15, 15, 14, 0.10);
}
:global(.dark) .services-list { border-top-color: rgba(245, 242, 237, 0.10); }

.service-row {
  border-bottom: 1px solid rgba(15, 15, 14, 0.10);
  position: relative;
  isolation: isolate;
  overflow: hidden;
}
:global(.dark) .service-row { border-bottom-color: rgba(245, 242, 237, 0.10); }

.service-row::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: theme('colors.ink.900');
  transform: translateY(101%);
  transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 0;
}
:global(.dark) .service-row::before { background-color: theme('colors.bone.50'); }
.service-row.is-hovered::before { transform: translateY(0); }

.service-link {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 4rem 2.5rem 1fr 6rem;
  align-items: center;
  gap: 1rem 1.25rem;
  padding: 1.6rem 0;
  text-decoration: none;
  color: inherit;
  transition: color 320ms ease;
}
@media (min-width: 768px) {
  .service-link {
    grid-template-columns: 5rem 3rem 1fr minmax(18rem, 30rem) 8rem;
    gap: 1.25rem 2rem;
    padding: 2.4rem 0;
  }
}
.service-row.is-hovered .service-link { color: theme('colors.bone.50'); }
:global(.dark) .service-row.is-hovered .service-link { color: theme('colors.ink.900'); }

.service-num {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: theme('colors.ink.500');
  align-self: start;
  padding-top: 0.55rem;
  transition: color 320ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
}
:global(.dark) .service-num { color: theme('colors.ink.300'); }
.service-row.is-hovered .service-num { color: theme('colors.bone.50'); transform: translateX(0.35rem); }
:global(.dark) .service-row.is-hovered .service-num { color: theme('colors.ink.900'); }

.service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: start;
  padding-top: 0.4rem;
  transition: filter 320ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
}
:global(.dark) .service-icon img { filter: invert(0.92); transition: filter 320ms ease; }
.service-row.is-hovered .service-icon { transform: translateX(0.4rem); }
.service-row.is-hovered .service-icon img { filter: invert(1); }
:global(.dark) .service-row.is-hovered .service-icon img { filter: invert(0); }

.service-title {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 400;
  color: theme('colors.ink.900');
  font-size: clamp(1.9rem, 1.2rem + 2.3vw, 4rem);
  line-height: 1.02;
  letter-spacing: -0.012em;
  transition: color 320ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
}
:global(.dark) .service-title { color: theme('colors.bone.100'); }
.service-row.is-hovered .service-title { color: theme('colors.bone.50'); transform: translateX(0.5rem); }
:global(.dark) .service-row.is-hovered .service-title { color: theme('colors.ink.900'); }

.service-title-text {
  position: relative;
  display: inline-block;
}

.service-title-arrow {
  font-family: theme('fontFamily.sans')[0];
  font-size: 1.25rem;
  opacity: 0;
  transform: translateX(-0.5rem);
  transition: opacity 320ms ease, transform 480ms cubic-bezier(0.22, 1, 0.36, 1);
}
.service-row.is-hovered .service-title-arrow { opacity: 1; transform: translateX(0); }

.service-desc {
  display: none;
  font-size: 0.95rem;
  line-height: 1.55;
  color: theme('colors.ink.700');
  max-width: 32rem;
  transition: color 320ms ease;
}
:global(.dark) .service-desc { color: theme('colors.bone.100'); }
.service-row.is-hovered .service-desc { color: rgba(245, 242, 237, 0.78); }
:global(.dark) .service-row.is-hovered .service-desc { color: rgba(15, 15, 14, 0.78); }
@media (min-width: 768px) {
  .service-desc { display: block; }
}

.service-tag {
  display: none;
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: theme('colors.ink.500');
  text-align: right;
  padding-top: 0.45rem;
  align-self: start;
  transition: color 320ms ease;
}
:global(.dark) .service-tag { color: theme('colors.ink.300'); }
.service-row.is-hovered .service-tag { color: rgba(245, 242, 237, 0.7); }
:global(.dark) .service-row.is-hovered .service-tag { color: rgba(15, 15, 14, 0.7); }
@media (min-width: 768px) {
  .service-tag { display: block; }
}

/* Cursor-follow preview image */
.service-preview {
  position: absolute;
  top: 0; left: 0;
  pointer-events: none;
  width: 260px;
  height: 320px;
  z-index: 30;
  opacity: 0;
  transition: opacity 280ms ease;
  display: none;
}
@media (min-width: 1024px) and (hover: hover) {
  .service-preview { display: block; }
}
.service-preview.is-visible { opacity: 1; }

.service-preview-frame {
  position: relative;
  width: 100%; height: 100%;
  overflow: hidden;
  background-color: theme('colors.bone.200');
  box-shadow:
    0 1px 0 rgba(255,255,255,0.6) inset,
    0 40px 90px -32px rgba(15,15,14,0.32),
    0 12px 30px -12px rgba(15,15,14,0.20);
}
:global(.dark) .service-preview-frame { background-color: theme('colors.anthracite.elev'); }

.service-preview-meta {
  position: absolute;
  left: 0.85rem; right: 0.85rem; bottom: 0.85rem;
  color: theme('colors.ink.900');
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  mix-blend-mode: difference;
  color: #FFFFFF;
}

@media (prefers-reduced-motion: reduce) {
  .service-row::before,
  .service-num,
  .service-icon,
  .service-title,
  .service-title-arrow,
  .service-link,
  .service-preview { transition: none !important; }
}
</style>
