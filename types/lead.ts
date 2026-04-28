/** Lead source for unified pipeline */
export type LeadSourceType = 'contact' | 'ai_audit' | 'chatbot'

/** Krátka kvalifikácia z chatu Frondo (tagy pre CRM / email) */
export type ChatCompanySegment = 'sluzby_prevadzka' | 'obchod_b2b' | 'vyroba_logistika' | 'ine'

export type ChatInquiryChannel =
  | 'web_formular'
  | 'email'
  | 'telefon_messenger'
  | 'social'
  | 'viac_kanalov'
  | 'ine'

export interface ChatQualificationTags {
  companySegment?: ChatCompanySegment
  inquiryChannel?: ChatInquiryChannel
}

export interface LeadContactFields {
  name: string
  email: string
  company?: string
  phone?: string
  note?: string
  consent?: boolean
}

/** MiniMax lead analysis (structured) */
export interface LeadAnalysisResult {
  summary: string
  detectedIntent: string
  recommendedService: string
  priority: 'low' | 'medium' | 'high' | string
  painPoints: string[]
  nextBestAction: string
  suggestedReply: string
  internalNote: string
}

export interface ContactLeadPayload {
  type: 'contact'
  summary: string
  contact: LeadContactFields
  projectType: string
  budgetRange?: string
  message: string
  /** Anti-spam: must be empty */
  _hp?: string
}

export interface AiAuditLeadPayload {
  type: 'ai_audit'
  summary: string
  recommendation: string
  answers: Record<string, string>
  contact: LeadContactFields
}

export interface ChatbotLeadPayload {
  type: 'chatbot'
  summary: string
  contact: LeadContactFields
  /** Short problem statement from capture flow */
  need?: string
  /** Truncated conversation for context */
  chatExcerpt?: string
  /** Voliteľné tagy z kroku „typ firmy / kanál dopytov“ */
  qualification?: ChatQualificationTags
}

export type LeadIntakePayload = ContactLeadPayload | AiAuditLeadPayload | ChatbotLeadPayload

/** Server-side normalized shape for email + AI fields */
export interface NormalizedLead {
  source: LeadSourceType
  contact: LeadContactFields
  summary: string
  projectType?: string
  budgetRange?: string
  message?: string
  recommendation?: string
  answers?: Record<string, string>
  need?: string
  chatExcerpt?: string
  qualification?: ChatQualificationTags
}
