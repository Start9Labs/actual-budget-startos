import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.9.0:0',
  releaseNotes: {
    en_US: `Updated Actual Budget to 26.9.0.

- Adds customizable transaction-table columns, a guided tour for new users, global tag renaming, and drag-and-drop schedule ordering.
- Adds an experimental retirement Monte Carlo report, formula-report improvements, and four currencies.
- Fixes issues across bank sync, schedules, transfers, rules, reports, mobile layouts, and login error handling.

Full release notes: https://actualbudget.org/blog/release-26.9.0`,
    es_ES: `Actualiza Actual Budget a 26.9.0.

- Añade columnas personalizables en la tabla de transacciones, una visita guiada para nuevos usuarios, el cambio de nombre global de etiquetas y la ordenación de programaciones mediante arrastrar y soltar.
- Añade un informe Monte Carlo experimental para la jubilación, mejoras en los informes de fórmulas y cuatro monedas.
- Corrige problemas de sincronización bancaria, programaciones, transferencias, reglas, informes, diseños móviles y gestión de errores de inicio de sesión.

Notas completas de la versión: https://actualbudget.org/blog/release-26.9.0`,
    de_DE: `Aktualisiert Actual Budget auf 26.9.0.

- Fügt anpassbare Spalten in der Transaktionstabelle, eine Einführung für neue Benutzer, das globale Umbenennen von Tags und die Sortierung von Zeitplänen per Drag-and-drop hinzu.
- Fügt einen experimentellen Monte-Carlo-Bericht zur Altersvorsorge, Verbesserungen an Formelberichten und vier Währungen hinzu.
- Behebt Probleme bei Banksynchronisierung, Zeitplänen, Überweisungen, Regeln, Berichten, mobilen Ansichten und der Fehlerbehandlung bei der Anmeldung.

Vollständige Versionshinweise: https://actualbudget.org/blog/release-26.9.0`,
    pl_PL: `Aktualizuje Actual Budget do 26.9.0.

- Dodaje konfigurowalne kolumny tabeli transakcji, przewodnik dla nowych użytkowników, globalną zmianę nazw tagów i porządkowanie harmonogramów metodą przeciągania i upuszczania.
- Dodaje eksperymentalny raport emerytalny Monte Carlo, ulepszenia raportów formuł i cztery waluty.
- Naprawia problemy z synchronizacją bankową, harmonogramami, przelewami, regułami, raportami, widokami mobilnymi i obsługą błędów logowania.

Pełne informacje o wersji: https://actualbudget.org/blog/release-26.9.0`,
    fr_FR: `Met à jour Actual Budget vers 26.9.0.

- Ajoute des colonnes personnalisables dans le tableau des transactions, une visite guidée pour les nouveaux utilisateurs, le renommage global des étiquettes et le classement des échéanciers par glisser-déposer.
- Ajoute un rapport Monte-Carlo expérimental sur la retraite, des améliorations aux rapports de formules et quatre devises.
- Corrige des problèmes liés à la synchronisation bancaire, aux échéanciers, aux virements, aux règles, aux rapports, aux vues mobiles et à la gestion des erreurs de connexion.

Notes de version complètes : https://actualbudget.org/blog/release-26.9.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
