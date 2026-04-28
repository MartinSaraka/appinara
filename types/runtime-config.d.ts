declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    siteUrl: string
    linkedinUrl: string
  }

  interface RuntimeConfig {
    emailjsServiceId: string
    emailjsTemplateId: string
    emailjsPublicKey: string
    leadRecipientEmail: string
    leadEmailSubjectPrefix: string
    minimaxApiKey: string
    minimaxApiBase: string
    minimaxModel: string
    minimaxChatModel: string
    /** Env môže poslať string "true" / "false" */
    minimaxEnabled: boolean | string
  }
}

export {}
