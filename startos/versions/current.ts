import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '26.11.0:0',
  releaseNotes: {
    en_US: `Updated Actual Budget to 26.11.0 and start-sdk to 3.1.1.

- Automatic bank sync at a chosen interval while Actual is open, per-budget SimpleFIN credentials, reports grouped by tags, and customizable sidebar pages and start page.
- Faster loading and lower memory use for large budgets; fixes for imports, schedules, mobile views, and interrupted budget saves.
- Security hardening for bank connections, request logs, imports, and authentication. Changing the server password requires the current password and signs out existing sessions.
- Private SimpleFIN bridges now require an explicit server allowlist (simplefinAllowedNetworks in /data/config.json); after updating, allow the bridge IP and restart the service before reconnecting if you use one. Public SimpleFIN needs no change.

Full release notes: https://actualbudget.org/blog/release-26.11.0`,
    es_ES: `Actualiza Actual Budget a 26.11.0 y start-sdk a 3.1.1.

- Sincronización bancaria automática a intervalos mientras Actual está abierto, credenciales SimpleFIN por presupuesto, informes agrupados por etiquetas y páginas de la barra lateral y página inicial personalizables.
- Carga más rápida y menor uso de memoria en presupuestos grandes; correcciones de importaciones, programaciones, vistas móviles y guardados interrumpidos.
- Refuerzo de la seguridad de conexiones bancarias, registros de solicitudes, importaciones y autenticación. Cambiar la contraseña del servidor requiere la contraseña actual y cierra las sesiones existentes.
- Los puentes SimpleFIN privados requieren una lista explícita de direcciones permitidas en el servidor (simplefinAllowedNetworks en /data/config.json); tras actualizar, permite la IP del puente y reinicia el servicio antes de reconectar si utilizas uno. SimpleFIN público no requiere cambios.

Notas completas de la versión: https://actualbudget.org/blog/release-26.11.0`,
    de_DE: `Aktualisiert Actual Budget auf 26.11.0 und start-sdk auf 3.1.1.

- Automatische Banksynchronisierung in gewählten Intervallen bei geöffnetem Actual, SimpleFIN-Zugangsdaten pro Budget, nach Tags gruppierte Berichte sowie anpassbare Seitenleisten- und Startseiten.
- Schnelleres Laden und geringerer Speicherverbrauch bei großen Budgets; Korrekturen für Importe, Zeitpläne, mobile Ansichten und unterbrochene Speichervorgänge.
- Verbesserte Sicherheit für Bankverbindungen, Anfrageprotokolle, Importe und Anmeldung. Passwortänderungen erfordern das bisherige Serverpasswort und melden bestehende Sitzungen ab.
- Private SimpleFIN-Bridges benötigen eine ausdrückliche Freigabeliste im Server (simplefinAllowedNetworks in /data/config.json); bei Nutzung einer privaten Bridge nach dem Update deren IP freigeben und den Dienst vor dem erneuten Verbinden neu starten. Öffentliches SimpleFIN erfordert keine Änderung.

Vollständige Versionshinweise: https://actualbudget.org/blog/release-26.11.0`,
    pl_PL: `Aktualizuje Actual Budget do 26.11.0 i start-sdk do 3.1.1.

- Automatyczna synchronizacja bankowa w wybranych odstępach, gdy Actual jest otwarty, dane logowania SimpleFIN dla każdego budżetu, raporty grupowane według tagów oraz konfigurowalne strony paska bocznego i strona startowa.
- Szybsze otwieranie i mniejsze zużycie pamięci przy dużych budżetach; poprawki importu, harmonogramów, widoków mobilnych i przerwanego zapisu budżetu.
- Wzmocnione zabezpieczenia połączeń bankowych, dzienników żądań, importu i uwierzytelniania. Zmiana hasła serwera wymaga bieżącego hasła i wylogowuje istniejące sesje.
- Prywatne mosty SimpleFIN wymagają jawnej listy dozwolonych adresów serwera (simplefinAllowedNetworks w /data/config.json); jeśli używasz takiego mostu, po aktualizacji dodaj jego IP i uruchom usługę ponownie przed połączeniem. Publiczny SimpleFIN nie wymaga zmian.

Pełne informacje o wersji: https://actualbudget.org/blog/release-26.11.0`,
    fr_FR: `Met à jour Actual Budget vers 26.11.0 et start-sdk vers 3.1.1.

- Synchronisation bancaire automatique à intervalles choisis tant qu'Actual est ouvert, identifiants SimpleFIN par budget, rapports regroupés par étiquettes et personnalisation des pages de la barre latérale et de la page d'accueil.
- Chargement plus rapide et consommation mémoire réduite pour les grands budgets ; corrections des imports, échéanciers, vues mobiles et enregistrements interrompus.
- Sécurité renforcée des connexions bancaires, journaux de requêtes, imports et authentification. Changer le mot de passe du serveur exige le mot de passe actuel et déconnecte les sessions existantes.
- Les passerelles SimpleFIN privées exigent une liste explicite d'adresses autorisées sur le serveur (simplefinAllowedNetworks dans /data/config.json) ; après la mise à jour, autorisez l'IP de la passerelle et redémarrez le service avant de la reconnecter si vous en utilisez une. Le SimpleFIN public ne nécessite aucun changement.

Notes de version complètes : https://actualbudget.org/blog/release-26.11.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
