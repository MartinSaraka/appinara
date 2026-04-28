<template>
  <section ref="el" class="relative" :class="bgClass">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div class="lg:col-span-6 lg:sticky lg:top-28 self-start py-8 lg:py-24">
          <div class="relative">
            <div
              class="absolute -inset-10 rounded-[2rem] blur-3xl pointer-events-none transition-colors duration-700"
              :class="activeAccent"
              aria-hidden="true"
            />
            <DeviceFrame device="laptop" container-class="relative">
              <div class="relative w-full h-full">
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
                    <component :is="frame.render" />
                  </div>
                </Transition>
              </div>
            </DeviceFrame>

            <div class="hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 gap-1.5">
              <span
                v-for="(_, i) in frames"
                :key="i"
                class="block h-1 rounded-full transition-all duration-300"
                :class="active === i ? 'w-8 bg-primary-600 dark:bg-primary-400' : 'w-3 bg-gray-300 dark:bg-slate-700'"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 flex flex-col justify-center">
          <div
            v-for="(frame, i) in frames"
            :key="i"
            :ref="el => setStepRef(el, i)"
            class="min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-center py-16"
          >
            <span class="eyebrow mb-4">{{ String(i + 1).padStart(2, '0') }} · {{ frame.tag }}</span>
            <h3 class="text-display-md font-display font-bold text-gray-900 dark:text-white mb-5 text-balance">
              {{ frame.title }}
            </h3>
            <p class="text-lg md:text-xl text-gray-600 dark:text-slate-300 leading-relaxed max-w-md text-pretty">
              {{ frame.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

type Frame = {
  tag: string
  title: string
  body: string
  accent?: string
  render: any
}

const props = withDefaults(
  defineProps<{
    frames: Frame[]
    bgClass?: string
  }>(),
  { bgClass: 'bg-bone dark:bg-anthracite' }
)

const el = ref<HTMLElement | null>(null)
const stepRefs = ref<HTMLElement[]>([])
const active = ref(0)
let observer: IntersectionObserver | null = null

function setStepRef(node: any, i: number) {
  if (node && node instanceof HTMLElement) {
    stepRefs.value[i] = node
  }
}

const activeAccent = computed(() => {
  return props.frames[active.value]?.accent ?? 'bg-primary-500/15 dark:bg-primary-500/10'
})

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
