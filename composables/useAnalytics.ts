export type AnalyticsEventName =
  | 'hero_primary_cta_click'
  | 'hero_secondary_cta_click'
  | 'ai_audit_started'
  | 'ai_audit_step_completed'
  | 'ai_audit_submitted'
  | 'contact_form_submitted'
  | 'solution_card_clicked'
  | 'chatbot_opened'
  | 'chatbot_message_sent'
  | 'chatbot_lead_started'
  | 'chatbot_lead_submitted'
  | 'lead_submit_success'
  | 'lead_submit_error'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function useAnalytics() {
  const trackEvent = (name: AnalyticsEventName, payload?: Record<string, unknown>) => {
    if (import.meta.server) return

    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', name, payload ?? {})
      } catch {
        /* ignore */
      }
      return
    }

    if (import.meta.dev) {
      console.debug('[analytics]', name, payload ?? {})
    }
  }

  return { trackEvent }
}
