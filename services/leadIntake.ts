import type {
  AiAuditLeadPayload,
  ChatbotLeadPayload,
  ChatQualificationTags,
  ContactLeadPayload,
  LeadContactFields,
  LeadIntakePayload
} from '~/types/lead'

export type {
  AiAuditLeadPayload,
  ChatbotLeadPayload,
  ChatQualificationTags,
  ContactLeadPayload,
  LeadAnalysisResult,
  LeadContactFields,
  LeadIntakePayload,
  LeadSourceType,
  NormalizedLead
} from '~/types/lead'

export function formatContactSummary(p: {
  name: string
  email: string
  phone?: string
  company?: string
  projectType: string
  budgetRange?: string
  message: string
}): string {
  const lines = [
    `[Kontaktný formulár]`,
    `Meno: ${p.name}`,
    p.email ? `Email: ${p.email}` : null,
    p.phone ? `Telefón: ${p.phone}` : null,
    p.company ? `Firma: ${p.company}` : null,
    `Typ projektu: ${p.projectType}`,
    p.budgetRange ? `Rozpočet / rozsah: ${p.budgetRange}` : null,
    `Správa:\n${p.message}`
  ].filter(Boolean)
  return lines.join('\n')
}

export function formatAiAuditSummary(p: {
  answers: Record<string, string>
  recommendation: string
  contact: LeadContactFields
}): string {
  const answerLines = Object.entries(p.answers).map(([k, v]) => `${k}: ${v}`)
  return [
    `[AI audit]`,
    `Odporúčanie: ${p.recommendation}`,
    '',
    'Odpovede:',
    ...answerLines,
    '',
    'Kontakt:',
    `Meno: ${p.contact.name}`,
    `Email: ${p.contact.email}`,
    p.contact.company ? `Firma: ${p.contact.company}` : null,
    p.contact.phone ? `Telefón: ${p.contact.phone}` : null,
    p.contact.note ? `Poznámka:\n${p.contact.note}` : null
  ]
    .filter(Boolean)
    .join('\n')
}

const SEGMENT_LABEL: Record<string, string> = {
  sluzby_prevadzka: 'Služby / prevádzka',
  obchod_b2b: 'Obchod B2B',
  vyroba_logistika: 'Výroba / logistika',
  ine: 'Iné'
}

const CHANNEL_LABEL: Record<string, string> = {
  web_formular: 'Web / formulár',
  email: 'Email',
  telefon_messenger: 'Telefón / messenger',
  social: 'Sociálne siete',
  viac_kanalov: 'Viac kanálov',
  ine: 'Iné'
}

function qualificationLines(q?: ChatQualificationTags): string[] {
  if (!q) return []
  const out: string[] = []
  if (q.companySegment) {
    out.push(`Typ firmy (tag): ${SEGMENT_LABEL[q.companySegment] ?? q.companySegment}`)
  }
  if (q.inquiryChannel) {
    out.push(`Kanál dopytov (tag): ${CHANNEL_LABEL[q.inquiryChannel] ?? q.inquiryChannel}`)
  }
  return out
}

export function formatChatbotLeadSummary(p: {
  contact: LeadContactFields
  need?: string
  chatExcerpt?: string
  qualification?: ChatQualificationTags
}): string {
  const lines = [
    `[Chatbot — lead]`,
    ...qualificationLines(p.qualification),
    `Meno: ${p.contact.name}`,
    `Email: ${p.contact.email}`,
    p.contact.company ? `Firma: ${p.contact.company}` : null,
    p.contact.phone ? `Telefón: ${p.contact.phone}` : null,
    p.need ? `Potreba / problém:\n${p.need}` : null,
    p.chatExcerpt ? `Skrátená konverzácia:\n${p.chatExcerpt}` : null
  ].filter(Boolean)
  return lines.join('\n')
}

export async function submitLeadIntake(payload: LeadIntakePayload): Promise<{ ok: boolean }> {
  await $fetch('/api/lead-intake', {
    method: 'POST',
    body: payload
  })
  return { ok: true }
}
