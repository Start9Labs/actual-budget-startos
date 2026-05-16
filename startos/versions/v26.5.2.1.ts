import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_26_5_2_1 = VersionInfo.of({
  version: '26.5.2:1',
  releaseNotes: {
    en_US: 'Updated to start-sdk 1.5.2.',
    es_ES: 'Actualizado a start-sdk 1.5.2.',
    de_DE: 'Aktualisierung auf start-sdk 1.5.2.',
    pl_PL: 'Zaktualizowano do start-sdk 1.5.2.',
    fr_FR: 'Mise à jour vers start-sdk 1.5.2.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
