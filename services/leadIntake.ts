export type LeadContact = {
  name: string
  email: string
  phone?: string
  company?: string
}

export type LeadPayload = {
  type: 'contact' | 'audit'
  summary: string
  contact: LeadContact
  projectType?: string
  budgetRange?: string
  message: string
  _hp?: string
}

export function formatContactSummary(input: {
  name: string
  email: string
  phone?: string
  company?: string
  projectType: string
  budgetRange?: string
  message: string
}): string {
  const lines = [
    `Meno: ${input.name}`,
    input.email ? `Email: ${input.email}` : null,
    input.phone ? `Telefón: ${input.phone}` : null,
    input.company ? `Firma: ${input.company}` : null,
    `Typ projektu: ${input.projectType}`,
    input.budgetRange ? `Rozpočet: ${input.budgetRange}` : null,
    '',
    'Správa:',
    input.message
  ].filter((l): l is string => l !== null)
  return lines.join('\n')
}

export async function submitLeadIntake(payload: LeadPayload): Promise<void> {
  await $fetch('/api/lead', {
    method: 'POST',
    body: payload
  })
}
