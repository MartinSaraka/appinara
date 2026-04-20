<template>
  <section id="contact" class="relative py-24 md:py-32 dark:bg-slate-950 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div v-motion-fade-visible>
            <h2 class="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white text-gray-900">
              Napíšte mi
              <span class="gradient-text block">o projekte</span>
            </h2>
            <p class="text-lg dark:text-slate-200 text-gray-700 mb-8 leading-relaxed">
              Čím konkrétnejší popis, tým presnejšie viem navrhnúť ďalší postup. Ozvem sa s návrhom riešenia — prvá orientácia je nezáväzná.
            </p>

            <div class="space-y-6">
              <div
                v-for="c in contactInfo"
                :key="c.label"
                class="flex items-center gap-4"
              >
                <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <component :is="c.icon" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <div class="text-sm dark:text-slate-400 text-gray-600">{{ c.label }}</div>
                  <a :href="c.href" class="dark:text-white text-gray-900 font-medium dark:hover:text-primary-400 hover:text-primary-600 transition-colors">
                    {{ c.value }}
                  </a>
                </div>
              </div>
            </div>

            <div class="flex gap-4 mt-8">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-primary-500/10 dark:hover:bg-primary-500/20 transition-all duration-300 hover:scale-110"
                :aria-label="social.name"
              >
                <component :is="social.icon" class="w-6 h-6 dark:text-slate-300 text-gray-600" />
              </a>
            </div>
          </div>

          <div v-motion-fade-visible :delay="200">
            <form class="glass-effect rounded-2xl p-8 space-y-5" novalidate @submit.prevent="handleSubmit">
              <div>
                <label for="contact-name" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-1">Meno <span class="text-red-400">*</span></label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  autocomplete="name"
                  class="w-full px-4 py-3 dark:bg-slate-900/50 bg-white dark:border-slate-700 border border-gray-300 rounded-xl dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  :class="{ 'border-red-500': showErrors && !form.name.trim() }"
                  placeholder="Vaše meno"
                />
              </div>

              <div>
                <label for="contact-email" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-1">Email <span class="text-red-400">*</span></label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  class="w-full px-4 py-3 dark:bg-slate-900/50 bg-white dark:border-slate-700 border border-gray-300 rounded-xl dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  :class="{ 'border-red-500': showErrors && !emailValid }"
                  placeholder="vas@email.com"
                  @blur="validateEmail"
                />
                <p v-if="emailError" class="text-xs text-red-400 mt-1">{{ emailError }}</p>
              </div>

              <div>
                <label for="contact-company" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-1">Firma <span class="text-red-400">*</span></label>
                <input
                  id="contact-company"
                  v-model="form.company"
                  type="text"
                  autocomplete="organization"
                  class="w-full px-4 py-3 dark:bg-slate-900/50 bg-white dark:border-slate-700 border border-gray-300 rounded-xl dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  :class="{ 'border-red-500': showErrors && !form.company.trim() }"
                  placeholder="Názov firmy alebo živnosti"
                />
              </div>

              <div>
                <label for="contact-phone" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-1">Telefón <span class="text-slate-500">(voliteľné)</span></label>
                <input
                  id="contact-phone"
                  v-model="form.phone"
                  type="tel"
                  autocomplete="tel"
                  class="w-full px-4 py-3 dark:bg-slate-900/50 bg-white dark:border-slate-700 border border-gray-300 rounded-xl dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="+421 XXX XXX XXX"
                />
              </div>

              <div>
                <label for="contact-project" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-1">Typ projektu <span class="text-red-400">*</span></label>
                <select
                  id="contact-project"
                  v-model="form.projectType"
                  class="w-full px-4 py-3 dark:bg-slate-900/50 bg-white dark:border-slate-700 border border-gray-300 rounded-xl dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  :class="{ 'border-red-500': showErrors && !form.projectType }"
                >
                  <option value="">Vyberte typ</option>
                  <option value="ai-lead-followup">AI lead follow-up</option>
                  <option value="ai-chatbot">AI chatbot / komunikácia</option>
                  <option value="web-aplikacia">Web alebo aplikácia</option>
                  <option value="dashboard-interny">Dashboard / interný nástroj</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="ine">Iné / ešte neviem</option>
                </select>
              </div>

              <div>
                <label for="contact-budget" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-1">Rozpočet alebo rozsah <span class="text-red-400">*</span></label>
                <select
                  id="contact-budget"
                  v-model="form.budgetRange"
                  class="w-full px-4 py-3 dark:bg-slate-900/50 bg-white dark:border-slate-700 border border-gray-300 rounded-xl dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  :class="{ 'border-red-500': showErrors && !form.budgetRange }"
                >
                  <option value="">Vyberte rozmer</option>
                  <option value="do-500">Do 500 €</option>
                  <option value="500-1500">500 až 1500 €</option>
                  <option value="1500-5000">1500 až 5000 €</option>
                  <option value="5000plus">5000 €+</option>
                  <option value="neviem">Neviem zatiaľ</option>
                </select>
              </div>

              <div>
                <label for="contact-message" class="block text-sm font-medium dark:text-slate-300 text-gray-700 mb-1">Správa <span class="text-red-400">*</span></label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  rows="4"
                  maxlength="1000"
                  class="w-full px-4 py-3 dark:bg-slate-900/50 bg-white dark:border-slate-700 border border-gray-300 rounded-xl dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  :class="{ 'border-red-500': showErrors && messageInvalid }"
                  placeholder="Stručne popíšte, čo chcete zlepšiť alebo automatizovať."
                  aria-describedby="contact-message-hint"
                />
                <p id="contact-message-hint" class="text-xs dark:text-slate-400 text-gray-600 mt-1 flex justify-between">
                  <span>Čím konkrétnejší popis, tým presnejšie viem navrhnúť ďalší postup.</span>
                  <span>{{ form.message.length }}/1000</span>
                </p>
              </div>

              <button type="submit" class="w-full btn-primary text-center" :disabled="isSubmitting">
                {{ isSubmitting ? 'Odosielam…' : 'Odoslať správu' }}
              </button>

              <p
                v-if="submitMessage"
                role="alert"
                class="text-center text-sm"
                :class="submitSuccess ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'"
              >
                {{ submitMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, h } from 'vue'
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
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }),
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })
  ])

const LinkedInIcon = () =>
  h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    })
  ])

const contactInfo = [
  { label: 'Email', value: 'appinarasolutions@gmail.com', href: 'mailto:appinarasolutions@gmail.com', icon: EmailIcon },
  { label: 'Telefón', value: '+421 917 566 722', href: 'tel:+421917566722', icon: PhoneIcon },
  { label: 'Lokácia', value: 'Slovensko', href: '#contact', icon: LocationIcon }
]

const socialLinks = [{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/appinara/', icon: LinkedInIcon }]

const form = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  projectType: '',
  budgetRange: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const showErrors = ref(false)
const emailError = ref('')

const emailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email.trim()))

const messageInvalid = computed(() => form.value.message.trim().length < 10)

function validateEmail() {
  if (!form.value.email.trim()) {
    emailError.value = ''
    return
  }
  emailError.value = emailValid.value ? '' : 'Neplatná emailová adresa'
}

function projectTypeLabel(v: string): string {
  const map: Record<string, string> = {
    'ai-lead-followup': 'AI lead follow-up',
    'ai-chatbot': 'AI chatbot / komunikácia',
    'web-aplikacia': 'Web alebo aplikácia',
    'dashboard-interny': 'Dashboard / interný nástroj',
    ecommerce: 'E-commerce',
    ine: 'Iné / ešte neviem'
  }
  return map[v] ?? v
}

function budgetLabel(v: string): string {
  const map: Record<string, string> = {
    'do-500': 'Do 500 €',
    '500-1500': '500 až 1500 €',
    '1500-5000': '1500 až 5000 €',
    '5000plus': '5000 €+',
    neviem: 'Neviem zatiaľ'
  }
  return map[v] ?? v
}

async function handleSubmit() {
  showErrors.value = true
  submitMessage.value = ''
  emailError.value = ''

  if (!form.value.name.trim() || !emailValid.value || !form.value.company.trim()) {
    submitMessage.value = 'Vyplňte meno, platný email a firmu.'
    submitSuccess.value = false
    return
  }

  if (!form.value.projectType || !form.value.budgetRange || messageInvalid.value) {
    submitMessage.value = 'Vyberte typ projektu a rozpočet, správa musí mať aspoň 10 znakov.'
    submitSuccess.value = false
    return
  }

  isSubmitting.value = true

  const summary = formatContactSummary({
    name: form.value.name.trim(),
    email: form.value.email.trim(),
    phone: form.value.phone.trim() || undefined,
    company: form.value.company.trim(),
    projectType: projectTypeLabel(form.value.projectType),
    budgetRange: budgetLabel(form.value.budgetRange),
    message: form.value.message.trim()
  })

  try {
    await submitLeadIntake({
      type: 'contact',
      summary,
      contact: {
        name: form.value.name.trim(),
        email: form.value.email.trim(),
        company: form.value.company.trim(),
        phone: form.value.phone.trim() || undefined
      },
      projectType: form.value.projectType,
      budgetRange: form.value.budgetRange,
      message: form.value.message.trim()
    })
    trackEvent('contact_form_submitted')
    submitSuccess.value = true
    submitMessage.value = 'Správa bola odoslaná. Ozvem sa čo najskôr.'
    showErrors.value = false
    form.value = {
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      budgetRange: '',
      message: ''
    }
    setTimeout(() => {
      submitMessage.value = ''
    }, 8000)
  } catch (e) {
    console.error(e)
    submitSuccess.value = false
    submitMessage.value = 'Odoslanie zlyhalo. Skúste znova alebo napíšte priamo na email.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
