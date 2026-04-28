<template>
  <section
    id="contact"
    class="relative section-tall bg-bone dark:bg-anthracite overflow-hidden"
  >
    <div class="container mx-auto px-6 relative">
      <div class="max-w-6xl mx-auto">

        <header v-motion-fade-visible class="text-center mb-20 md:mb-28 max-w-3xl mx-auto">
          <span class="block mx-auto mb-10" aria-hidden="true">
            <NuxtImg
              src="/images/decorative/yellow-lines.svg"
              alt=""
              width="80"
              height="22"
              class="inline-block"
            />
          </span>
          <h2 class="font-display font-normal text-display-2xl text-ink-900 dark:text-bone-100 text-balance leading-[0.94]">
            Napíšme <em class="italic font-normal">si</em>.
          </h2>
          <p class="mt-8 text-lg md:text-xl text-ink-700 dark:text-bone-100/80 leading-relaxed text-pretty">
            Stručný popis projektu — ozvem sa do 24 hodín s konkrétnym ďalším krokom.
            Bez záväzkov, bez agentúrneho šumu.
          </p>
        </header>

        <div class="grid md:grid-cols-2 gap-12 lg:gap-20 md:items-start">
          <div v-motion-fade-visible class="md:pt-2">
            <p class="eyebrow mb-7">
              Priamy kontakt
            </p>

            <div class="space-y-5">
              <div v-for="(contact, i) in contactInfo" :key="contact.label" class="flex items-start gap-5" :class="i > 0 ? 'pt-5' : ''">
                <span class="font-mono text-[10px] tracking-mono-wide uppercase text-ink-500 dark:text-ink-300 pt-1 w-20 shrink-0">
                  {{ contact.label }}
                </span>
                <a
                  v-if="contact.href"
                  :href="contact.href"
                  class="text-ink-900 dark:text-bone-100 font-display text-2xl md:text-3xl leading-tight hover:underline underline-offset-4 decoration-ink-300 decoration-1 transition-colors"
                >
                  {{ contact.value }}
                </a>
                <span v-else class="text-ink-900 dark:text-bone-100 font-display text-2xl md:text-3xl leading-tight">{{ contact.value }}</span>
              </div>
            </div>

            <p class="mt-10 font-mono text-[11px] tracking-mono-wide uppercase text-ink-500 dark:text-ink-300 max-w-xs leading-relaxed">
              Najradšej riešim do 24 hodín. Píšete priamo so mnou — žiadny manažér medzi nami.
            </p>
          </div>

          <div v-motion-fade-visible :delay="200">
            <p class="eyebrow mb-7">
              Formulár
            </p>
            <form
              class="relative border border-mist dark:border-anthracite-mist bg-bone-50 dark:bg-anthracite-elev p-6 md:p-9 space-y-5"
              novalidate
              @submit.prevent="handleSubmit"
            >
              <div class="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                <label for="website">Website</label>
                <input id="website" v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
              </div>

              <div>
                <label for="name" class="block font-mono text-[10px] uppercase tracking-mono-wide text-ink-500 dark:text-ink-300 mb-2">
                  Meno *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="input-app"
                  :class="{ 'border-ink-900 dark:border-bone-100': nameError }"
                  placeholder="Vaše meno"
                  aria-label="Vaše meno"
                  autocomplete="name"
                />
                <p v-if="nameError" class="text-xs text-ink-900 dark:text-bone-100 mt-1.5">{{ nameError }}</p>
              </div>

              <div>
                <label for="email" class="block font-mono text-[10px] uppercase tracking-mono-wide text-ink-500 dark:text-ink-300 mb-2">
                  Email <span class="normal-case">(alebo telefón nižšie)</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="input-app"
                  placeholder="vas@email.com"
                  aria-label="Váš email"
                  autocomplete="email"
                  @blur="validateEmailField"
                />
                <p
                  class="text-xs mt-1.5"
                  :class="emailError ? 'text-ink-900 dark:text-bone-100' : 'text-ink-500 dark:text-ink-300'"
                >
                  {{ emailError || (emailValid ? 'Email vyzerá v poriadku' : 'Stačí email alebo telefón') }}
                </p>
              </div>

              <div>
                <label for="phone" class="block font-mono text-[10px] uppercase tracking-mono-wide text-ink-500 dark:text-ink-300 mb-2">
                  Telefón <span class="normal-case">(voliteľné)</span>
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="input-app"
                  placeholder="+421 XXX XXX XXX"
                  aria-label="Váš telefón"
                  autocomplete="tel"
                />
              </div>

              <div>
                <label for="company" class="block font-mono text-[10px] uppercase tracking-mono-wide text-ink-500 dark:text-ink-300 mb-2">
                  Firma <span class="normal-case">(voliteľné)</span>
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
                <label for="project" class="block font-mono text-[10px] uppercase tracking-mono-wide text-ink-500 dark:text-ink-300 mb-2">
                  Typ projektu *
                </label>
                <select
                  id="project"
                  v-model="form.projectType"
                  required
                  class="input-app"
                  aria-label="Typ projektu"
                >
                  <option value="">Vyberte typ</option>
                  <option value="ai-integration">AI / chatbot / automatizácia</option>
                  <option value="web-app">Web / aplikácia</option>
                  <option value="ecommerce">E‑shop</option>
                  <option value="business-tool">Interný nástroj / dashboard</option>
                  <option value="other">Iné</option>
                </select>
                <p class="text-xs mt-1.5 text-ink-500 dark:text-ink-300">
                  {{ projectTypeError || 'Stručne mi pomôže zacieliť odpoveď' }}
                </p>
              </div>

              <div>
                <label for="budget" class="block font-mono text-[10px] uppercase tracking-mono-wide text-ink-500 dark:text-ink-300 mb-2">
                  Rozpočet <span class="normal-case">(voliteľné)</span>
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
                <label for="message" class="block font-mono text-[10px] uppercase tracking-mono-wide text-ink-500 dark:text-ink-300 mb-2">
                  Správa *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  maxlength="1000"
                  class="input-app resize-none"
                  placeholder="Čo chcete zlepšiť a čo by malo byť výsledkom…"
                  aria-label="Vaša správa"
                />
                <p class="text-xs mt-1.5 flex justify-between gap-2 text-ink-500 dark:text-ink-300">
                  <span>{{ messageError || 'Aspoň 10 znakov' }}</span>
                  <span class="flex-shrink-0">{{ form.message.length }}/1000</span>
                </p>
              </div>

              <button type="submit" class="w-full btn-primary justify-center" :disabled="isSubmitting">
                {{ isSubmitting ? 'Odosielam…' : 'Odoslať' }}
              </button>

              <div
                v-if="submitMessage"
                class="border border-mist dark:border-anthracite-mist p-4 text-sm text-ink-900 dark:text-bone-100"
                role="status"
              >
                {{ submitMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatContactSummary, submitLeadIntake } from '~/services/leadIntake'

const { trackEvent } = useAnalytics()

const contactInfo = [
  { label: 'Email', value: 'appinarasolutions@gmail.com', href: 'mailto:appinarasolutions@gmail.com' },
  { label: 'Telefón', value: '+421 917 566 722', href: 'tel:+421917566722' },
  { label: 'Lokácia', value: 'Slovensko', href: null as string | null }
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
