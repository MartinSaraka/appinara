export const useAnalytics = () => {
  const trackEvent = (_name: string, _props?: Record<string, unknown>) => {
    if (process.dev && process.client) {
      // eslint-disable-next-line no-console
      console.debug('[analytics]', _name, _props || {})
    }
  }
  return { trackEvent }
}
