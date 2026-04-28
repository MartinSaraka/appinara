<template>
  <div class="max-w-2xl mx-auto">
    <div v-if="!finished" class="space-y-8">
      <div>
        <div class="flex justify-between text-sm dark:text-slate-400 text-gray-600 mb-2">
          <span>Krok {{ currentStep + 1 }} z {{ totalSteps }}</span>
          <span>{{ progressPercent }}%</span>
        </div>
        <div
          class="h-2 rounded-full bg-gray-200 dark:bg-slate-800 overflow-hidden"
          role="progressbar"
          :aria-valuenow="progressPercent"
          aria-valuemin="0"
          aria-valuemax="100"
          :aria-label="`Priebeh auditu, ${progressPercent} percent`"
        >
          <div
            class="h-full bg-primary-500 dark:bg-cinnabar-glow transition-all duration-300"
            :style="{ width: `${progressPercent}%` }"
          />
        </div>
      </div>

      <fieldset class="glass-effect rounded-2xl p-6 md:p-8 border border-gray-200/30 dark:border-white/10">
        <legend class="sr-only">{{ currentQuestion.legend }}</legend>
        <h2 class="text-xl md:text-2xl font-display font-bold dark:text-white text-gray-900 mb-6">
          {{ currentQuestion.title }}
        </h2>

        <div v-if="currentQuestion.type === 'choice'" class="space-y-3" role="radiogroup" :aria-labelledby="`q-${currentStep}`">
          <p :id="`q-${currentStep}`" class="sr-only">{{ currentQuestion.title }}</p>
          <label
            v-for="opt in currentQuestion.options"
            :key="opt.value"
            class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all"
            :class="
              answers[currentQuestion.field] === opt.value
                ? 'border-primary-500 bg-primary-500/10 dark:bg-primary-500/15'
                : 'border-gray-200 dark:border-slate-700 hover:border-primary-400/50'
            "
          >
            <input
              v-model="answers[currentQuestion.field]"
              type="radio"
              class="mt-1"
              :name="currentQuestion.field"
              :value="opt.value"
            />
            <span class="dark:text-slate-200 text-gray-800">{{ opt.label }}</span>
          </label>
        </div>

        <div v-else class="space-y-5">
          <div>
            <label for="audit-name" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-1">Meno <span class="text-red-400">*</span></label>
            <input
              id="audit-name"
              v-model="contact.name"
              type="text"
              autocomplete="name"
              class="w-full px-4 py-3 rounded-xl dark:bg-slate-900/50 bg-white border border-gray-300 dark:border-slate-700 dark:text-white focus:ring-2 focus:ring-primary-500"
              :class="{ 'border-red-500': showErrors && !contact.name.trim() }"
            />
          </div>
          <div>
            <label for="audit-email" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-1">Email <span class="text-red-400">*</span></label>
            <input
              id="audit-email"
              v-model="contact.email"
              type="email"
              autocomplete="email"
              class="w-full px-4 py-3 rounded-xl dark:bg-slate-900/50 bg-white border border-gray-300 dark:border-slate-700 dark:text-white focus:ring-2 focus:ring-primary-500"
              :class="{ 'border-red-500': showErrors && !emailValid }"
            />
          </div>
          <div>
            <label for="audit-company" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-1">Firma <span class="text-red-400">*</span></label>
            <input
              id="audit-company"
              v-model="contact.company"
              type="text"
              autocomplete="organization"
              class="w-full px-4 py-3 rounded-xl dark:bg-slate-900/50 bg-white border border-gray-300 dark:border-slate-700 dark:text-white focus:ring-2 focus:ring-primary-500"
              :class="{ 'border-red-500': showErrors && !contact.company.trim() }"
            />
          </div>
          <div>
            <label for="audit-phone" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-1">Telefón <span class="text-slate-500">(voliteľné)</span></label>
            <input
              id="audit-phone"
              v-model="contact.phone"
              type="tel"
              autocomplete="tel"
              class="w-full px-4 py-3 rounded-xl dark:bg-slate-900/50 bg-white border border-gray-300 dark:border-slate-700 dark:text-white focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label for="audit-note" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-1">Krátka poznámka <span class="text-slate-500">(voliteľné)</span></label>
            <textarea
              id="audit-note"
              v-model="contact.note"
              rows="3"
              maxlength="800"
              class="w-full px-4 py-3 rounded-xl dark:bg-slate-900/50 bg-white border border-gray-300 dark:border-slate-700 dark:text-white focus:ring-2 focus:ring-primary-500 resize-none"
              placeholder="Čokoľvek, čo ešte doplní kontext…"
            />
          </div>
          <label class="flex items-start gap-3 cursor-pointer">
            <input v-model="contact.consent" type="checkbox" class="mt-1 rounded border-gray-300" />
            <span class="text-sm dark:text-slate-300 text-gray-700">
              Súhlasím so spracovaním údajov na účely odpovede na tento dopyt v zmysle zásad ochrany osobných údajov.
            </span>
          </label>
        </div>
      </fieldset>

      <p v-if="stepError" class="text-red-400 text-sm" role="alert">{{ stepError }}</p>

      <div class="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between">
        <button
          v-if="currentStep > 0"
          type="button"
          class="btn-secondary text-center px-6 py-3"
          @click="goBack"
        >
          Späť
        </button>
        <span v-else class="hidden sm:block" />

        <button
          v-if="currentStep < totalSteps - 1"
          type="button"
          class="btn-primary text-center px-6 py-3 sm:ml-auto"
          @click="goNext"
        >
          Ďalej
        </button>
        <button
          v-else
          type="button"
          class="btn-primary text-center px-6 py-3 sm:ml-auto"
          :disabled="submitting"
          @click="submitAudit"
        >
          {{ submitting ? 'Odosielam…' : 'Odoslať audit' }}
        </button>
      </div>
    </div>

    <div v-else class="glass-effect rounded-2xl p-8 md:p-10 border border-gray-200/30 dark:border-white/10 space-y-8">
      <div>
        <h2 class="text-2xl md:text-3xl font-display font-bold dark:text-white text-gray-900 mb-2">Ďakujeme!</h2>
        <p class="dark:text-slate-300 text-gray-700">
          Vaše odpovede sú uložené a odoslané. Pripravím návrh ďalšieho postupu a ozvem sa s konkrétnymi krokmi. Ak chcete medzitým rýchlu orientáciu, otvorte aj chat vpravo dole — vie vás nasmerovať na služby alebo AI audit.
        </p>
      </div>

      <div class="rounded-xl bg-primary-500/10 border border-primary-500/30 p-6">
        <h3 class="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-300 mb-2">Odporúčaný smer</h3>
        <p class="text-xl font-display font-bold dark:text-white text-gray-900">{{ resultRecommendation.title }}</p>
        <p class="mt-2 dark:text-slate-300 text-gray-700">{{ resultRecommendation.description }}</p>
      </div>

      <div>
        <h3 class="text-lg font-semibold dark:text-white text-gray-900 mb-3">Zhrnutie odpovedí</h3>
        <dl class="space-y-2 text-sm">
          <div v-for="row in summaryRows" :key="row.q" class="flex flex-col sm:flex-row sm:gap-4 border-b border-gray-200/50 dark:border-slate-800 pb-2">
            <dt class="font-medium dark:text-slate-400 text-gray-600 sm:w-2/5">{{ row.q }}</dt>
            <dd class="dark:text-white text-gray-900 sm:flex-1">{{ row.a }}</dd>
          </div>
        </dl>
      </div>

      <div class="flex flex-col sm:flex-row gap-3">
        <NuxtLink to="/" class="btn-secondary text-center">Späť na domov</NuxtLink>
        <NuxtLink to="/#contact" class="btn-primary text-center">Kontakt</NuxtLink>
        <NuxtLink to="/riesenia" class="btn-secondary text-center">Riešenia</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import type { AuditAnswers } from '~/utils/aiAuditRecommendation'
import { computeAiAuditRecommendation } from '~/utils/aiAuditRecommendation'
import { formatAiAuditSummary, submitLeadIntake } from '~/services/leadIntake'

const { trackEvent } = useAnalytics()

const totalSteps = 5
const currentStep = ref(0)
const finished = ref(false)
const stepError = ref('')
const showErrors = ref(false)
const submitting = ref(false)
const startedLogged = ref(false)

const answers = reactive<AuditAnswers>({
  firmType: '',
  chaos: '',
  solutionInterest: '',
  budget: ''
})

const contact = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  note: '',
  consent: false
})

const resultRecommendation = ref({ title: '', description: '' })
const summaryRows = ref<{ q: string; a: string }[]>([])

const labelMaps = {
  firmType: {
    'sluzby-prevadzka': 'Služby / prevádzka',
    b2b: 'B2B firma',
    ecommerce: 'E-commerce',
    interny: 'Interný firemný nástroj',
    ine: 'Iné'
  },
  chaos: {
    emaily: 'Emaily',
    formular: 'Kontaktné formuláre',
    'social-chat': 'Sociálne siete / chat',
    'interna-koordinacia': 'Interná koordinácia',
    'neprehladne-procesy': 'Neprehľadné procesy',
    'nic-automatizovane': 'Nemáme nič automatizované'
  },
  solutionInterest: {
    'ai-chatbot': 'AI chatbot',
    'ai-lead-followup': 'AI lead follow-up',
    'web-aplikacia': 'Web alebo aplikácia',
    'dashboard-interny': 'Dashboard alebo interný nástroj',
    poradit: 'Potrebujem poradiť'
  },
  budget: {
    'do-500': 'Do 500 €',
    '500-1500': '500 až 1500 €',
    '1500-5000': '1500 až 5000 €',
    '5000plus': '5000 €+',
    neviem: 'Neviem zatiaľ'
  }
} as const

type FieldKey = keyof typeof labelMaps

const questions = [
  {
    type: 'choice' as const,
    legend: 'Typ firmy',
    title: 'Aký typ firmy alebo projektu riešite?',
    field: 'firmType' as const,
    options: [
      { value: 'sluzby-prevadzka', label: 'Služby / prevádzka' },
      { value: 'b2b', label: 'B2B firma' },
      { value: 'ecommerce', label: 'E-commerce' },
      { value: 'interny', label: 'Interný firemný nástroj' },
      { value: 'ine', label: 'Iné' }
    ]
  },
  {
    type: 'choice' as const,
    legend: 'Chaos',
    title: 'Kde dnes vzniká najväčší chaos?',
    field: 'chaos' as const,
    options: [
      { value: 'emaily', label: 'Emaily' },
      { value: 'formular', label: 'Kontaktné formuláre' },
      { value: 'social-chat', label: 'Sociálne siete / chat' },
      { value: 'interna-koordinacia', label: 'Interná koordinácia' },
      { value: 'neprehladne-procesy', label: 'Neprehľadné procesy' },
      { value: 'nic-automatizovane', label: 'Nemáme nič automatizované' }
    ]
  },
  {
    type: 'choice' as const,
    legend: 'Záujem o riešenie',
    title: 'Aký typ riešenia vás zaujíma najviac?',
    field: 'solutionInterest' as const,
    options: [
      { value: 'ai-chatbot', label: 'AI chatbot' },
      { value: 'ai-lead-followup', label: 'AI lead follow-up' },
      { value: 'web-aplikacia', label: 'Web alebo aplikácia' },
      { value: 'dashboard-interny', label: 'Dashboard alebo interný nástroj' },
      { value: 'poradit', label: 'Potrebujem poradiť' }
    ]
  },
  {
    type: 'choice' as const,
    legend: 'Rozpočet',
    title: 'Aký je váš približný rozpočet alebo rozsah?',
    field: 'budget' as const,
    options: [
      { value: 'do-500', label: 'Do 500 €' },
      { value: '500-1500', label: '500 až 1500 €' },
      { value: '1500-5000', label: '1500 až 5000 €' },
      { value: '5000plus', label: '5000 €+' },
      { value: 'neviem', label: 'Neviem zatiaľ' }
    ]
  },
  {
    type: 'form' as const,
    legend: 'Kontaktné údaje',
    title: 'Kontaktné údaje',
    field: null,
    options: []
  }
] as const

const currentQuestion = computed(() => questions[currentStep.value])

const progressPercent = computed(() =>
  Math.round(((currentStep.value + 1) / totalSteps) * 100)
)

const emailValid = computed(() => {
  const e = contact.email.trim()
  if (!e) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
})

function resolveLabel(field: FieldKey, value: string): string {
  const m = labelMaps[field] as Record<string, string>
  return m[value] ?? value
}

function goBack() {
  stepError.value = ''
  showErrors.value = false
  if (currentStep.value > 0) currentStep.value -= 1
}

function goNext() {
  stepError.value = ''
  showErrors.value = false
  const q = currentQuestion.value
  if (q.type === 'choice') {
    const v = answers[q.field]
    if (!v) {
      stepError.value = 'Vyberte jednu z možností.'
      return
    }
    trackEvent('ai_audit_step_completed', { step: currentStep.value + 1, field: q.field })
    currentStep.value += 1
  }
}

async function submitAudit() {
  showErrors.value = true
  stepError.value = ''
  if (!contact.name.trim() || !emailValid.value || !contact.company.trim()) {
    stepError.value = 'Vyplňte povinné polia (meno, email, firma).'
    return
  }
  if (!contact.consent) {
    stepError.value = 'Potvrďte súhlas so spracovaním údajov.'
    return
  }

  const rec = computeAiAuditRecommendation(answers)
  resultRecommendation.value = { title: rec.title, description: rec.description }

  const humanAnswers: Record<string, string> = {
    'Typ firmy alebo projektu': resolveLabel('firmType', answers.firmType),
    'Kde vzniká chaos': resolveLabel('chaos', answers.chaos),
    'Záujem o typ riešenia': resolveLabel('solutionInterest', answers.solutionInterest),
    'Rozpočet / rozsah': resolveLabel('budget', answers.budget)
  }

  summaryRows.value = Object.entries(humanAnswers).map(([q, a]) => ({ q, a }))

  const summary = formatAiAuditSummary({
    answers: humanAnswers,
    recommendation: rec.title,
    contact: {
      name: contact.name.trim(),
      email: contact.email.trim(),
      company: contact.company.trim(),
      phone: contact.phone.trim() || undefined,
      note: contact.note.trim() || undefined,
      consent: contact.consent
    }
  })

  submitting.value = true
  try {
    await submitLeadIntake({
      type: 'ai_audit',
      summary,
      recommendation: rec.title,
      answers: humanAnswers,
      contact: {
        name: contact.name.trim(),
        email: contact.email.trim(),
        company: contact.company.trim(),
        phone: contact.phone.trim() || undefined,
        note: contact.note.trim() || undefined,
        consent: contact.consent
      }
    })
    trackEvent('ai_audit_submitted', { recommendationId: rec.id })
    trackEvent('lead_submit_success', { source: 'ai_audit' })
    finished.value = true
  } catch {
    trackEvent('lead_submit_error', { source: 'ai_audit' })
    stepError.value =
      'Odoslanie sa nepodarilo. Skúste znova alebo napíšte priamo na appinarasolutions@gmail.com.'
  } finally {
    submitting.value = false
  }
}

onMounted(() => {
  if (!startedLogged.value) {
    startedLogged.value = true
    trackEvent('ai_audit_started')
  }
})
</script>
