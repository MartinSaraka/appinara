<template>
  <section id="contact" class="relative section-tall border-t" style="border-color: var(--color-rule); background: var(--color-bg);">
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="grid md:grid-cols-12 gap-10 md:gap-16">
        <!-- Left -->
        <div class="md:col-span-5">
          <p class="folio mb-6">№ 09 / Kontakt</p>
          <h2 class="font-display text-display-lg font-medium tracking-tight mb-8 text-balance leading-[1.0]" style="color: var(--color-fg);">
            Napíšte krátky popis —
            <span class="accent-italic">odpovedám do dvoch dní.</span>
          </h2>
          <p class="text-base md:text-[17px] leading-relaxed mb-10 text-pretty" style="color: var(--color-fg-muted);">
            Nemusíte mať pripravený brief ani špecifikáciu. Stačí dve-tri vety o tom, čo riešite — návrh ďalšieho kroku pošlem mailom.
          </p>

          <ul class="border-t" style="border-color: var(--color-rule);">
            <li v-for="contact in contactInfo" :key="contact.label" class="flex items-baseline gap-6 py-4 border-b" style="border-color: var(--color-rule-soft);">
              <span class="folio shrink-0 w-20" style="color: var(--color-fg-meta);">{{ contact.label }}</span>
              <a
                v-if="contact.href !== '#'"
                :href="contact.href"
                class="font-display text-lg md:text-xl font-medium hover:underline underline-offset-4"
                style="color: var(--color-fg); text-decoration-color: var(--color-accent);"
              >
                {{ contact.value }}
              </a>
              <span v-else class="font-display text-lg font-medium" style="color: var(--color-fg);">
                {{ contact.value }}
              </span>
            </li>
          </ul>

          <div class="flex gap-3 mt-8">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-11 h-11 inline-flex items-center justify-center border transition-all hover:bg-vermilion-500 hover:text-white"
              style="border-color: var(--color-fg); color: var(--color-fg);"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Right — form -->
        <div class="md:col-span-7">
          <form
            @submit.prevent="handleSubmit"
            class="border p-7 md:p-10"
            :style="{ borderColor: 'var(--color-rule)', background: 'var(--color-bg-subtle)' }"
            novalidate
          >
            <div class="flex items-baseline justify-between mb-7 pb-4 border-b" style="border-color: var(--color-rule);">
              <span class="folio">Form / 001</span>
              <span class="folio">Polia · 4</span>
            </div>

            <div class="space-y-6">
              <div>
                <label for="name" class="folio block mb-2">01 — Meno</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none focus:border-vermilion-500 transition-colors font-display text-lg"
                  :style="{ borderColor: 'var(--color-fg)', color: 'var(--color-fg)' }"
                  placeholder="Vaše meno"
                  aria-label="Vaše meno"
                />
              </div>

              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="folio block mb-2">02 — Email</label>
                  <input
                    id="email"
                    v-model="form.email"
                    @blur="validateEmail"
                    type="email"
                    class="w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none focus:border-vermilion-500 transition-colors font-display text-lg"
                    :style="{ borderColor: emailError ? 'var(--color-accent)' : 'var(--color-fg)', color: 'var(--color-fg)' }"
                    placeholder="vas@email.sk"
                    aria-label="Váš email"
                    aria-describedby="email-helper"
                  />
                  <p id="email-helper" class="text-[11px] mt-1.5 font-mono uppercase" style="letter-spacing:0.14em" :style="{ color: emailError ? 'var(--color-accent)' : 'var(--color-fg-meta)' }">
                    {{ emailError || 'Pre spätnú komunikáciu' }}
                  </p>
                </div>

                <div>
                  <label for="phone" class="folio block mb-2">03 — Telefón <span class="opacity-60">(voliteľné)</span></label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none focus:border-vermilion-500 transition-colors font-display text-lg"
                    :style="{ borderColor: 'var(--color-fg)', color: 'var(--color-fg)' }"
                    placeholder="+421 …"
                    aria-label="Váš telefón"
                  />
                </div>
              </div>

              <div>
                <label for="project" class="folio block mb-2">04 — Typ projektu <span style="color: var(--color-accent)">*</span></label>
                <select
                  id="project"
                  v-model="form.projectType"
                  required
                  class="w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none focus:border-vermilion-500 transition-colors font-display text-lg appearance-none cursor-pointer"
                  :style="{ borderColor: projectTypeError ? 'var(--color-accent)' : 'var(--color-fg)', color: 'var(--color-fg)' }"
                  aria-label="Typ projektu"
                >
                  <option value="">— Vyberte typ projektu —</option>
                  <option value="ai-integration">AI integrácia / chatbot</option>
                  <option value="web-app">Web alebo landing page</option>
                  <option value="ecommerce">E-shop</option>
                  <option value="business-tool">Interný nástroj alebo dashboard</option>
                  <option value="custom">Custom — niečo iné</option>
                  <option value="other">Iné</option>
                </select>
                <p v-if="projectTypeError" class="text-[11px] mt-1.5 font-mono uppercase" style="letter-spacing:0.14em; color: var(--color-accent);">
                  {{ projectTypeError }}
                </p>
              </div>

              <div>
                <label for="message" class="folio block mb-2">05 — Krátky popis <span style="color: var(--color-accent)">*</span></label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 border-2 bg-transparent focus:outline-none focus:border-vermilion-500 transition-colors text-[15px] resize-none"
                  :style="{ borderColor: messageError ? 'var(--color-accent)' : 'var(--color-fg)', color: 'var(--color-fg)' }"
                  placeholder="V akej situácii ste a čo by ste potrebovali. Pokojne stručne — doptám sa."
                  aria-label="Vaša správa"
                  maxlength="1000"
                ></textarea>
                <p class="text-[11px] mt-1.5 font-mono uppercase flex justify-between" style="letter-spacing:0.14em" :style="{ color: messageError ? 'var(--color-accent)' : 'var(--color-fg-meta)' }">
                  <span>{{ messageError || 'Čím viac kontextu, tým presnejší návrh' }}</span>
                  <span>{{ form.message.length }}/1000</span>
                </p>
              </div>
            </div>

            <button
              type="submit"
              class="mt-8 btn-primary w-full justify-center"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Odosielam…' : 'Odoslať →' }}
            </button>

            <p
              v-if="submitMessage"
              class="text-center text-[12px] font-mono uppercase mt-4"
              style="letter-spacing:0.16em"
              :style="{ color: submitSuccess ? 'var(--color-success)' : 'var(--color-accent)' }"
              role="alert"
            >
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import emailjs from '@emailjs/browser'

const EmailIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
])

const PhoneIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' })
])

const LinkedInIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' })
])

const contactInfo = [
  { label: 'Email',   value: 'appinarasolutions@gmail.com', href: 'mailto:appinarasolutions@gmail.com', icon: EmailIcon },
  { label: 'Telefón', value: '+421 917 566 722',            href: 'tel:+421917566722',                  icon: PhoneIcon },
  { label: 'Sídlo',   value: 'Slovensko · vzdialene + bratislavské stretnutia', href: '#', icon: null }
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/appinara/', icon: LinkedInIcon }
]

const form = ref({ name: '', email: '', phone: '', projectType: '', message: '' })
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const validationError = ref(false)
const emailError = ref('')
const projectTypeError = ref('')
const messageError = ref('')

const validateEmail = () => {
  if (!form.value.email) { emailError.value = ''; return }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  emailError.value = emailRegex.test(form.value.email) ? '' : 'Neplatná emailová adresa'
}

const handleSubmit = async () => {
  validationError.value = false
  emailError.value = ''
  projectTypeError.value = ''
  messageError.value = ''

  if (!form.value.email && !form.value.phone) {
    validationError.value = true
    submitMessage.value = 'Vyplňte aspoň email alebo telefón.'
    submitSuccess.value = false
    setTimeout(() => { submitMessage.value = '' }, 5000)
    return
  }

  if (form.value.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email)) {
      emailError.value = 'Neplatná emailová adresa'
      submitMessage.value = 'Skontrolujte vyplnené údaje.'
      submitSuccess.value = false
      return
    }
  }

  if (!form.value.projectType) {
    projectTypeError.value = 'Vyberte typ projektu'
    submitMessage.value = 'Skontrolujte vyplnené údaje.'
    submitSuccess.value = false
    return
  }

  if (!form.value.message || form.value.message.trim().length < 10) {
    messageError.value = 'Popis musí mať aspoň 10 znakov'
    submitMessage.value = 'Skontrolujte vyplnené údaje.'
    submitSuccess.value = false
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const serviceId = 'service_is1zj0v'
    const templateId = 'template_xjtb39p'
    const publicKey = 'OkHjN5RiYSgxDL-5S'

    const templateParams = {
      from_name: form.value.name,
      from_email: form.value.email,
      phone: form.value.phone,
      project_type: form.value.projectType,
      message: form.value.message,
      to_email: 'appinarasolutions@gmail.com'
    }

    await emailjs.send(serviceId, templateId, templateParams, publicKey)

    isSubmitting.value = false
    submitSuccess.value = true
    submitMessage.value = 'Odoslané. Ozvem sa do dvoch pracovných dní.'
    form.value = { name: '', email: '', phone: '', projectType: '', message: '' }
    setTimeout(() => { submitMessage.value = '' }, 5000)
  } catch (error) {
    console.error('EmailJS Error:', error)
    isSubmitting.value = false
    submitSuccess.value = false
    submitMessage.value = 'Nepodarilo sa odoslať. Skúste prosím znova alebo napíšte priamo na email.'
    setTimeout(() => { submitMessage.value = '' }, 7000)
  }
}
</script>
