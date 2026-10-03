import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.10.0:0',
  releaseNotes: {
    en_US: `Updated Actual Budget to 26.10.0.

- Speeds up transaction editing and improves syncing between devices running different versions.
- Adds in-app release notifications and an experimental redesigned sidebar with searchable, reorderable account groups.
- Expands the experimental Monte Carlo report with income streams, yearly cashflow, and custom asset allocations.
- Fixes bank-import encoding, stuck schedules, offline browser startup, and the mobile date picker.

Full release notes: https://actualbudget.org/blog/release-26.10.0`,
    es_ES: `Actualiza Actual Budget a 26.10.0.

- Acelera la edición de transacciones y mejora la sincronización entre dispositivos con versiones diferentes.
- Añade notificaciones de versiones dentro de la aplicación y una barra lateral rediseñada experimental con grupos de cuentas que se pueden buscar y reordenar.
- Amplía el informe Monte Carlo experimental con fuentes de ingresos, flujo de caja anual y asignaciones de activos personalizadas.
- Corrige la codificación de importaciones bancarias, las programaciones bloqueadas, el inicio sin conexión en el navegador y el selector de fechas en móviles.

Notas completas de la versión: https://actualbudget.org/blog/release-26.10.0`,
    de_DE: `Aktualisiert Actual Budget auf 26.10.0.

- Beschleunigt die Bearbeitung von Transaktionen und verbessert die Synchronisierung zwischen Geräten mit unterschiedlichen Versionen.
- Fügt Versionsbenachrichtigungen in der App und eine experimentelle neue Seitenleiste mit durchsuchbaren, umsortierbaren Kontogruppen hinzu.
- Erweitert den experimentellen Monte-Carlo-Bericht um Einkommensquellen, jährlichen Cashflow und individuelle Vermögensaufteilungen.
- Behebt Zeichenkodierungsfehler beim Bankimport, festhängende Zeitpläne, den Offline-Start im Browser und die mobile Datumsauswahl.

Vollständige Versionshinweise: https://actualbudget.org/blog/release-26.10.0`,
    pl_PL: `Aktualizuje Actual Budget do 26.10.0.

- Przyspiesza edycję transakcji i poprawia synchronizację między urządzeniami z różnymi wersjami.
- Dodaje powiadomienia o wydaniach w aplikacji oraz eksperymentalny przeprojektowany panel boczny z wyszukiwaniem i zmianą kolejności grup kont.
- Rozszerza eksperymentalny raport Monte Carlo o źródła dochodów, roczne przepływy pieniężne i niestandardowe alokacje aktywów.
- Naprawia kodowanie importów bankowych, zablokowane harmonogramy, uruchamianie bez sieci w przeglądarce i mobilny wybór daty.

Pełne informacje o wersji: https://actualbudget.org/blog/release-26.10.0`,
    fr_FR: `Met à jour Actual Budget vers 26.10.0.

- Accélère la modification des transactions et améliore la synchronisation entre appareils utilisant des versions différentes.
- Ajoute des notifications de version dans l'application et une barre latérale expérimentale repensée avec recherche et réorganisation des groupes de comptes.
- Enrichit le rapport Monte-Carlo expérimental avec des sources de revenus, des flux de trésorerie annuels et des répartitions d'actifs personnalisées.
- Corrige l'encodage des imports bancaires, les échéanciers bloqués, le démarrage hors ligne dans le navigateur et le sélecteur de date sur mobile.

Notes de version complètes : https://actualbudget.org/blog/release-26.10.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
