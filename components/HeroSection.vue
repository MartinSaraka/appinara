<template>
  <section
    ref="heroRef"
    class="hero relative min-h-[92svh] lg:min-h-[94svh] flex items-center overflow-hidden bg-white dark:bg-slate-950"
  >
    <!-- ── Background layers ─────────────────────────────────────────── -->
    <div class="absolute inset-0 hero-bg" aria-hidden="true"></div>
    <div class="absolute inset-0 grid-pattern hero-grid" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-1" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-2" aria-hidden="true"></div>

    <div class="container mx-auto px-6 relative z-10 pt-28 pb-14 lg:pt-32 lg:pb-24">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <!-- ── Copy ──────────────────────────────────────────────────── -->
        <div class="hero-copy lg:col-span-6 text-center lg:text-left">
          <!-- Availability badge -->
          <div class="hero-in" style="--d: 0s">
            <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium surface text-gray-700 dark:text-slate-300">
              <span class="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Voľné termíny na nové projekty
            </span>
          </div>

          <!-- Headline -->
          <h1 class="mt-6 font-display font-extrabold text-gray-900 dark:text-white text-[2.4rem] sm:text-5xl md:text-6xl xl:text-[4.5rem] leading-[1.08] tracking-tight">
            <span class="reveal-line"><span style="--d: 0.08s">Web, ktorý</span></span>
            <span class="reveal-line"><span style="--d: 0.18s">predáva.</span></span>
            <span class="reveal-line"><span style="--d: 0.28s" class="gradient-text animate-gradient">AI, ktorá šetrí čas.</span></span>
          </h1>

          <!-- Subheadline -->
          <p class="hero-in mt-7 text-lg md:text-xl text-gray-700 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed" style="--d: 0.45s">
            Staviame moderné weby, e-shopy a AI automatizácie pre malé a stredné
            firmy na Slovensku. Priama komunikácia, bez agentúrnej marže —
            riešenia, ktoré vidíte v tržbách.
          </p>

          <!-- CTAs -->
          <div class="hero-in mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center" style="--d: 0.6s">
            <a
              ref="ctaPrimary"
              href="#contact"
              class="btn-primary magnetic group whitespace-nowrap"
              aria-label="Získať nezáväznú konzultáciu zdarma"
            >
              Konzultácia zdarma
              <svg class="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              ref="ctaSecondary"
              href="#services"
              class="btn-secondary magnetic group whitespace-nowrap"
              aria-label="Prejsť na sekciu služby"
            >
              Pozrieť riešenia
              <svg class="inline-block w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

        </div>

        <!-- ── 3D device composition (decorative) ────────────────────── -->
        <div class="lg:col-span-6 hero-in-stage" aria-hidden="true">
          <div class="hero-stage mx-auto max-w-[560px] lg:max-w-none">
            <div ref="tiltRef" class="tilt-group">
              <!-- Glow behind devices -->
              <div class="stage-glow"></div>

              <!-- Generated brand artwork: workflow complexity becoming one clear system -->
              <figure class="generated-art" aria-hidden="true">
                <img
                  src="/images/brand/appinara-ai-workflow-hero-v1.webp"
                  alt=""
                  width="1586"
                  height="992"
                  fetchpriority="high"
                  decoding="async"
                />
                <span class="generated-art-label">System / 01</span>
              </figure>

              <!-- Laptop -->
              <div class="laptop">
                <div class="laptop-screen">
                  <!-- Browser chrome -->
                  <div class="mini-chrome">
                    <span class="mini-dot bg-red-400/80"></span>
                    <span class="mini-dot bg-amber-400/80"></span>
                    <span class="mini-dot bg-emerald-400/80"></span>
                    <span class="mini-url">appinara.sk</span>
                  </div>
                  <!-- Mini website -->
                  <div class="mini-site">
                    <div class="mini-nav">
                      <span class="mini-logo"></span>
                      <span class="mini-nav-links">
                        <i></i><i></i><i></i>
                      </span>
                      <span class="mini-nav-cta"></span>
                    </div>
                    <div class="mini-hero">
                      <span class="mini-title w-3/4"></span>
                      <span class="mini-title w-1/2"></span>
                      <span class="mini-sub w-2/3"></span>
                      <span class="mini-btn"></span>
                    </div>
                    <div class="mini-chart">
                      <i v-for="(h, i) in chartBars" :key="i" :style="`--h:${h}%; --bd:${i * 0.18}s`"></i>
                    </div>
                  </div>
                </div>
                <div class="laptop-base"></div>
                <div class="laptop-shadow"></div>
              </div>

              <!-- Floating phone: AI chat -->
              <div class="phone">
                <div class="phone-screen">
                  <div class="chat-header">
                    <span class="chat-avatar">AI</span>
                    <span class="chat-name">
                      <i class="w-16"></i>
                      <i class="w-10 opacity-60"></i>
                    </span>
                    <span class="chat-status"></span>
                  </div>
                  <div class="chat-body">
                    <div class="bubble bubble-in">Dobrý deň, kedy máte otvorené?</div>
                    <div class="bubble bubble-out">Dnes do 18:00. Chcete si rovno rezervovať termín?</div>
                    <div class="bubble bubble-in typing">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating chips -->
              <div class="chip chip-1">
                <span class="chip-icon bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                </span>
                Nová objednávka
              </div>
              <div class="chip chip-2">
                <span class="chip-icon bg-primary-500/15 text-primary-600 dark:text-primary-400">
                  <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h8m-8 4h4m-6 6l-2 2V6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H8z"/></svg>
                </span>
                AI odpovedá 24/7
              </div>
              <div class="chip chip-3">
                <span class="chip-icon bg-amber-500/15 text-amber-600 dark:text-amber-400">
                  <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                </span>
                Rezervácia potvrdená
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const chartBars = [45, 62, 38, 74, 58, 88, 70]

const heroRef = ref<HTMLElement | null>(null)
const tiltRef = ref<HTMLElement | null>(null)
const ctaPrimary = ref<HTMLElement | null>(null)
const ctaSecondary = ref<HTMLElement | null>(null)

let rafId = 0
let cleanups: Array<() => void> = []

onMounted(() => {
  const finePointer = window.matchMedia('(pointer: fine)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!finePointer || reducedMotion) return

  // ── 3D tilt following the cursor (lerp-smoothed) ──────────────────
  // The rAF loop runs only while the cursor is over the hero (and briefly
  // after leaving, until the tilt settles back) to keep the page cheap.
  const hero = heroRef.value
  const tilt = tiltRef.value
  if (hero && tilt) {
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    let hovering = false
    let running = false

    const tick = () => {
      current.x += (target.x - current.x) * 0.06
      current.y += (target.y - current.y) * 0.06
      tilt.style.transform =
        `rotateX(${(6 - current.y * 9).toFixed(2)}deg) rotateY(${(-10 + current.x * 12).toFixed(2)}deg)`
      const settled =
        Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001
      if (!hovering && settled) {
        running = false
        return
      }
      rafId = requestAnimationFrame(tick)
    }
    const start = () => {
      if (!running) {
        running = true
        rafId = requestAnimationFrame(tick)
      }
    }
    const onEnter = () => {
      hovering = true
      start()
    }
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect()
      target.x = (e.clientX - r.left) / r.width - 0.5
      target.y = (e.clientY - r.top) / r.height - 0.5
      if (!hovering) onEnter()
    }
    const onLeave = () => {
      hovering = false
      target.x = 0
      target.y = 0
    }

    hero.addEventListener('mouseenter', onEnter, { passive: true })
    hero.addEventListener('mousemove', onMove, { passive: true })
    hero.addEventListener('mouseleave', onLeave, { passive: true })
    cleanups.push(() => {
      hero.removeEventListener('mouseenter', onEnter)
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId)
    })
  }

  // ── Magnetic CTAs ──────────────────────────────────────────────────
  for (const el of [ctaPrimary.value, ctaSecondary.value]) {
    if (!el) continue
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width / 2) * 0.22
      const y = (e.clientY - r.top - r.height / 2) * 0.3
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`
    }
    const onLeave = () => {
      el.style.transform = ''
    }
    el.addEventListener('mousemove', onMove, { passive: true })
    el.addEventListener('mouseleave', onLeave, { passive: true })
    cleanups.push(() => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    })
  }
})

onUnmounted(() => {
  cleanups.forEach((fn) => fn())
  cleanups = []
})
</script>

<style scoped>
/* ── Background ──────────────────────────────────────────────────── */
.hero-bg {
  background:
    radial-gradient(ellipse 80% 55% at 70% 20%, rgba(99, 102, 241, 0.08), transparent 60%),
    radial-gradient(ellipse 60% 45% at 15% 80%, rgba(139, 92, 246, 0.06), transparent 60%);
}
.dark .hero-bg {
  background:
    radial-gradient(ellipse 80% 55% at 70% 20%, rgba(99, 102, 241, 0.16), transparent 60%),
    radial-gradient(ellipse 60% 45% at 15% 80%, rgba(139, 92, 246, 0.12), transparent 60%);
}
.hero-grid {
  opacity: 0.25;
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%);
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%);
}
/* Orbs are pre-blurred radial gradients — a real filter: blur() on layers
   this big re-composites every frame and can freeze weaker GPUs. */
.hero-orb {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
  will-change: transform;
}
.hero-orb-1 {
  width: 640px;
  height: 640px;
  top: -200px;
  right: -160px;
  background: radial-gradient(circle closest-side, rgba(99, 102, 241, 0.16), rgba(139, 92, 246, 0.07) 55%, transparent 72%);
  animation: orb-drift 14s ease-in-out infinite alternate;
}
.hero-orb-2 {
  width: 520px;
  height: 520px;
  bottom: -220px;
  left: -180px;
  background: radial-gradient(circle closest-side, rgba(139, 92, 246, 0.10), rgba(99, 102, 241, 0.08) 55%, transparent 72%);
  animation: orb-drift 18s ease-in-out infinite alternate-reverse;
}
@keyframes orb-drift {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(40px, 30px) scale(1.12); }
}

/* ── Entrance animations ─────────────────────────────────────────── */
.hero-in {
  opacity: 0;
  animation: hero-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--d, 0s);
}
.reveal-line {
  display: block;
  overflow: hidden;
  /* Bricolage Grotesque has deep comma descenders — keep room for them */
  padding-bottom: 0.18em;
  margin-bottom: -0.18em;
}
.reveal-line > span {
  display: block;
  transform: translateY(115%);
  animation: line-rise 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--d, 0s);
}
.hero-in-stage {
  opacity: 0;
  animation: stage-rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards;
}
@keyframes hero-rise {
  from { opacity: 0; transform: translateY(22px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes line-rise {
  to { transform: translateY(0); }
}
@keyframes stage-rise {
  from { opacity: 0; transform: translateY(36px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

/* ── Scroll-scrubbed hero exit ───────────────────────────────────────
   As the page scrolls away, copy fades out faster while the device
   stage lags behind and shrinks — depth tied directly to scroll. */
@supports (animation-timeline: scroll()) {
  /* len desktop — na mobile je hero vysoké a rozplývajúci sa text pôsobí rušivo */
  @media (prefers-reduced-motion: no-preference) and (min-width: 1024px) {
    .hero-copy {
      animation: hero-copy-exit linear both;
      animation-timeline: scroll(root);
      animation-range: 0vh 75vh;
      will-change: transform, opacity;
    }
    .hero-stage {
      animation: hero-stage-exit linear both;
      animation-timeline: scroll(root);
      animation-range: 0vh 95vh;
      will-change: transform, opacity;
    }
  }
}
@keyframes hero-copy-exit {
  to {
    transform: translateY(70px);
    opacity: 0;
  }
}
@keyframes hero-stage-exit {
  to {
    transform: translateY(130px) scale(0.93);
    opacity: 0.25;
  }
}

/* ── 3D stage ────────────────────────────────────────────────────── */
.hero-stage {
  perspective: 1400px;
}
.tilt-group {
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(6deg) rotateY(-10deg);
  will-change: transform;
}
.stage-glow {
  position: absolute;
  inset: -8%;
  background: radial-gradient(ellipse 60% 55% at 55% 45%, rgba(99, 102, 241, 0.25), rgba(99, 102, 241, 0.08) 55%, transparent 75%);
  transform: translateZ(-60px);
}
.generated-art {
  position: absolute;
  z-index: -1;
  inset: -17% -18% -12% 5%;
  overflow: hidden;
  border-radius: 34px;
  opacity: 0.5;
  transform: translateZ(-70px) rotate(1.5deg);
  box-shadow: 0 34px 80px -35px rgba(49, 46, 129, 0.68);
  -webkit-mask-image: radial-gradient(ellipse 82% 78% at 57% 52%, #000 52%, transparent 93%);
  mask-image: radial-gradient(ellipse 82% 78% at 57% 52%, #000 52%, transparent 93%);
}
.generated-art::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, rgba(255,255,255,.78), transparent 38% 78%, rgba(255,255,255,.18));
}
.generated-art img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 54% center;
  filter: saturate(.88) contrast(1.03);
}
.generated-art-label {
  position: absolute;
  z-index: 2;
  right: 12%;
  top: 11%;
  padding: 5px 8px;
  color: rgba(255,255,255,.82);
  background: rgba(15,23,42,.46);
  border: 1px solid rgba(255,255,255,.18);
  font: 700 9px/1 ui-monospace, monospace;
  letter-spacing: .15em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
}
.dark .generated-art {
  opacity: .64;
  box-shadow: 0 34px 90px -34px rgba(99, 102, 241, .52);
}
.dark .generated-art::after {
  background: linear-gradient(110deg, rgba(2,6,23,.52), transparent 42% 78%, rgba(2,6,23,.25));
}

/* Laptop */
.laptop {
  position: relative;
  transform: translateZ(0);
}
.laptop-screen {
  border-radius: 14px;
  padding: 8px 8px 10px;
  background: linear-gradient(180deg, #334155, #0f172a);
  box-shadow:
    0 30px 60px -18px rgba(15, 23, 42, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.06) inset;
  overflow: hidden;
}
.dark .laptop-screen {
  background: linear-gradient(180deg, #1e293b, #020617);
  box-shadow:
    0 30px 60px -18px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(255, 255, 255, 0.08) inset;
}
.laptop-base {
  height: 12px;
  margin: 0 -6%;
  border-radius: 0 0 16px 16px;
  background: linear-gradient(180deg, #475569, #1e293b);
}
.dark .laptop-base {
  background: linear-gradient(180deg, #334155, #0f172a);
}
.laptop-shadow {
  position: absolute;
  left: -4%;
  right: -4%;
  bottom: -26px;
  height: 30px;
  border-radius: 9999px;
  background: rgba(15, 23, 42, 0.3);
  filter: blur(18px);
  transform: translateZ(-40px);
}
.dark .laptop-shadow {
  background: rgba(0, 0, 0, 0.6);
}

/* Mini browser inside laptop */
.mini-chrome {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px 8px 0 0;
}
.mini-dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
}
.mini-url {
  margin-left: 10px;
  flex: 1;
  max-width: 46%;
  font-size: 9px;
  line-height: 1;
  padding: 4px 10px;
  border-radius: 9999px;
  color: rgba(226, 232, 240, 0.75);
  background: rgba(255, 255, 255, 0.08);
  font-family: ui-monospace, monospace;
}
.mini-site {
  background: #ffffff;
  border-radius: 0 0 8px 8px;
  padding: 12px 14px 14px;
  aspect-ratio: 16 / 9.6;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
}
.dark .mini-site {
  background: #0b1120;
}
.mini-nav {
  display: flex;
  align-items: center;
  gap: 10px;
}
.mini-logo {
  width: 22px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
}
.mini-nav-links {
  display: flex;
  gap: 6px;
  margin-left: auto;
}
.mini-nav-links i {
  width: 18px;
  height: 5px;
  border-radius: 3px;
  background: rgba(100, 116, 139, 0.35);
}
.mini-nav-cta {
  width: 30px;
  height: 10px;
  border-radius: 9999px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
}
.mini-hero {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.mini-title {
  height: 11px;
  border-radius: 5px;
  background: linear-gradient(90deg, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.65));
}
.dark .mini-title {
  background: linear-gradient(90deg, rgba(241, 245, 249, 0.9), rgba(241, 245, 249, 0.65));
}
.mini-sub {
  height: 6px;
  border-radius: 3px;
  background: rgba(100, 116, 139, 0.35);
}
.mini-btn {
  margin-top: 4px;
  width: 64px;
  height: 14px;
  border-radius: 9999px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}
.mini-chart {
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  gap: 7px;
  height: 42%;
  padding: 8px 6px 0;
  border-top: 1px solid rgba(100, 116, 139, 0.18);
}
.mini-chart i {
  flex: 1;
  height: var(--h);
  border-radius: 4px 4px 0 0;
  background: linear-gradient(180deg, #818cf8, #6366f1);
  transform-origin: bottom;
  animation: bar-grow 2.6s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
  animation-delay: var(--bd, 0s);
}
@keyframes bar-grow {
  from { transform: scaleY(0.45); opacity: 0.65; }
  to { transform: scaleY(1); opacity: 1; }
}

/* Floating phone */
.phone {
  --float-z: 70px;
  position: absolute;
  right: -4%;
  bottom: -10%;
  width: 33%;
  max-width: 190px;
  border-radius: 22px;
  padding: 6px;
  background: linear-gradient(180deg, #334155, #020617);
  box-shadow: 0 24px 48px -12px rgba(15, 23, 42, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.08) inset;
  transform: translateZ(var(--float-z));
  animation: float-z 7s ease-in-out infinite alternate;
}
.phone-screen {
  border-radius: 17px;
  background: #f8fafc;
  overflow: hidden;
  aspect-ratio: 9 / 16.5;
  display: flex;
  flex-direction: column;
}
.dark .phone-screen {
  background: #0b1120;
}
.chat-header {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 10px;
  background: linear-gradient(90deg, #6366f1, #7c3aed);
}
.chat-avatar {
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.22);
  color: #fff;
  font-size: 8px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chat-name {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.chat-name i {
  display: block;
  height: 5px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.65);
}
.chat-status {
  margin-left: auto;
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background: #34d399;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.9);
}
.chat-body {
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.bubble {
  max-width: 88%;
  padding: 6px 9px;
  border-radius: 11px;
  font-size: 8.5px;
  line-height: 1.45;
}
.bubble-in {
  align-self: flex-start;
  background: rgba(100, 116, 139, 0.14);
  color: #334155;
  border-bottom-left-radius: 4px;
}
.dark .bubble-in {
  background: rgba(148, 163, 184, 0.16);
  color: #cbd5e1;
}
.bubble-out {
  align-self: flex-end;
  background: linear-gradient(135deg, #6366f1, #7c3aed);
  color: #eef2ff;
  border-bottom-right-radius: 4px;
}
.typing {
  display: flex;
  gap: 3px;
  align-items: center;
  padding: 8px 10px;
}
.typing span {
  width: 4px;
  height: 4px;
  border-radius: 9999px;
  background: #64748b;
  animation: typing-blink 1.2s ease-in-out infinite;
}
.typing span:nth-child(2) { animation-delay: 0.18s; }
.typing span:nth-child(3) { animation-delay: 0.36s; }
@keyframes typing-blink {
  0%, 60%, 100% { opacity: 0.35; transform: translateY(0); }
  30% { opacity: 1; transform: translateY(-2px); }
}

/* Floating chips */
.chip {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 13px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0 12px 32px -8px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.05);
  white-space: nowrap;
}
.dark .chip {
  color: #e2e8f0;
  background: rgba(15, 23, 42, 0.8);
  box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.09);
}
.chip-icon {
  width: 22px;
  height: 22px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.chip-icon svg {
  width: 13px;
  height: 13px;
}
.chip-1 {
  --float-z: 90px;
  top: -7%;
  right: 6%;
  transform: translateZ(var(--float-z));
  animation: float-z 6s ease-in-out infinite alternate;
}
.chip-2 {
  --float-z: 110px;
  left: -7%;
  top: 34%;
  transform: translateZ(var(--float-z));
  animation: float-z 7.5s ease-in-out 0.8s infinite alternate-reverse;
}
.chip-3 {
  --float-z: 80px;
  left: 4%;
  bottom: -9%;
  transform: translateZ(var(--float-z));
  animation: float-z 6.8s ease-in-out 0.4s infinite alternate;
}
/* Float via transform only — animating margins would force layout every frame */
@keyframes float-z {
  from { transform: translateZ(var(--float-z)) translateY(0); }
  to { transform: translateZ(var(--float-z)) translateY(-12px); }
}

/* Magnetic buttons — smooth return */
.magnetic {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

/* ── Small screens: simplified, quiet composition ─────────────────
   Pod lg ostáva len laptop s mini-webom — telefón, chipy a artwork
   by na mobile len naťahovali stránku a žrali batériu. */
@media (max-width: 1023px) {
  .phone,
  .chip,
  .generated-art {
    display: none;
  }
  .tilt-group {
    transform: rotateX(3deg) rotateY(-5deg);
  }
  .hero-stage {
    max-width: 480px;
  }
  /* Nekonečné animácie sú na mobile vypnuté — kompozícia je statická */
  .hero-orb,
  .mini-chart i {
    animation: none;
  }
  .mini-chart i {
    transform: scaleY(1);
    opacity: 1;
  }
}

/* Reduced motion: static but complete composition */
@media (prefers-reduced-motion: reduce) {
  .hero-in,
  .hero-in-stage,
  .reveal-line > span {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>
