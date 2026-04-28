import type { H3Event } from 'h3'
import type {
  AiAuditLeadPayload,
  ChatbotLeadPayload,
  ContactLeadPayload,
  LeadAnalysisResult,
  LeadIntakePayload,
  NormalizedLead
} from '~/types/lead'
import { parseChatQualification } from '~/server/utils/chatQualification'
import { analyzeLeadWithMiniMax } from '~/server/utils/minimaxClient'
import { allowRequest } from '~/server/utils/rateLimit'

function clientIp(event: H3Event): string {
  const x = getRequestHeader(event, 'x-forwarded-for')
  if (x) return x.split(',')[0]?.trim() || 'unknown'
  const real = getRequestHeader(event, 'x-real-ip')
  if (real) return real.trim()
  const addr = event.node?.socket?.remoteAddress
  return typeof addr === 'string' ? addr : 'unknown'
}

const EMAIL_JS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0
}

function validEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())
}

function validateContact(body: unknown): ContactLeadPayload | null {
  if (!body || typeof body !== 'object') return null
  const b = body as Record<string, unknown>
  if (b.type !== 'contact') return null

  const hp = b._hp
  if (hp !== undefined && hp !== null && String(hp).trim() !== '') {
    return null
  }

  const contact = b.contact
  if (!contact || typeof contact !== 'object') return null
  const c = contact as Record<string, unknown>

  if (!isNonEmptyString(c.name)) return null
  if (!isNonEmptyString(b.summary)) return null
  if (!isNonEmptyString(b.projectType)) return null
  if (!isNonEmptyString(b.message) || String(b.message).trim().length < 10) return null

  const email = typeof c.email === 'string' ? c.email.trim() : ''
  const phone = typeof c.phone === 'string' ? c.phone.trim() : ''
  if (!email && !phone) return null
  if (email && !validEmail(email)) return null

  return {
    type: 'contact',
    summary: String(b.summary ?? ''),
    contact: {
      name: String(c.name).trim(),
      email: email,
      phone: phone || undefined,
      company: isNonEmptyString(c.company) ? String(c.company).trim() : undefined
    },
    projectType: String(b.projectType).trim(),
    budgetRange: isNonEmptyString(b.budgetRange) ? String(b.budgetRange).trim() : undefined,
    message: String(b.message).trim(),
    _hp: ''
  }
}

function validateAiAudit(body: unknown): AiAuditLeadPayload | null {
  if (!body || typeof body !== 'object') return null
  const b = body as Record<string, unknown>
  if (b.type !== 'ai_audit') return null

  const contact = b.contact
  if (!contact || typeof contact !== 'object') return null
  const c = contact as Record<string, unknown>

  if (!isNonEmptyString(c.name) || !isNonEmptyString(c.email)) return null
  if (!validEmail(String(c.email))) return null
  if (!isNonEmptyString(c.company)) return null
  if (c.consent !== true) return null

  if (!isNonEmptyString(b.summary)) return null
  if (!isNonEmptyString(b.recommendation)) return null
  if (!b.answers || typeof b.answers !== 'object') return null

  return body as AiAuditLeadPayload
}

function validateChatbot(body: unknown): ChatbotLeadPayload | null {
  if (!body || typeof body !== 'object') return null
  const b = body as Record<string, unknown>
  if (b.type !== 'chatbot') return null

  const contact = b.contact
  if (!contact || typeof contact !== 'object') return null
  const c = contact as Record<string, unknown>

  if (!isNonEmptyString(c.name) || !isNonEmptyString(c.email)) return null
  if (!validEmail(String(c.email))) return null

  if (!isNonEmptyString(b.summary)) return null

  const qualification = parseChatQualification(b.qualification)

  return {
    type: 'chatbot',
    summary: String(b.summary),
    contact: {
      name: String(c.name).trim(),
      email: String(c.email).trim(),
      company: isNonEmptyString(c.company) ? String(c.company).trim() : undefined,
      phone: isNonEmptyString(c.phone) ? String(c.phone).trim() : undefined,
      note: isNonEmptyString(c.note) ? String(c.note).trim() : undefined
    },
    need: isNonEmptyString(b.need) ? String(b.need).trim() : undefined,
    chatExcerpt: isNonEmptyString(b.chatExcerpt) ? String(b.chatExcerpt).trim() : undefined,
    qualification
  }
}

function validatePayload(raw: unknown): LeadIntakePayload | null {
  if (!raw || typeof raw !== 'object') return null
  const t = (raw as Record<string, unknown>).type
  if (t === 'contact') return validateContact(raw)
  if (t === 'ai_audit') return validateAiAudit(raw)
  if (t === 'chatbot') return validateChatbot(raw)
  return null
}

/** Honeypot filled — bot; neposielame email */
function isHoneypotContact(raw: unknown): boolean {
  if (!raw || typeof raw !== 'object') return false
  const b = raw as Record<string, unknown>
  if (b.type !== 'contact') return false
  const hp = b._hp
  return hp !== undefined && hp !== null && String(hp).trim() !== ''
}

function toNormalized(payload: LeadIntakePayload): NormalizedLead {
  if (payload.type === 'contact') {
    return {
      source: 'contact',
      contact: payload.contact,
      summary: payload.summary,
      projectType: payload.projectType,
      budgetRange: payload.budgetRange,
      message: payload.message
    }
  }
  if (payload.type === 'ai_audit') {
    return {
      source: 'ai_audit',
      contact: payload.contact,
      summary: payload.summary,
      recommendation: payload.recommendation,
      answers: payload.answers
    }
  }
  return {
    source: 'chatbot',
    contact: payload.contact,
    summary: payload.summary,
    need: payload.need,
    chatExcerpt: payload.chatExcerpt,
    qualification: payload.qualification
  }
}

function analysisToTemplateFields(a: LeadAnalysisResult | null): Record<string, string> {
  if (!a) {
    return {
      ai_summary: '',
      ai_detected_intent: '',
      ai_recommended_service: '',
      ai_priority: '',
      ai_pain_points: '',
      ai_next_best_action: '',
      ai_suggested_reply: '',
      ai_internal_note: ''
    }
  }
  return {
    ai_summary: a.summary,
    ai_detected_intent: a.detectedIntent,
    ai_recommended_service: a.recommendedService,
    ai_priority: a.priority,
    ai_pain_points: a.painPoints.join('; '),
    ai_next_best_action: a.nextBestAction,
    ai_suggested_reply: a.suggestedReply,
    ai_internal_note: a.internalNote
  }
}

export default defineEventHandler(async (event: H3Event) => {
  const ip = clientIp(event)
  if (!allowRequest(`lead:${ip}`, 12, 60_000)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests' })
  }

  const raw = await readBody(event)

  if (isHoneypotContact(raw)) {
    return { ok: true, delivered: [], ignored: true as const }
  }

  const payload = validatePayload(raw)

  if (!payload) {
    throw createError({ statusCode: 400, statusMessage: 'Neplatné údaje formulára' })
  }

  const config = useRuntimeConfig(event)
  const serviceId = String(config.emailjsServiceId ?? '')
  const templateId = String(config.emailjsTemplateId ?? '')
  const publicKey = String(config.emailjsPublicKey ?? '')
  const toEmail =
    String(config.leadRecipientEmail ?? '').trim() || 'appinarasolutions@gmail.com'
  const subjectPrefix = String(config.leadEmailSubjectPrefix ?? '[Appinara Lead]').trim() || '[Appinara Lead]'

  if (!serviceId || !templateId || !publicKey) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Lead intake nie je nakonfigurovaný: nastavte EmailJS (NUXT_EMAILJS_*).'
    })
  }

  const normalized = toNormalized(payload)
  const leadJson = JSON.stringify(payload, null, 2)

  let analysis: LeadAnalysisResult | null = null
  try {
    analysis = await analyzeLeadWithMiniMax(event, normalized.source, normalized, payload.summary)
  } catch {
    analysis = null
  }

  const ai = analysisToTemplateFields(analysis)

  const contact = payload.contact
  const source =
    payload.type === 'contact'
      ? 'contact'
      : payload.type === 'ai_audit'
        ? 'ai_audit'
        : 'chatbot'

  const templateParams: Record<string, string> = {
    subject_prefix: subjectPrefix,
    source,
    lead_json: leadJson,
    message: payload.summary,
    from_name: contact.name,
    from_email: contact.email,
    phone: contact.phone ?? '',
    company: contact.company ?? '',
    project_type:
      payload.type === 'contact'
        ? payload.projectType
        : payload.type === 'ai_audit'
          ? 'ai_audit'
          : 'chatbot',
    budget:
      payload.type === 'contact' ? (payload.budgetRange ?? '') : payload.type === 'ai_audit' ? '' : '',
    to_email: toEmail,
    ...ai
  }

  try {
    const res = await fetch(EMAIL_JS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams
      })
    })

    if (!res.ok) {
      if (import.meta.dev) console.warn('[lead-intake] EmailJS HTTP', res.status)
      throw createError({ statusCode: 502, statusMessage: 'Odoslanie emailu zlyhalo' })
    }
  } catch (e) {
    if (e && typeof e === 'object' && 'statusCode' in e) throw e
    throw createError({ statusCode: 502, statusMessage: 'Odoslanie emailu zlyhalo' })
  }

  return { ok: true, delivered: ['emailjs'] as const }
})
