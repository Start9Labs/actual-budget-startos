import { VersionGraph } from '@start9labs/start-sdk'
import { v_26_4_0_0 } from './v26.4.0.0'
import { v_26_4_0_1 } from './v26.4.0.1'

export const versionGraph = VersionGraph.of({
  current: v_26_4_0_1,
  other: [v_26_4_0_0],
})
