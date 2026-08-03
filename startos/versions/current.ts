import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.8.0:0',
  releaseNotes: {
    en_US: `Updated Actual Budget to 26.8.0.

- The Age of Money report and Payee Locations are now stable features.
- Redesigned onboarding and a smoother first-account setup.
- Mobile: reconcile accounts, and set up bank sync providers and link accounts from the Bank Sync page.
- Reports: day-level date range selection, and CSV export for Budget Analysis.
- Server passwords are now hashed with argon2id instead of bcrypt; existing passwords are upgraded automatically on your next login, so no action is needed.
- Many bank sync fixes (GoCardless, SimpleFIN, Pluggy) and OIDC login fixes.

Full release notes: https://actualbudget.org/blog/release-26.8.0`,
    es_ES: `Actualiza Actual Budget a 26.8.0.

- El informe Age of Money y las Ubicaciones de beneficiarios ya son funciones estables.
- Pantallas de bienvenida rediseñadas y configuración más sencilla de la primera cuenta.
- Móvil: conciliación de cuentas, y configuración de proveedores de sincronización bancaria y vinculación de cuentas desde la página de sincronización bancaria.
- Informes: selección de rangos de fechas por día y exportación a CSV del Análisis de presupuesto.
- Las contraseñas del servidor ahora se cifran con argon2id en lugar de bcrypt; las existentes se actualizan automáticamente en el próximo inicio de sesión, no es necesario hacer nada.
- Numerosas correcciones de sincronización bancaria (GoCardless, SimpleFIN, Pluggy) y de inicio de sesión OIDC.

Notas completas de la versión: https://actualbudget.org/blog/release-26.8.0`,
    de_DE: `Aktualisiert Actual Budget auf 26.8.0.

- Der Bericht „Age of Money“ und Zahlungsempfänger-Standorte sind jetzt stabile Funktionen.
- Neu gestaltete Einführungsbildschirme und eine einfachere Einrichtung des ersten Kontos.
- Mobil: Kontenabgleich sowie Einrichtung von Bank-Sync-Anbietern und Verknüpfung von Konten direkt auf der Bank-Sync-Seite.
- Berichte: Datumsbereichsauswahl auf Tagesebene und CSV-Export der Budgetanalyse.
- Serverpasswörter werden jetzt mit argon2id statt bcrypt gehasht; vorhandene Passwörter werden bei der nächsten Anmeldung automatisch umgestellt, es ist nichts zu tun.
- Viele Korrekturen bei der Bank-Synchronisierung (GoCardless, SimpleFIN, Pluggy) und bei der OIDC-Anmeldung.

Vollständige Versionshinweise: https://actualbudget.org/blog/release-26.8.0`,
    pl_PL: `Aktualizuje Actual Budget do 26.8.0.

- Raport Age of Money oraz Lokalizacje odbiorców są teraz stabilnymi funkcjami.
- Przeprojektowane ekrany wprowadzające i łatwiejsza konfiguracja pierwszego konta.
- Wersja mobilna: uzgadnianie kont oraz konfiguracja dostawców synchronizacji bankowej i łączenie kont ze strony synchronizacji bankowej.
- Raporty: wybór zakresu dat z dokładnością do dnia i eksport analizy budżetu do CSV.
- Hasła serwera są teraz hashowane algorytmem argon2id zamiast bcrypt; istniejące hasła są migrowane automatycznie przy następnym logowaniu, nie trzeba nic robić.
- Wiele poprawek synchronizacji bankowej (GoCardless, SimpleFIN, Pluggy) oraz logowania OIDC.

Pełne informacje o wersji: https://actualbudget.org/blog/release-26.8.0`,
    fr_FR: `Met à jour Actual Budget vers 26.8.0.

- Le rapport Age of Money et les Emplacements des bénéficiaires sont désormais des fonctionnalités stables.
- Écrans d'accueil repensés et configuration du premier compte simplifiée.
- Mobile : rapprochement des comptes, configuration des fournisseurs de synchronisation bancaire et association des comptes depuis la page de synchronisation bancaire.
- Rapports : sélection de plages de dates au jour près et export CSV de l'analyse budgétaire.
- Les mots de passe du serveur sont désormais hachés avec argon2id au lieu de bcrypt ; les mots de passe existants sont migrés automatiquement à la prochaine connexion, aucune action n'est requise.
- De nombreuses corrections de la synchronisation bancaire (GoCardless, SimpleFIN, Pluggy) et de la connexion OIDC.

Notes de version complètes : https://actualbudget.org/blog/release-26.8.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
