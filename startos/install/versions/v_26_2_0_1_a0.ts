import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_26_2_0_1_a0 = VersionInfo.of({
  version: '26.2.0:1-alpha.0',
  releaseNotes: {
    en_US: 'Initial release for StartOS',
    es_ES: 'Versión inicial para StartOS',
    de_DE: 'Erstveröffentlichung für StartOS',
    pl_PL: 'Pierwsze wydanie dla StartOS',
    fr_FR: 'Version initiale pour StartOS',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
