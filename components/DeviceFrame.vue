<template>
  <div
    class="relative"
    :class="containerClass"
  >
    <div
      v-if="device === 'laptop'"
      class="relative bg-gradient-to-b from-slate-700 to-slate-900 dark:from-slate-800 dark:to-black rounded-[18px] p-[10px] shadow-editorial dark:shadow-editorial-dark"
    >
      <div class="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-slate-600/60" aria-hidden="true" />
      <div class="rounded-[10px] overflow-hidden bg-white dark:bg-slate-950 aspect-[16/10]">
        <slot />
      </div>
      <div class="absolute -inset-x-8 bottom-[-12px] h-3 rounded-b-[24px] bg-gradient-to-b from-slate-700 to-slate-900 dark:from-slate-800 dark:to-black" aria-hidden="true" />
      <div class="absolute -inset-x-12 -bottom-3 h-1.5 rounded-b-full bg-slate-900/40 dark:bg-black/60 blur-[2px]" aria-hidden="true" />
    </div>

    <div
      v-else-if="device === 'phone'"
      class="relative mx-auto bg-gradient-to-b from-slate-800 to-black rounded-[40px] p-[6px] shadow-editorial dark:shadow-editorial-dark"
      style="width: 280px"
    >
      <div class="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 rounded-2xl bg-black z-20" aria-hidden="true" />
      <div class="rounded-[34px] overflow-hidden bg-white dark:bg-slate-950 aspect-[9/19]">
        <slot />
      </div>
    </div>

    <div
      v-else
      class="relative rounded-md overflow-hidden border border-mist dark:border-anthracite-mist bg-bone-50 dark:bg-anthracite-elev shadow-editorial dark:shadow-editorial-dark"
    >
      <div class="flex items-center gap-1.5 px-3 py-2.5 border-b border-gray-100 dark:border-slate-800">
        <span class="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-amber-400/70"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400/70"></span>
        <span class="ml-3 text-[10px] font-mono text-gray-400 dark:text-slate-500 truncate">
          {{ url || 'appinara.sk' }}
        </span>
      </div>
      <div class="aspect-[16/10]">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    device?: 'laptop' | 'phone' | 'browser'
    url?: string
    containerClass?: string
  }>(),
  { device: 'laptop', url: '', containerClass: '' }
)
</script>
