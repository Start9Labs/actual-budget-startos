import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_26_5_2_0 = VersionInfo.of({
  version: '26.5.2:0',
  releaseNotes: {
    en_US: `**Bumps**

- Actual Budget → 26.5.2
- start-sdk → 1.5.0`,
    es_ES: `**Actualizaciones**

- Actual Budget → 26.5.2
- start-sdk → 1.5.0`,
    de_DE: `**Aktualisierungen**

- Actual Budget → 26.5.2
- start-sdk → 1.5.0`,
    pl_PL: `**Aktualizacje**

- Actual Budget → 26.5.2
- start-sdk → 1.5.0`,
    fr_FR: `**Mises à jour**

- Actual Budget → 26.5.2
- start-sdk → 1.5.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
