export type AuditAnswers = {
  firmType: string
  chaos: string
  solutionInterest: string
  budget: string
}

export type RecommendationId = 'lead_followup' | 'chatbot' | 'custom_build' | 'consultation'

export interface AuditRecommendation {
  id: RecommendationId
  title: string
  description: string
}

const outcomes: Record<RecommendationId, Omit<AuditRecommendation, 'id'>> = {
  lead_followup: {
    title: 'AI lead follow-up',
    description:
      'Na základe vašich odpovedí dáva najväčší zmysel automatizovať príchod dopytov, kvalifikáciu a rýchlejšie prvé odpovede — aby ste nestrácali obchodné príležitosti.'
  },
  chatbot: {
    title: 'AI chatbot a komunikácia',
    description:
      'Vyzerá to, že najviac získate zvládnutím opakujúcich sa otázok, prvého kontaktu a predkvalifikácie cez chat alebo asistenta na webe.'
  },
  custom_build: {
    title: 'Web, aplikácia alebo dashboard na mieru',
    description:
      'Váš cieľ je silno previazaný s webom, aplikáciou alebo interným nástrojom — oplatí sa navrhnúť konkrétne riešenie a napojiť ho na vaše procesy.'
  },
  consultation: {
    title: 'Krátka konzultácia a návrh riešenia',
    description:
      'Z odpovedí je zatiaľ viacero smerov. Najrozumnejší ďalší krok je krátky call, kde spresníme prioritu a navrhnem najvhodnejší postup.'
  }
}

export function computeAiAuditRecommendation(a: AuditAnswers): AuditRecommendation {
  const { solutionInterest, chaos } = a

  if (solutionInterest === 'ai-lead-followup') {
    return { id: 'lead_followup', ...outcomes.lead_followup }
  }
  if (solutionInterest === 'ai-chatbot') {
    return { id: 'chatbot', ...outcomes.chatbot }
  }
  if (solutionInterest === 'web-aplikacia' || solutionInterest === 'dashboard-interny') {
    return { id: 'custom_build', ...outcomes.custom_build }
  }

  if (chaos === 'emaily' || chaos === 'formular') {
    return { id: 'lead_followup', ...outcomes.lead_followup }
  }
  if (chaos === 'social-chat') {
    return { id: 'chatbot', ...outcomes.chatbot }
  }
  if (chaos === 'interna-koordinacia' || chaos === 'neprehladne-procesy') {
    return { id: 'custom_build', ...outcomes.custom_build }
  }

  return { id: 'consultation', ...outcomes.consultation }
}
