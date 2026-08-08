import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.8.1:0',
  releaseNotes: {
    en_US: `Updated Actual Budget to 26.8.1, a bugfix release.

- Fixes intermittent app freezes with 100% CPU usage.
- Fixes the transaction list getting slower as a budget grows, especially when adding, clearing, or deleting transactions and when reconciling.
- Fixes the context menu showing on multi-account views.
- Restores the "Delete" option in the schedule row menu on the Schedules page.

Full release notes: https://actualbudget.org/blog/release-26.8.1`,
    es_ES: `Actualiza Actual Budget a 26.8.1, una versión de corrección de errores.

- Corrige los bloqueos intermitentes de la aplicación con un 100 % de uso de CPU.
- Corrige la ralentización de la lista de transacciones a medida que crece el presupuesto, especialmente al añadir, confirmar o eliminar transacciones y al conciliar.
- Corrige la aparición del menú contextual en las vistas de varias cuentas.
- Restaura la opción «Eliminar» en el menú de fila de la página de Programaciones.

Notas completas de la versión: https://actualbudget.org/blog/release-26.8.1`,
    de_DE: `Aktualisiert Actual Budget auf 26.8.1, eine Fehlerbehebungsversion.

- Behebt zeitweilige Einfrierer der App bei 100 % CPU-Auslastung.
- Behebt, dass die Transaktionsliste mit wachsendem Budget langsamer wurde, insbesondere beim Hinzufügen, Bestätigen und Löschen von Transaktionen sowie beim Abgleich.
- Behebt das Erscheinen des Kontextmenüs in kontenübergreifenden Ansichten.
- Stellt die Option „Löschen“ im Zeilenmenü der Seite „Zeitpläne“ wieder her.

Vollständige Versionshinweise: https://actualbudget.org/blog/release-26.8.1`,
    pl_PL: `Aktualizuje Actual Budget do 26.8.1, wydania poprawkowego.

- Naprawia sporadyczne zawieszanie się aplikacji przy 100% użycia procesora.
- Naprawia spowalnianie listy transakcji wraz ze wzrostem budżetu, zwłaszcza przy dodawaniu, rozliczaniu i usuwaniu transakcji oraz podczas uzgadniania.
- Naprawia wyświetlanie menu kontekstowego w widokach wielu kont.
- Przywraca opcję „Usuń” w menu wiersza na stronie Harmonogramów.

Pełne informacje o wersji: https://actualbudget.org/blog/release-26.8.1`,
    fr_FR: `Met à jour Actual Budget vers 26.8.1, une version corrective.

- Corrige les blocages intermittents de l'application avec une utilisation du processeur à 100 %.
- Corrige le ralentissement de la liste des transactions à mesure que le budget grandit, en particulier lors de l'ajout, du pointage ou de la suppression de transactions et lors du rapprochement.
- Corrige l'affichage du menu contextuel dans les vues multi-comptes.
- Rétablit l'option « Supprimer » dans le menu de ligne de la page Échéanciers.

Notes de version complètes : https://actualbudget.org/blog/release-26.8.1`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
