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
  'Show the admin password generated at install. If you change the password inside Actual Budget, this still shows the original.': 7,
  'Admin Password': 10,
  'Use this password to log in to Actual Budget:': 11,
  Password: 12,

  // init/bootstrapServer.ts
  'Retrieve the admin password': 8,
  'Creating the Actual Budget admin account': 9,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
