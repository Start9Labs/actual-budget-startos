import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_26_3_0_0_b1 = VersionInfo.of({
  version: '26.3.0:0-beta.1',
  releaseNotes: {
    en_US: 'Update Actual Budget to 26.3.0',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
