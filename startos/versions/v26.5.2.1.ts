import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_26_5_2_1 = VersionInfo.of({
  version: '26.5.2:1',
  releaseNotes: {
    en_US: `**Fixes**

- Patch upstream sync-server image so \`@actual-app/crdt\` resolves at runtime; 26.5.2:0 crash-looped on fresh install with \`Cannot find package '@actual-app/crdt'\`.`,
    es_ES: `**Correcciones**

- Parchea la imagen sync-server de upstream para que \`@actual-app/crdt\` se resuelva en tiempo de ejecución; 26.5.2:0 entraba en bucle de fallos en una instalación nueva con \`Cannot find package '@actual-app/crdt'\`.`,
    de_DE: `**Fehlerbehebungen**

- Upstream-Sync-Server-Image so gepatcht, dass \`@actual-app/crdt\` zur Laufzeit aufgelöst wird; 26.5.2:0 stürzte bei einer Neuinstallation in einer Schleife mit \`Cannot find package '@actual-app/crdt'\` ab.`,
    pl_PL: `**Poprawki**

- Załatano obraz sync-server upstream, aby \`@actual-app/crdt\` był rozwiązywany w czasie wykonania; 26.5.2:0 wchodziło w pętlę awarii przy świeżej instalacji z błędem \`Cannot find package '@actual-app/crdt'\`.`,
    fr_FR: `**Corrections**

- Correctif de l'image sync-server amont pour que \`@actual-app/crdt\` soit résolu à l'exécution ; 26.5.2:0 plantait en boucle lors d'une installation neuve avec \`Cannot find package '@actual-app/crdt'\`.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
