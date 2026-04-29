<template>
  <section
    id="contact"
    class="relative section-tall border-t border-gray-200/80 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/80 overflow-hidden"
  >
    <div class="absolute -top-32 -right-32 w-[420px] h-[420px] mesh-1 rounded-full opacity-30 blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="container mx-auto px-6 relative">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 lg:gap-20 md:items-start">
          <div v-motion-fade-visible class="md:pt-2">
            <p class="eyebrow mb-4">Kontakt</p>
            <h2 class="text-display-lg font-display font-bold mb-5 text-gray-900 dark:text-white text-balance leading-[1.05]">
              Napíšte mi stručne,
              <span class="italic font-medium gradient-text">čo riešite.</span>
            </h2>
            <p class="text-lg md:text-xl text-gray-600 dark:text-slate-300 mb-10 leading-relaxed max-w-md text-pretty">
              Ozvem sa s konkrétnym ďalším krokom. Bez záväzkov.
            </p>

            <div class="space-y-4">
              <div v-for="contact in contactInfo" :key="contact.label" class="flex items-center gap-4">
                <div class="w-11 h-11 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center flex-shrink-0 text-primary-700 dark:text-primary-300">
                  <component :is="contact.icon" class="w-5 h-5" />
                </div>
                <div>
                  <div class="text-xs uppercase tracking-wide text-gray-500 dark:text-slate-500">{{ contact.label }}</div>
                  <a
                    v-if="contact.href"
                    :href="contact.href"
                    class="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {{ contact.value }}
                  </a>
                  <span v-else class="text-gray-900 dark:text-white font-medium">{{ contact.value }}</span>
                </div>
              </div>
            </div>
          </div>

          <div v-motion-fade-visible :delay="200">
            <form
              class="relative rounded-2xl border border-gray-200/90 dark:border-slate-700/80 bg-gray-50/50 dark:bg-slate-900/40 p-6 md:p-8 space-y-5 shadow-sm"
              novalidate
              @submit.prevent="handleSubmit"
            >
              <div class="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                <label for="website">Website</label>
                <input id="website" v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
              </div>

              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1.5">
                  Meno <span class="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="input-app"
                  :class="{ 'border-red-500 ring-red-500/30': nameError }"
                  placeholder="Vaše meno"
                  aria-label="Vaše meno"
                  autocomplete="name"
                />
                <p v-if="nameError" class="text-xs text-red-500 mt-1">{{ nameError }}</p>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1.5">
                  Email <span class="text-gray-500 dark:text-slate-500 font-normal">(alebo telefón nižšie)</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="input-app"
                  :class="{
                    'border-red-500': emailError || (validationError && !form.email && !form.phone),
                    'border-emerald-500/60': emailValid
                  }"
                  placeholder="vas@email.com"
                  aria-label="Váš email"
                  autocomplete="email"
                  @blur="validateEmailField"
                />
                <p
                  class="text-xs mt-1"
                  :class="
                    emailError ? 'text-red-500' : emailValid ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-500 dark:text-slate-500'
                  "
                >
                  {{ emailError || (emailValid ? 'Email vyzerá v poriadku' : 'Na odpoveď vám stačí email alebo telefón') }}
                </p>
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1.5">
                  Telefón <span class="text-gray-500 dark:text-slate-500 font-normal">(voliteľné)</span>
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="input-app"
                  :class="{ 'border-red-500': validationError && !form.email && !form.phone }"
                  placeholder="+421 XXX XXX XXX"
                  aria-label="Váš telefón"
                  autocomplete="tel"
                />
                <p class="text-xs text-gray-500 dark:text-slate-500 mt-1">
                  {{
                    validationError && !form.email && !form.phone
                      ? 'Vyplňte aspoň email alebo telefón'
                      : ''
                  }}
                </p>
              </div>

              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1.5">
                  Firma <span class="text-gray-500 dark:text-slate-500 font-normal">(voliteľné)</span>
                </label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  class="input-app"
                  placeholder="Názov firmy alebo projektu"
                  autocomplete="organization"
                />
              </div>

              <div>
                <label for="project" class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1.5">
                  Typ projektu <span class="text-red-500">*</span>
                </label>
                <select
                  id="project"
                  v-model="form.projectType"
                  required
                  class="input-app"
                  :class="{ 'border-red-500': projectTypeError }"
                  aria-label="Typ projektu"
                >
                  <option value="">Vyberte typ</option>
                  <option value="ai-integration">AI / chatbot / automatizácia</option>
                  <option value="web-app">Web / aplikácia</option>
                  <option value="ecommerce">E‑shop</option>
                  <option value="business-tool">Interný nástroj / dashboard</option>
                  <option value="other">Iné</option>
                </select>
                <p class="text-xs mt-1" :class="projectTypeError ? 'text-red-500' : 'text-gray-500 dark:text-slate-500'">
                  {{ projectTypeError || 'Stručne mi pomôže zacieliť odpoveď' }}
                </p>
              </div>

              <div>
                <label for="budget" class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1.5">
                  Rozpočet <span class="text-gray-500 dark:text-slate-500 font-normal">(voliteľné)</span>
                </label>
                <select id="budget" v-model="form.budgetRange" class="input-app">
                  <option value="">Zatiaľ neviem</option>
                  <option value="do-500">Do 500 €</option>
                  <option value="500-1500">500 – 1 500 €</option>
                  <option value="1500-5000">1 500 – 5 000 €</option>
                  <option value="5000plus">5 000 € +</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1.5">
                  Správa <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  maxlength="1000"
                  class="input-app resize-none"
                  :class="{ 'border-red-500': messageError }"
                  placeholder="Čo chcete zlepšiť a čo by malo byť výsledkom…"
                  aria-label="Vaša správa"
                />
                <p
                  id="message-helper"
                  class="text-xs mt-1 flex justify-between gap-2"
                  :class="messageError ? 'text-red-500' : 'text-gray-500 dark:text-slate-500'"
                >
                  <span>{{ messageError || 'Aspoň 10 znakov' }}</span>
                  <span class="flex-shrink-0">{{ form.message.length }}/1000</span>
                </p>
              </div>

              <button type="submit" class="w-full btn-primary justify-center" :disabled="isSubmitting">
                {{ isSubmitting ? 'Odosielam…' : 'Odoslať' }}
              </button>

              <div
                v-if="submitMessage"
                class="rounded-xl p-4 flex gap-3 items-start text-sm"
                :class="
                  submitSuccess
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 border border-emerald-200/80 dark:border-emerald-800/60'
                    : 'bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-200 border border-red-200/80 dark:border-red-900/50'
                "
                role="status"
              >
                <span v-if="submitSuccess" class="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span v-else class="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <svg class="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                <span>{{ submitMessage }}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { formatContactSummary, submitLeadIntake } from '~/services/leadIntake'

const { trackEvent } = useAnalytics()

const EmailIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    })
  ])

const PhoneIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    })
  ])

const LocationIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
    }),
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    })
  ])

const contactInfo = [
  { label: 'Email', value: 'appinarasolutions@gmail.com', href: 'mailto:appinarasolutions@gmail.com', icon: EmailIcon },
  { label: 'Telefón', value: '+421 917 566 722', href: 'tel:+421917566722', icon: PhoneIcon },
  { label: 'Lokácia', value: 'Slovensko', href: null as string | null, icon: LocationIcon }
]

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budgetRange: '',
  message: ''
})

const honeypot = ref('')
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const validationError = ref(false)
const emailError = ref('')
const emailValid = ref(false)
const projectTypeError = ref('')
const messageError = ref('')
const nameError = ref('')

function validateEmailField() {
  if (!form.value.email) {
    emailError.value = ''
    emailValid.value = false
    return
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    emailError.value = 'Neplatná emailová adresa'
    emailValid.value = false
  } else {
    emailError.value = ''
    emailValid.value = true
  }
}

async function handleSubmit() {
  nameError.value = ''
  validationError.value = false
  emailError.value = ''
  projectTypeError.value = ''
  messageError.value = ''
  submitMessage.value = ''

  if (!form.value.name.trim()) {
    nameError.value = 'Vyplňte meno.'
    submitMessage.value = 'Skontrolujte povinné polia.'
    return
  }

  if (!form.value.email && !form.value.phone) {
    validationError.value = true
    submitMessage.value = 'Vyplňte aspoň email alebo telefón.'
    return
  }

  if (form.value.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email)) {
      emailError.value = 'Neplatná emailová adresa'
      submitMessage.value = 'Skontrolujte email.'
      return
    }
  }

  if (!form.value.projectType) {
    projectTypeError.value = 'Vyberte typ projektu.'
    submitMessage.value = 'Skontrolujte povinné polia.'
    return
  }

  if (!form.value.message || form.value.message.trim().length < 10) {
    messageError.value = 'Správa musí mať aspoň 10 znakov.'
    submitMessage.value = 'Skontrolujte správu.'
    return
  }

  if (honeypot.value.trim() !== '') {
    submitSuccess.value = true
    submitMessage.value = 'Ďakujeme — správa bola odoslaná.'
    trackEvent('contact_form_submitted', { honeypot: true })
    return
  }

  const summary = formatContactSummary({
    name: form.value.name.trim(),
    email: form.value.email.trim(),
    phone: form.value.phone.trim() || undefined,
    company: form.value.company.trim() || undefined,
    projectType: form.value.projectType,
    budgetRange: form.value.budgetRange || undefined,
    message: form.value.message.trim()
  })

  isSubmitting.value = true
  try {
    await submitLeadIntake({
      type: 'contact',
      summary,
      contact: {
        name: form.value.name.trim(),
        email: form.value.email.trim(),
        phone: form.value.phone.trim() || undefined,
        company: form.value.company.trim() || undefined
      },
      projectType: form.value.projectType,
      budgetRange: form.value.budgetRange || undefined,
      message: form.value.message.trim(),
      _hp: ''
    })

    submitSuccess.value = true
    submitMessage.value = 'Ďakujem — správa je odoslaná. Ozvem sa najneskôr do 24 hodín.'
    trackEvent('contact_form_submitted')
    trackEvent('lead_submit_success', { source: 'contact' })

    form.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budgetRange: '',
      message: ''
    }
    emailValid.value = false
  } catch {
    submitSuccess.value = false
    submitMessage.value = 'Odoslanie sa nepodarilo. Skúste znova alebo napíšte na appinarasolutions@gmail.com.'
    trackEvent('lead_submit_error', { source: 'contact' })
  } finally {
    isSubmitting.value = false
  }
}
</script>
