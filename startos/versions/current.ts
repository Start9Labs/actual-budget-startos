import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.7.0:0',
  releaseNotes: {
    en_US: `Updated Actual Budget to 26.7.0.

- Security: SSRF protection for SimpleFIN sync, a CORS proxy fix, and a sync-server permission fix so only file owners and admins can perform sensitive actions.
- Clearer "update required" messages replace cryptic database schema errors.
- New: New Zealand bank sync (Akahu, experimental), tag show/hide and bulk actions, and Monthly Spending report improvements.

Full release notes: https://actualbudget.org/blog/release-26.7.0`,
    es_ES: `Actualiza Actual Budget a 26.7.0.

- Seguridad: protección SSRF para la sincronización de SimpleFIN, corrección del proxy CORS y una corrección de permisos del servidor de sincronización para que solo los propietarios de archivos y los administradores puedan realizar acciones sensibles.
- Mensajes de «actualización requerida» más claros que sustituyen a los crípticos errores de esquema de la base de datos.
- Novedades: sincronización bancaria de Nueva Zelanda (Akahu, experimental), mostrar/ocultar etiquetas y acciones masivas, y mejoras en el informe de Gasto Mensual.

Notas completas de la versión: https://actualbudget.org/blog/release-26.7.0`,
    de_DE: `Aktualisiert Actual Budget auf 26.7.0.

- Sicherheit: SSRF-Schutz für die SimpleFIN-Synchronisierung, ein CORS-Proxy-Fix und eine Berechtigungskorrektur im Sync-Server, sodass nur Dateibesitzer und Administratoren sensible Aktionen ausführen können.
- Klarere „Aktualisierung erforderlich“-Meldungen ersetzen kryptische Datenbankschema-Fehler.
- Neu: neuseeländische Bank-Synchronisierung (Akahu, experimentell), Tags ein-/ausblenden und Massenaktionen sowie Verbesserungen im Bericht „Monatliche Ausgaben“.

Vollständige Versionshinweise: https://actualbudget.org/blog/release-26.7.0`,
    pl_PL: `Aktualizuje Actual Budget do 26.7.0.

- Bezpieczeństwo: ochrona przed SSRF dla synchronizacji SimpleFIN, poprawka proxy CORS oraz poprawka uprawnień serwera synchronizacji, dzięki której tylko właściciele plików i administratorzy mogą wykonywać wrażliwe akcje.
- Czytelniejsze komunikaty „wymagana aktualizacja” zastępują niejasne błędy schematu bazy danych.
- Nowości: synchronizacja bankowa dla Nowej Zelandii (Akahu, eksperymentalna), pokazywanie/ukrywanie tagów i akcje zbiorcze oraz ulepszenia raportu Wydatków Miesięcznych.

Pełne informacje o wersji: https://actualbudget.org/blog/release-26.7.0`,
    fr_FR: `Met à jour Actual Budget vers 26.7.0.

- Sécurité : protection SSRF pour la synchronisation SimpleFIN, correction du proxy CORS et correction des permissions du serveur de synchronisation afin que seuls les propriétaires de fichiers et les administrateurs puissent effectuer des actions sensibles.
- Des messages « mise à jour requise » plus clairs remplacent les erreurs cryptiques de schéma de base de données.
- Nouveautés : synchronisation bancaire pour la Nouvelle-Zélande (Akahu, expérimentale), affichage/masquage des étiquettes et actions groupées, ainsi que des améliorations du rapport Dépenses mensuelles.

Notes de version complètes : https://actualbudget.org/blog/release-26.7.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
