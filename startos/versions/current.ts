import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.6.0:0',
  releaseNotes: {
    en_US: 'Bumps Actual Budget → 26.6.0.',
    es_ES: 'Actualiza Actual Budget → 26.6.0.',
    de_DE: 'Aktualisiert Actual Budget → 26.6.0.',
    pl_PL: 'Aktualizuje Actual Budget → 26.6.0.',
    fr_FR: 'Met à jour Actual Budget → 26.6.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
