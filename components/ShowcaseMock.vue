<template>
  <!-- ── Mockup: salon booking web ── -->
  <div v-if="mock === 'salon'" class="mock mock-salon">
    <div class="m-nav">
      <span class="m-dot bg-rose-400"></span>
      <i></i><i></i><i></i>
      <span class="m-pill bg-rose-500"></span>
    </div>
    <div class="m-salon-grid">
      <div class="m-salon-copy">
        <span class="m-bar w-4/5 h-2.5 bg-stone-800/85"></span>
        <span class="m-bar w-3/5 h-2.5 bg-stone-800/70"></span>
        <span class="m-bar w-2/3 h-1.5 bg-stone-400/60 mt-1"></span>
        <span class="m-pill bg-rose-500 mt-2 w-16 h-4"></span>
      </div>
      <div class="m-book-card">
        <span class="m-bar w-1/2 h-1.5 bg-stone-400/70"></span>
        <div v-for="s in 3" :key="s" class="m-slot">
          <span class="m-bar w-8 h-1.5 bg-stone-500/60"></span>
          <span class="m-slot-state" :class="s === 2 ? 'bg-rose-500' : 'bg-emerald-400/70'"></span>
        </div>
        <span class="m-confirm">Rezervovať</span>
      </div>
    </div>
  </div>

  <!-- ── Mockup: e-shop ── -->
  <div v-else-if="mock === 'eshop'" class="mock mock-eshop">
    <div class="m-nav">
      <span class="m-dot bg-indigo-500"></span>
      <i></i><i></i>
      <span class="m-cart">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 4.6a1 1 0 00.9 1.4h12"/></svg>
        <span class="m-cart-badge">2</span>
      </span>
    </div>
    <div class="m-products">
      <div v-for="p in 4" :key="p" class="m-product" :class="{ 'm-product-hot': p === 2 }">
        <div class="m-product-img" :class="`m-img-${p}`"></div>
        <span class="m-bar w-3/4 h-1.5 bg-slate-500/50"></span>
        <span class="m-price">{{ ['24', '39', '18', '52'][p - 1] }} €</span>
        <span v-if="p === 2" class="m-added">V košíku ✓</span>
      </div>
    </div>
  </div>

  <!-- ── Mockup: AI chat ── -->
  <div v-else-if="mock === 'chat'" class="mock mock-chat">
    <div class="m-chat-header">
      <span class="m-avatar">AI</span>
      <div class="flex flex-col gap-1">
        <span class="m-bar w-20 h-1.5 bg-white/80"></span>
        <span class="m-bar w-12 h-1 bg-white/40"></span>
      </div>
      <span class="m-online"></span>
    </div>
    <div class="m-chat-body">
      <div class="m-bubble m-in">Koľko stojí nový web?</div>
      <div class="m-bubble m-out">Závisí od rozsahu. Mám vám pripraviť nezáväznú ponuku do 2–3 dní?</div>
      <div class="m-bubble m-in">Áno, prosím!</div>
      <div class="m-bubble m-out m-typing"><span></span><span></span><span></span></div>
    </div>
  </div>

  <!-- ── Mockup: dashboard ── -->
  <div v-else class="mock mock-dash">
    <div class="m-kpis">
      <div v-for="(kpi, k) in dashKpis" :key="k" class="m-kpi">
        <span class="m-bar w-10 h-1 bg-slate-400/50"></span>
        <span class="m-kpi-value">{{ kpi }}</span>
      </div>
    </div>
    <div class="m-chart">
      <svg viewBox="0 0 200 60" preserveAspectRatio="none">
        <polyline
          class="m-line"
          points="0,52 25,44 50,47 75,34 100,38 125,24 150,28 175,14 200,10"
          fill="none"
          :stroke="`url(#${gradId})`"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient :id="gradId" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#818cf8" />
            <stop offset="1" stop-color="#e879f9" />
          </linearGradient>
        </defs>
      </svg>
      <div class="m-mini-bars">
        <i v-for="(h, b) in [40, 65, 50, 80, 60, 90]" :key="b" :style="`--h:${h}%`"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Ilustračné CSS mockupy pre showcase — zdieľané desktop sticky laptopom
// aj per-krok mobilnými rámami. Gradient id je unikátny per inštanciu,
// lebo na stránke môže byť viac dash mockov naraz.
import { useId } from 'vue'

defineProps<{ mock: string }>()

const dashKpis = ['12 480 €', '316', '4,2 %']
const gradId = `dashGrad-${useId()}`
</script>

<style scoped>
/* ── Shared mockup primitives ────────────────────────────────────── */
.mock {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: 4.5% 5%;
  gap: 4%;
}
.m-bar {
  display: block;
  border-radius: 4px;
}
.m-dot {
  width: 16px;
  height: 16px;
  border-radius: 6px;
  flex-shrink: 0;
}
.m-pill {
  display: block;
  width: 44px;
  height: 12px;
  border-radius: 9999px;
}
.m-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}
.m-nav i {
  width: 22px;
  height: 5px;
  border-radius: 3px;
  background: rgba(120, 113, 108, 0.35);
}
.m-nav i:first-of-type {
  margin-left: auto;
}

/* ── Salon ───────────────────────────────────────────────────────── */
.mock-salon {
  background: linear-gradient(160deg, #fdf3ef 0%, #faf1e8 100%);
}
.m-salon-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 6%;
  align-items: center;
}
.m-salon-copy {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.m-book-card {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  box-shadow: 0 12px 28px -10px rgba(120, 60, 40, 0.25);
}
.m-slot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 7px;
  border-radius: 6px;
  background: rgba(120, 113, 108, 0.08);
}
.m-slot-state {
  width: 26px;
  height: 8px;
  border-radius: 9999px;
}
.m-confirm {
  margin-top: 2px;
  background: linear-gradient(90deg, #f43f5e, #fb7185);
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  text-align: center;
  padding: 5px 0;
  border-radius: 9999px;
  animation: m-pulse 2.4s ease-in-out infinite;
}
@keyframes m-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.4); }
  50% { box-shadow: 0 0 0 6px rgba(244, 63, 94, 0); }
}

/* ── E-shop ──────────────────────────────────────────────────────── */
.mock-eshop {
  background: #f8fafc;
}
.m-cart {
  margin-left: auto;
  position: relative;
  width: 20px;
  height: 20px;
  color: #334155;
}
.m-cart svg {
  width: 100%;
  height: 100%;
}
.m-cart-badge {
  position: absolute;
  top: -6px;
  right: -7px;
  background: #ef4444;
  color: #fff;
  font-size: 8px;
  font-weight: 700;
  width: 13px;
  height: 13px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: m-bump 3s ease-in-out infinite;
}
@keyframes m-bump {
  0%, 86%, 100% { transform: scale(1); }
  90% { transform: scale(1.35); }
}
.m-products {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4%;
}
.m-product {
  position: relative;
  background: #fff;
  border-radius: 8px;
  padding: 7px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: 0 8px 20px -8px rgba(15, 23, 42, 0.15);
}
.m-product-hot {
  outline: 2px solid #6366f1;
  outline-offset: -2px;
}
.m-product-img {
  border-radius: 6px;
  aspect-ratio: 4 / 3;
}
.m-img-1 { background: linear-gradient(140deg, #c7d2fe, #a5b4fc); }
.m-img-2 { background: linear-gradient(140deg, #fbcfe8, #f9a8d4); }
.m-img-3 { background: linear-gradient(140deg, #bbf7d0, #86efac); }
.m-img-4 { background: linear-gradient(140deg, #fde68a, #fcd34d); }
.m-price {
  font-size: 9px;
  font-weight: 800;
  color: #1e293b;
}
.m-added {
  position: absolute;
  top: 4px;
  right: 4px;
  background: #10b981;
  color: #fff;
  font-size: 7.5px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 9999px;
}

/* ── Chat ────────────────────────────────────────────────────────── */
.mock-chat {
  background: linear-gradient(180deg, #eef2ff 0%, #f5f3ff 100%);
  padding: 0;
  gap: 0;
}
.m-chat-header {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 4% 5%;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
}
.m-avatar {
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}
.m-online {
  margin-left: auto;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: #34d399;
  box-shadow: 0 0 10px rgba(52, 211, 153, 0.9);
}
.m-chat-body {
  flex: 1;
  padding: 4% 5%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.m-bubble {
  max-width: 70%;
  padding: 7px 11px;
  border-radius: 12px;
  font-size: 10.5px;
  line-height: 1.45;
}
.m-in {
  align-self: flex-start;
  background: #fff;
  color: #334155;
  border-bottom-left-radius: 4px;
  box-shadow: 0 4px 12px -4px rgba(15, 23, 42, 0.12);
}
.m-out {
  align-self: flex-end;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #eef2ff;
  border-bottom-right-radius: 4px;
}
.m-typing {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 9px 12px;
}
.m-typing span {
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background: rgba(238, 242, 255, 0.85);
  animation: m-blink 1.2s ease-in-out infinite;
}
.m-typing span:nth-child(2) { animation-delay: 0.18s; }
.m-typing span:nth-child(3) { animation-delay: 0.36s; }
@keyframes m-blink {
  0%, 60%, 100% { opacity: 0.35; transform: translateY(0); }
  30% { opacity: 1; transform: translateY(-2px); }
}

/* ── Dashboard ───────────────────────────────────────────────────── */
.mock-dash {
  background: #0b1120;
}
.m-kpis {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4%;
}
.m-kpi {
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 8px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.m-kpi-value {
  font-size: 12px;
  font-weight: 800;
  color: #e2e8f0;
  font-variant-numeric: tabular-nums;
}
.m-chart {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(148, 163, 184, 0.06);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 8px;
  padding: 10px;
}
.m-chart svg {
  flex: 1;
  width: 100%;
}
.m-line {
  stroke-dasharray: 320;
  stroke-dashoffset: 320;
  animation: m-draw 3s ease-out forwards;
}
@keyframes m-draw {
  to { stroke-dashoffset: 0; }
}
.m-mini-bars {
  display: flex;
  align-items: flex-end;
  gap: 5px;
  height: 26%;
}
.m-mini-bars i {
  flex: 1;
  height: var(--h);
  border-radius: 3px 3px 0 0;
  background: linear-gradient(180deg, #818cf8, #6366f1);
  opacity: 0.85;
}

/* Na mobile sú mockupy v každom kroku — nekonečné mikro-animácie
   tam nemajú čo robiť, kompozícia je statická. */
@media (max-width: 1023px) {
  .m-confirm,
  .m-cart-badge,
  .m-typing span {
    animation: none;
  }
  .m-line {
    animation: none;
    stroke-dashoffset: 0;
  }
}
</style>
