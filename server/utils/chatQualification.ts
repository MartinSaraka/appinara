import type { ChatCompanySegment, ChatInquiryChannel, ChatQualificationTags } from '~/types/lead'

export const CHAT_SEGMENTS: ChatCompanySegment[] = [
  'sluzby_prevadzka',
  'obchod_b2b',
  'vyroba_logistika',
  'ine'
]

export const CHAT_CHANNELS: ChatInquiryChannel[] = [
  'web_formular',
  'email',
  'telefon_messenger',
  'social',
  'viac_kanalov',
  'ine'
]

export function parseChatQualification(raw: unknown): ChatQualificationTags | undefined {
  if (!raw || typeof raw !== 'object') return undefined
  const q = raw as Record<string, unknown>
  const out: ChatQualificationTags = {}
  if (typeof q.companySegment === 'string' && (CHAT_SEGMENTS as string[]).includes(q.companySegment)) {
    out.companySegment = q.companySegment as ChatCompanySegment
  }
  if (typeof q.inquiryChannel === 'string' && (CHAT_CHANNELS as string[]).includes(q.inquiryChannel)) {
    out.inquiryChannel = q.inquiryChannel as ChatInquiryChannel
  }
  if (!out.companySegment && !out.inquiryChannel) return undefined
  return out
}
