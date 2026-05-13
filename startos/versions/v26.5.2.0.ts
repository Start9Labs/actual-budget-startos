import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_26_5_2_0 = VersionInfo.of({
  version: '26.5.2:0',
  releaseNotes: {
    en_US: `**Bumps**

- Actual Budget → 26.5.2
- start-sdk → 1.5.0

**Features**

- Experimental Age of Money and Sankey Diagram reports
- Five new custom themes: Nord, Ilavenil, Gruvbox Light/Dark, You Need A Theme Light/Dark
- Rate limiting on authentication endpoints
- Per-schedule "upcoming" notification window override

**Fixes**

- Numerous upstream bug fixes — see Actual's release notes for the full list`,
    es_ES: `**Actualizaciones**

- Actual Budget → 26.5.2
- start-sdk → 1.5.0

**Funciones**

- Nuevos informes experimentales: Edad del Dinero y Diagrama de Sankey
- Cinco nuevos temas personalizados: Nord, Ilavenil, Gruvbox claro/oscuro, You Need A Theme claro/oscuro
- Límite de intentos en los endpoints de autenticación
- Anulación por programación de la ventana de notificación "próximamente"

**Correcciones**

- Numerosas correcciones de errores upstream — consulte las notas de versión de Actual para la lista completa`,
    de_DE: `**Aktualisierungen**

- Actual Budget → 26.5.2
- start-sdk → 1.5.0

**Funktionen**

- Experimentelle Berichte: Age of Money und Sankey-Diagramm
- Fünf neue benutzerdefinierte Themen: Nord, Ilavenil, Gruvbox hell/dunkel, You Need A Theme hell/dunkel
- Ratenbegrenzung für Authentifizierungs-Endpunkte
- Pro Zeitplan einstellbares "Demnächst"-Benachrichtigungsfenster

**Korrekturen**

- Zahlreiche Fehlerbehebungen aus dem Upstream — siehe Actuals Release-Notes für die vollständige Liste`,
    pl_PL: `**Aktualizacje**

- Actual Budget → 26.5.2
- start-sdk → 1.5.0

**Funkcje**

- Eksperymentalne raporty: Age of Money i diagram Sankeya
- Pięć nowych motywów: Nord, Ilavenil, Gruvbox jasny/ciemny, You Need A Theme jasny/ciemny
- Ograniczenie liczby prób na endpointach uwierzytelniania
- Indywidualne okno powiadomień "nadchodzące" dla każdego harmonogramu

**Poprawki**

- Liczne poprawki błędów z upstream — pełna lista w notach Actuala`,
    fr_FR: `**Mises à jour**

- Actual Budget → 26.5.2
- start-sdk → 1.5.0

**Fonctionnalités**

- Nouveaux rapports expérimentaux : Âge de l'argent et diagramme de Sankey
- Cinq nouveaux thèmes personnalisés : Nord, Ilavenil, Gruvbox clair/sombre, You Need A Theme clair/sombre
- Limitation du débit sur les points de terminaison d'authentification
- Fenêtre de notification "à venir" configurable par planification

**Corrections**

- Nombreuses corrections de bugs en amont — voir les notes de version d'Actual pour la liste complète`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
