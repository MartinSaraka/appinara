<template>
  <div class="fixed bottom-0 right-0 z-[60] flex flex-col items-end pointer-events-none p-4 sm:p-6 pb-[5.5rem] md:pb-6">
    <Transition name="fade-scale">
      <div
        v-if="panelOpen"
        class="chat-frondo-panel pointer-events-auto mb-3 flex w-[min(100vw-2rem,420px)] max-h-[min(88vh,580px)] flex-col overflow-hidden rounded-md border border-mist bg-bone-50 shadow-letterpress-deep dark:border-anthracite-mist dark:bg-anthracite-elev"
        role="dialog"
        aria-label="Chat s Frondom, asistentom Appinara"
      >
        <header
          class="flex items-center gap-3 border-b border-mist px-4 py-3.5 dark:border-anthracite-mist bg-bone-50 dark:bg-anthracite-elev"
        >
          <div
            class="relative flex h-10 w-10 shrink-0 items-center justify-center bg-bone-50 dark:bg-anthracite-elev border border-ink-900 dark:border-bone-100"
            aria-hidden="true"
          >
            <span class="font-display italic text-[16px] text-ink-900 dark:text-bone-100 leading-none translate-y-[1px]">F</span>
            <span class="absolute -top-[2px] -left-[2px] w-1.5 h-1.5 bg-primary-500 dark:bg-cinnabar-glow" />
            <span class="absolute -bottom-[2px] -right-[2px] w-1.5 h-1.5 bg-primary-500 dark:bg-cinnabar-glow" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="font-display text-base font-bold tracking-tight text-gray-900 dark:text-white">Frondo</p>
            <p class="text-xs text-gray-600 dark:text-slate-400">Asistent Appinara · AI, audit, konzultácia</p>
          </div>
          <button
            type="button"
            class="shrink-0 rounded-xl p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:hover:bg-slate-800"
            aria-label="Zavrieť chat"
            @click="closePanel"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div
          v-if="showQualificationBanner"
          class="border-b border-gray-100 px-3 py-2.5 dark:border-slate-700/80 bg-gray-50/80 dark:bg-slate-800/40"
          role="region"
          aria-label="Krátka kvalifikácia"
        >
          <p class="text-xs font-semibold text-gray-900 dark:text-white">Lepší návrh — 2 rýchle voľby</p>
          <p class="mt-2 text-[11px] font-medium uppercase tracking-wide text-gray-500 dark:text-slate-500">Typ firmy</p>
          <div class="mt-1 flex flex-wrap gap-1.5">
            <button
              v-for="opt in segmentOptions"
              :key="opt.id"
              type="button"
              class="rounded-full border px-2.5 py-1 text-left text-[11px] font-medium shadow-sm transition-all"
              :class="
                companySegment === opt.id
                  ? 'border-primary-500 bg-primary-500/10 text-primary-800 dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-200'
                  : 'border-gray-200/90 bg-white text-gray-700 hover:border-primary-300 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-200'
              "
              @click="setSegment(opt.id)"
            >
              {{ opt.label }}
            </button>
          </div>
          <p class="mt-2 text-[11px] font-medium uppercase tracking-wide text-gray-500 dark:text-slate-500">Kde prichádzajú dopyty</p>
          <div class="mt-1 flex flex-wrap gap-1.5">
            <button
              v-for="opt in channelOptions"
              :key="opt.id"
              type="button"
              class="rounded-full border px-2.5 py-1 text-left text-[11px] font-medium shadow-sm transition-all"
              :class="
                inquiryChannel === opt.id
                  ? 'border-primary-500 bg-primary-500/10 text-primary-800 dark:border-primary-400 dark:bg-primary-500/15 dark:text-primary-200'
                  : 'border-gray-200/90 bg-white text-gray-700 hover:border-primary-300 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-200'
              "
              @click="setChannel(opt.id)"
            >
              {{ opt.label }}
            </button>
          </div>
          <button
            type="button"
            class="mt-2 text-[11px] font-medium text-primary-600 underline decoration-primary-400/40 underline-offset-2 dark:text-primary-400"
            @click="skipQualification"
          >
            Preskočiť
          </button>
        </div>

        <div ref="scrollRef" class="min-h-[240px] max-h-[360px] flex-1 space-y-3 overflow-y-auto px-3 py-3">
          <div
            v-for="(m, i) in displayMessages"
            :key="i"
            class="flex gap-2"
            :class="m.role === 'user' ? 'flex-row-reverse' : 'flex-row'"
          >
            <div
              v-if="m.role === 'assistant'"
              class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-bone-50 dark:bg-anthracite-elev border border-ink-900 dark:border-bone-100"
              aria-hidden="true"
            >
              <span class="font-display italic text-[12px] text-ink-900 dark:text-bone-100 leading-none translate-y-[1px]">F</span>
            </div>
            <div
              class="max-w-[88%] rounded-md px-3.5 py-2.5 text-sm leading-relaxed"
              :class="
                m.role === 'user'
                  ? 'bg-primary-500 dark:bg-cinnabar-glow text-bone-50 dark:text-anthracite'
                  : 'border border-mist bg-bone dark:bg-anthracite text-ink-900 dark:border-anthracite-mist dark:text-bone-100'
              "
            >
              {{ m.content }}
            </div>
          </div>

          <div v-if="loading" class="flex gap-2">
            <div
              class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-bone-50 dark:bg-anthracite-elev border border-ink-900 dark:border-bone-100 opacity-70"
              aria-hidden="true"
            >
              <span class="font-display italic text-[12px] text-ink-900 dark:text-bone-100 leading-none translate-y-[1px]">F</span>
            </div>
            <div
              class="rounded-md border border-mist bg-bone dark:bg-anthracite px-3.5 py-2.5 text-sm dark:border-anthracite-mist"
            >
              <span class="font-mono text-[11px] tracking-mono-wide uppercase text-ink-500 dark:text-ink-300">Frondo píše…</span>
            </div>
          </div>

          <div
            v-if="showNextStepHint && !leadMode && !loading"
            class="rounded-2xl border border-primary-400/25 bg-primary-500/[0.06] px-3 py-2.5 text-xs leading-snug text-gray-700 dark:border-primary-500/30 dark:bg-primary-500/10 dark:text-slate-300"
          >
            Chcete konkrétnejší návrh?
            <NuxtLink class="font-semibold text-primary-600 underline decoration-primary-400/50 underline-offset-2 dark:text-primary-400" to="/ai-audit">AI audit</NuxtLink>
            alebo
            <a class="font-semibold text-primary-600 underline decoration-primary-400/50 underline-offset-2 dark:text-primary-400" href="/#contact">kontakt</a>.
          </div>

          <div v-if="!leadMode && messages.length === 0" class="space-y-3 pt-1">
            <p class="px-1 text-xs font-medium uppercase tracking-wide text-gray-400 dark:text-slate-500">Čo vás zaujíma</p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="q in quickPrompts"
                :key="q"
                type="button"
                class="rounded-full border border-gray-200/90 bg-white px-3 py-1.5 text-left text-xs font-medium text-gray-700 shadow-sm transition-all hover:border-primary-300 hover:bg-primary-50/80 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:border-primary-500/40 dark:hover:bg-primary-500/10"
                @click="sendQuick(q)"
              >
                {{ q }}
              </button>
            </div>
            <div class="flex flex-wrap gap-2 border-t border-gray-100 pt-3 dark:border-slate-700/80">
              <NuxtLink
                to="/ai-audit"
                class="rounded-md bg-primary-500 px-3 py-1.5 text-xs font-semibold text-bone-50 transition hover:bg-primary-600"
                @click="panelOpen = false"
              >
                Spustiť AI audit
              </NuxtLink>
              <a
                href="/#contact"
                class="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                @click="panelOpen = false"
              >
                Napísať dopyt
              </a>
              <button
                type="button"
                class="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                @click="startLeadCapture"
              >
                Konzultácia
              </button>
            </div>
          </div>

          <div
            v-if="leadMode"
            class="space-y-3 rounded-2xl border border-primary-500/20 bg-gradient-to-b from-gray-50/90 to-white p-4 dark:from-slate-800/60 dark:to-slate-900/80"
          >
            <p class="text-sm font-semibold text-gray-900 dark:text-white">Zanechajte kontakt</p>
            <p class="text-xs text-gray-600 dark:text-slate-400">Ozvem sa s návrhom — údaje chránime podľa zásad ochrany údajov.</p>
            <input
              v-model="leadForm.name"
              type="text"
              class="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-600 dark:bg-slate-900"
              placeholder="Meno *"
              autocomplete="name"
            />
            <input
              v-model="leadForm.email"
              type="email"
              class="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-600 dark:bg-slate-900"
              placeholder="Email *"
              autocomplete="email"
            />
            <input
              v-model="leadForm.company"
              type="text"
              class="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-600 dark:bg-slate-900"
              placeholder="Firma"
              autocomplete="organization"
            />
            <input
              v-model="leadForm.phone"
              type="tel"
              class="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-600 dark:bg-slate-900"
              placeholder="Telefón (voliteľné)"
              autocomplete="tel"
            />
            <textarea
              v-model="leadForm.need"
              rows="3"
              maxlength="1200"
              class="w-full resize-none rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-600 dark:bg-slate-900"
              placeholder="Stručne, čo riešite *"
            />
            <p v-if="leadError" class="text-xs text-red-500">{{ leadError }}</p>
            <div class="flex gap-2">
              <button type="button" class="btn-primary flex-1 py-2.5 text-xs" :disabled="leadSubmitting" @click="submitLead">
                {{ leadSubmitting ? 'Odosielam…' : 'Odoslať' }}
              </button>
              <button type="button" class="btn-secondary py-2.5 text-xs" :disabled="leadSubmitting" @click="cancelLead">
                Späť
              </button>
            </div>
          </div>
        </div>

        <footer v-if="!leadMode" class="border-t border-gray-100 bg-gray-50/50 p-3 dark:border-slate-700/80 dark:bg-slate-900/50">
          <div class="flex gap-2">
            <input
              v-model="input"
              type="text"
              class="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-inner focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/25 dark:border-slate-600 dark:bg-slate-900"
              placeholder="Správa pre Fronda…"
              maxlength="2000"
              @keydown.enter.prevent="sendMessage"
            />
            <button
              type="button"
              class="shrink-0 rounded-md bg-primary-500 px-4 py-2.5 text-sm font-semibold text-bone-50 transition hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-45"
              :disabled="loading || !input.trim()"
              @click="sendMessage"
            >
              Odoslať
            </button>
          </div>
        </footer>
      </div>
    </Transition>

    <button
      type="button"
      class="chat-frondo-fab pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-md bg-primary-500 py-2.5 pl-2.5 pr-5 text-bone-50 shadow-letterpress transition hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
      aria-label="Otvoriť chat s Frondom"
      @click="togglePanel"
    >
      <span
        class="flex h-9 w-9 shrink-0 items-center justify-center bg-bone-50 dark:bg-bone-50 border border-bone-50"
        aria-hidden="true"
      >
        <span class="font-display italic text-[16px] text-primary-500 leading-none translate-y-[1px]">F</span>
      </span>
      <span class="min-w-0 text-left">
        <span class="block font-sans text-sm font-semibold leading-tight">Frondo</span>
        <span class="block font-mono text-[10px] tracking-mono-wide uppercase leading-tight text-bone-50/85">Opýtať sa</span>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import type { ChatCompanySegment, ChatInquiryChannel, ChatQualificationTags } from '~/types/lead'
import { formatChatbotLeadSummary, submitLeadIntake } from '~/services/leadIntake'

const { trackEvent } = useAnalytics()

const panelOpen = ref(false)
const loading = ref(false)
const input = ref('')
const scrollRef = ref<HTMLElement | null>(null)

const messages = ref<{ role: 'user' | 'assistant'; content: string }[]>([])

const quickPrompts = [
  'Čo je bezplatný AI audit?',
  'Aké AI riešenia ponúkate?',
  'Chcem chatbot pre firmu',
  'Mám veľa dopytov v emailoch — čo odporúčate?',
  'Ktoré riešenie je pre mňa vhodné?',
  'Chcem konzultáciu'
]

const leadMode = ref(false)
const leadSubmitting = ref(false)
const leadError = ref('')
const leadForm = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  need: ''
})

const qualDismissed = ref(false)
const companySegment = ref<ChatCompanySegment | ''>('')
const inquiryChannel = ref<ChatInquiryChannel | ''>('')

const segmentOptions: { id: ChatCompanySegment; label: string }[] = [
  { id: 'sluzby_prevadzka', label: 'Služby / prevádzka' },
  { id: 'obchod_b2b', label: 'Obchod B2B' },
  { id: 'vyroba_logistika', label: 'Výroba / logistika' },
  { id: 'ine', label: 'Iné' }
]

const channelOptions: { id: ChatInquiryChannel; label: string }[] = [
  { id: 'web_formular', label: 'Web / formulár' },
  { id: 'email', label: 'Email' },
  { id: 'telefon_messenger', label: 'Telefón / messenger' },
  { id: 'social', label: 'Sociálne siete' },
  { id: 'viac_kanalov', label: 'Viac kanálov' },
  { id: 'ine', label: 'Iné' }
]

const showQualificationBanner = computed(
  () => panelOpen.value && !qualDismissed.value
)

function buildQualificationPayload(): ChatQualificationTags | undefined {
  const q: ChatQualificationTags = {}
  if (companySegment.value) q.companySegment = companySegment.value
  if (inquiryChannel.value) q.inquiryChannel = inquiryChannel.value
  return q.companySegment || q.inquiryChannel ? q : undefined
}

function setSegment(id: ChatCompanySegment) {
  companySegment.value = id
  trackEvent('chatbot_qualification', { field: 'company_segment', value: id })
  maybeFinishQualification()
}

function setChannel(id: ChatInquiryChannel) {
  inquiryChannel.value = id
  trackEvent('chatbot_qualification', { field: 'inquiry_channel', value: id })
  maybeFinishQualification()
}

function maybeFinishQualification() {
  if (companySegment.value && inquiryChannel.value) {
    qualDismissed.value = true
    trackEvent('chatbot_qualification_complete')
  }
}

function skipQualification() {
  qualDismissed.value = true
  trackEvent('chatbot_qualification_skipped')
}

const route = useRoute()
const pagePath = computed(() => route.path)

const userMessageCount = computed(() => messages.value.filter((m) => m.role === 'user').length)

const showNextStepHint = computed(() => userMessageCount.value >= 3 && messages.value.length > 0)

const displayMessages = computed(() => messages.value)

function togglePanel() {
  panelOpen.value = !panelOpen.value
  if (panelOpen.value) {
    qualDismissed.value = false
    companySegment.value = ''
    inquiryChannel.value = ''
    trackEvent('chatbot_opened')
  }
}

function closePanel() {
  panelOpen.value = false
}

async function scrollToBottom() {
  await nextTick()
  const el = scrollRef.value
  if (el) el.scrollTop = el.scrollHeight
}

watch(messages, () => scrollToBottom(), { deep: true })
watch(loading, () => scrollToBottom())

async function sendQuick(text: string) {
  input.value = text
  await sendMessage()
}

function chatExcerpt(): string {
  return messages.value
    .slice(-12)
    .map((m) => `${m.role === 'user' ? 'U' : 'Frondo'}: ${m.content}`)
    .join('\n')
    .slice(0, 6000)
}

async function sendMessage() {
  const text = input.value.trim()
  if (!text || loading.value) return

  input.value = ''
  messages.value.push({ role: 'user', content: text })
  trackEvent('chatbot_message_sent')
  loading.value = true

  try {
    const res = await $fetch<{ reply: string; suggestLeadCapture: boolean }>('/api/chat', {
      method: 'POST',
      body: {
        message: text,
        history: messages.value.slice(0, -1),
        pagePath: pagePath.value,
        qualification: buildQualificationPayload()
      }
    })
    messages.value.push({ role: 'assistant', content: res.reply })
    if (res.suggestLeadCapture && !leadMode.value) {
      trackEvent('chatbot_lead_started', { reason: 'suggested' })
      leadMode.value = true
    }
  } catch {
    messages.value.push({
      role: 'assistant',
      content:
        'Chyba pripojenia. Skúste znova o chvíľu alebo napíšte cez kontakt v pätičke — odpoviem osobne.'
    })
  } finally {
    loading.value = false
  }
}

function startLeadCapture() {
  trackEvent('chatbot_lead_started', { reason: 'cta' })
  leadMode.value = true
}

function cancelLead() {
  leadMode.value = false
  leadError.value = ''
}

async function submitLead() {
  leadError.value = ''
  if (!leadForm.value.name.trim() || !leadForm.value.email.trim()) {
    leadError.value = 'Vyplňte meno a email.'
    return
  }
  const em = leadForm.value.email.trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
    leadError.value = 'Neplatný email.'
    return
  }
  if (!leadForm.value.need.trim() || leadForm.value.need.trim().length < 5) {
    leadError.value = 'Stručne popíšte potrebu (aspoň pár slov).'
    return
  }

  leadSubmitting.value = true
  try {
    const qual = buildQualificationPayload()

    const summary = formatChatbotLeadSummary({
      contact: {
        name: leadForm.value.name.trim(),
        email: em,
        company: leadForm.value.company.trim() || undefined,
        phone: leadForm.value.phone.trim() || undefined
      },
      need: leadForm.value.need.trim(),
      chatExcerpt: chatExcerpt(),
      qualification: qual
    })

    await submitLeadIntake({
      type: 'chatbot',
      summary,
      contact: {
        name: leadForm.value.name.trim(),
        email: em,
        company: leadForm.value.company.trim() || undefined,
        phone: leadForm.value.phone.trim() || undefined
      },
      need: leadForm.value.need.trim(),
      chatExcerpt: chatExcerpt(),
      qualification: qual
    })

    trackEvent('chatbot_lead_submitted')
    trackEvent('lead_submit_success', { source: 'chatbot' })
    leadMode.value = false
    messages.value.push({
      role: 'assistant',
      content:
        'Ďakujem — údaje sú odoslané, ozvem sa čo najskôr. Ak chcete ešte rýchlejšie zarovnať smer, spustite aj bezplatný AI audit.'
    })
    leadForm.value = { name: '', email: '', company: '', phone: '', need: '' }
  } catch {
    leadError.value = 'Odoslanie zlyhalo. Skúste znova alebo použite kontaktný formulár.'
    trackEvent('lead_submit_error', { source: 'chatbot' })
  } finally {
    leadSubmitting.value = false
  }
}

const welcomeLoaded = ref(false)
watch(panelOpen, (open) => {
  if (open && !welcomeLoaded.value) {
    welcomeLoaded.value = true
    messages.value = [
      {
        role: 'assistant',
        content:
          'Ahoj, som Frondo — asistent Appinara. Pomôžem s AI chatbotmi, follow-upom, webmi a smerom cez bezplatný AI audit. Čo riešite?'
      }
    ]
  }
})
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.97);
}
</style>
