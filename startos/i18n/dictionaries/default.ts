export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting Actual Budget!': 0,
  'Web Interface': 1,
  'The web interface is ready': 2,
  'The web interface is not ready': 3,

  // interfaces.ts
  'Web UI': 4,
  'The Actual Budget web interface': 5,

  // actions/getAdminPassword.ts
  'Get Admin Password': 6,
  'Retrieve the password for Actual Budget': 7,

  // init/initializeService.ts
  'Retrieve the admin password': 8,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
