<template>
  <div class="service-visual" :class="`is-${type}`" aria-hidden="true">
    <div class="visual-index">{{ number }}</div>

    <svg v-if="type === 'ai'" viewBox="0 0 320 220" role="presentation">
      <path class="wire" d="M52 65H118M202 65h66M52 155h66m84 0h66M160 26v38m0 92v38" />
      <circle class="node node-soft" cx="52" cy="65" r="13" />
      <circle class="node" cx="268" cy="65" r="13" />
      <circle class="node" cx="52" cy="155" r="13" />
      <circle class="node node-soft" cx="268" cy="155" r="13" />
      <rect class="panel" x="118" y="64" width="84" height="92" rx="4" />
      <path class="accent-stroke" d="M139 95h42M139 112h30M139 129h36" />
      <circle class="pulse" cx="160" cy="110" r="67" />
    </svg>

    <svg v-else-if="type === 'web'" viewBox="0 0 320 220" role="presentation">
      <rect class="panel" x="38" y="35" width="244" height="150" rx="4" />
      <path class="wire" d="M38 64h244M61 50h1m13 0h1m13 0h1" />
      <rect class="fill-soft" x="61" y="84" width="96" height="13" rx="2" />
      <rect class="fill-ink" x="61" y="107" width="70" height="8" rx="2" />
      <rect class="fill-accent" x="61" y="132" width="54" height="21" rx="2" />
      <rect class="image-block" x="177" y="83" width="79" height="70" rx="3" />
      <path class="accent-stroke" d="m188 140 18-18 12 11 15-21 15 28" />
    </svg>

    <svg v-else-if="type === 'shop'" viewBox="0 0 320 220" role="presentation">
      <path class="wire" d="M45 59h32l18 91h132l20-68H89" />
      <circle class="node" cx="111" cy="174" r="12" />
      <circle class="node" cx="215" cy="174" r="12" />
      <rect class="product" x="112" y="54" width="45" height="61" rx="3" />
      <rect class="product product-hot" x="174" y="46" width="45" height="69" rx="3" />
      <path class="accent-stroke" d="M124 91h21m41-9h21" />
      <circle class="badge" cx="224" cy="48" r="16" />
      <path class="badge-mark" d="m217 48 5 5 9-11" />
    </svg>

    <svg v-else viewBox="0 0 320 220" role="presentation">
      <rect class="panel" x="37" y="35" width="246" height="150" rx="4" />
      <path class="wire" d="M37 68h246M91 68v117" />
      <rect class="fill-soft" x="52" y="84" width="24" height="6" rx="2" />
      <rect class="fill-soft" x="52" y="103" width="24" height="6" rx="2" />
      <rect class="fill-accent" x="52" y="124" width="24" height="6" rx="2" />
      <path class="chart-line" d="m112 145 30-27 26 10 31-46 29 22 33-36" />
      <path class="chart-area" d="m112 145 30-27 26 10 31-46 29 22 33-36v77H112Z" />
      <circle class="node" cx="199" cy="82" r="6" />
    </svg>

    <span class="visual-caption">{{ caption }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: 'ai' | 'web' | 'shop' | 'data'
  number: string
  caption: string
}>()
</script>

<style scoped>
.service-visual {
  --visual-fg: #1e293b;
  --visual-bg: #ffffff;
  --visual-muted: #f8fafc;
  --visual-rule: rgba(99, 102, 241, .18);
  --visual-rule-soft: rgba(15, 23, 42, .13);
  --visual-accent: #6366f1;
  --visual-tint: #e0e7ff;
  position: relative;
  min-height: 220px;
  overflow: hidden;
  color: var(--visual-fg);
  background:
    linear-gradient(var(--visual-rule) 1px, transparent 1px),
    linear-gradient(90deg, var(--visual-rule) 1px, transparent 1px),
    var(--visual-muted);
  background-size: 28px 28px;
  border: 1px solid var(--visual-rule-soft);
}
.service-visual::after {
  content: '';
  position: absolute;
  inset: 10px;
  border: 1px solid var(--visual-rule-soft);
  pointer-events: none;
}
svg { width: 100%; height: 220px; display: block; position: relative; z-index: 1; }
.visual-index {
  position: absolute;
  top: 17px;
  right: 20px;
  z-index: 2;
  font: 700 11px/1 var(--font-sans, sans-serif);
  letter-spacing: .12em;
  color: var(--visual-accent);
}
.visual-caption {
  position: absolute;
  left: 20px;
  bottom: 16px;
  z-index: 2;
  padding: 5px 8px;
  background: var(--visual-bg);
  border: 1px solid var(--visual-rule-soft);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .11em;
  text-transform: uppercase;
}
.panel, .wire, .node, .product { fill: var(--visual-bg); stroke: currentColor; stroke-width: 2; }
.wire { fill: none; opacity: .8; }
.node-soft, .fill-soft { fill: var(--visual-rule-soft); }
.fill-ink { fill: currentColor; opacity: .72; }
.fill-accent, .badge { fill: var(--visual-accent); }
.accent-stroke, .chart-line { fill: none; stroke: var(--visual-accent); stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
.image-block { fill: var(--visual-bg); stroke: currentColor; stroke-width: 2; }
.product-hot { stroke: var(--visual-accent); stroke-width: 3; }
.badge-mark { fill: none; stroke: white; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
.chart-area { fill: var(--visual-tint); stroke: none; }
.pulse { fill: none; stroke: var(--visual-accent); opacity: .18; transform-origin: center; animation: visual-pulse 3s ease-out infinite; }
@keyframes visual-pulse { 0% { transform: scale(.72); opacity: .35 } 80%,100% { transform: scale(1.15); opacity: 0 } }
@media (prefers-reduced-motion: reduce) { .pulse { animation: none; } }
</style>

<!-- Dark overrides must live unscoped: `:global(.dark)` inside scoped styles
     never matches, so the visuals stayed paper-light in dark mode. -->
<style>
.dark .service-visual {
  --visual-fg: #e2e8f0;
  --visual-bg: #0f172a;
  --visual-muted: #111827;
  --visual-rule: rgba(129, 140, 248, .12);
  --visual-rule-soft: rgba(255, 255, 255, .12);
  --visual-accent: #818cf8;
  --visual-tint: rgba(99, 102, 241, .18);
}
</style>
