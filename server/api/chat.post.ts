import type { H3Event } from 'h3'
import { chatWithMiniMax, type ChatTurn } from '~/server/utils/minimaxClient'
import { parseChatQualification } from '~/server/utils/chatQualification'
import { allowRequest } from '~/server/utils/rateLimit'

function clientIp(event: H3Event): string {
  const x = getRequestHeader(event, 'x-forwarded-for')
  if (x) return x.split(',')[0]?.trim() || 'unknown'
  const real = getRequestHeader(event, 'x-real-ip')
  if (real) return real.trim()
  const addr = event.node?.socket?.remoteAddress
  return typeof addr === 'string' ? addr : 'unknown'
}

function looksSlovak(text: string): boolean {
  return /[áäčďéíĺľňóôŕšťúýžÁÄČĎÉÍĹĽŇÓÔŔŠŤÚÝŽ]/.test(text)
}

function fallbackReply(userMessage: string): { reply: string; suggestLeadCapture: boolean } {
  const sk = looksSlovak(userMessage) || !/[a-zA-Z]{4,}/.test(userMessage)
  if (sk) {
    return {
      reply:
        'Ahoj, som Frondo z Appinara — viem poradiť s AI chatbotmi, follow-upom, webmi a auditom. ' +
        'Ak chcete konkrétnejší návrh, otvorte AI audit na stránke alebo napíšte cez kontaktný formulár.',
      suggestLeadCapture: false
    }
  }
  return {
    reply:
      "Hi — I'm Frondo from Appinara. I can help with AI chatbots, lead follow-up, web apps, and our AI audit. " +
      'For a tailored suggestion, use the AI audit page or the contact form.',
    suggestLeadCapture: false
  }
}

export default defineEventHandler(async (event: H3Event) => {
  if (getMethod(event) !== 'POST') {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
  }

  const ip = clientIp(event)
  if (!allowRequest(`chat:${ip}`, 24, 60_000)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests' })
  }

  const body = await readBody(event)
  if (!body || typeof body !== 'object') {
    throw createError({ statusCode: 400, statusMessage: 'Invalid body' })
  }

  const msg = typeof (body as Record<string, unknown>).message === 'string' ? (body as Record<string, unknown>).message as string : ''
  const trimmed = msg.trim()
  if (!trimmed || trimmed.length > 8000) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid message' })
  }

  const historyRaw = (body as Record<string, unknown>).history
  const history: ChatTurn[] = []
  if (Array.isArray(historyRaw)) {
    for (const h of historyRaw.slice(-30)) {
      if (!h || typeof h !== 'object') continue
      const o = h as Record<string, unknown>
      const role = o.role === 'user' || o.role === 'assistant' ? o.role : null
      const content = typeof o.content === 'string' ? o.content.trim() : ''
      if (!role || !content) continue
      history.push({ role, content: content.slice(0, 8000) })
    }
  }

  const pagePath =
    typeof (body as Record<string, unknown>).pagePath === 'string'
      ? ((body as Record<string, unknown>).pagePath as string).slice(0, 500)
      : undefined

  const qualification = parseChatQualification((body as Record<string, unknown>).qualification)

  const config = useRuntimeConfig(event)
  const enabled =
    config.minimaxEnabled === true ||
    config.minimaxEnabled === 'true' ||
    config.minimaxEnabled === '1'
  const hasKey = String(config.minimaxApiKey ?? '').trim().length > 0

  if (!enabled || !hasKey) {
    return fallbackReply(trimmed)
  }

  const result = await chatWithMiniMax(event, trimmed, history, pagePath, qualification)
  if (!result) {
    return fallbackReply(trimmed)
  }

  return result
})
