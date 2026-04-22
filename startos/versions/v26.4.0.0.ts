import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_26_4_0_0 = VersionInfo.of({
  version: '26.4.0:0',
  releaseNotes: {
    en_US: 'Update Actual Budget to 26.4.0',
    es_ES: 'Actualización de Actual Budget a 26.4.0',
    de_DE: 'Update von Actual Budget auf 26.4.0',
    pl_PL: 'Aktualizacja Actual Budget do 26.4.0',
    fr_FR: 'Mise à jour de Actual Budget vers 26.4.0',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
