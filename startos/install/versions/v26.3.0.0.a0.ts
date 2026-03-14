import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_26_3_0_0_a0 = VersionInfo.of({
  version: '26.3.0:0-alpha.0',
  releaseNotes: {
    en_US:
      'Update to Actual Budget v26.3.0. SECURITY: fixes unauthenticated SimpleFin/Pluggy endpoints, unauthorized file access in multi-user mode, and file ID validation on sync server. Also includes API tag management, report access via command bar, bar/pie chart theming, custom bank sync starting date/balance, refill template automation, category group filters, Docker image switch to Node Alpine, Redux-to-React-Query migration, and 30+ bugfixes.',
    es_ES:
      'Actualización a Actual Budget v26.3.0. SEGURIDAD: corrige endpoints SimpleFin/Pluggy sin autenticación, acceso no autorizado a archivos en modo multiusuario y validación de ID de archivo en servidor de sincronización. También incluye gestión de etiquetas API, acceso a informes desde la barra de comandos, temas para gráficos de barras/circulares, fecha/saldo inicial personalizado para sincronización bancaria, automatización de plantillas de recarga, filtros de grupo de categorías, cambio de imagen Docker a Node Alpine, migración de Redux a React Query y más de 30 correcciones de errores.',
    de_DE:
      'Update auf Actual Budget v26.3.0. SICHERHEIT: Behebt nicht authentifizierte SimpleFin/Pluggy-Endpunkte, unautorisierten Dateizugriff im Mehrbenutzermodus und Datei-ID-Validierung auf dem Sync-Server. Enthält außerdem API-Tag-Verwaltung, Berichtszugriff über die Befehlsleiste, Balken-/Kreisdiagramm-Designs, benutzerdefiniertes Startdatum/-saldo für Banksynchronisierung, Automatisierung von Nachfüllvorlagen, Kategoriegruppen-Filter, Docker-Image-Wechsel zu Node Alpine, Redux-zu-React-Query-Migration und über 30 Fehlerbehebungen.',
    pl_PL:
      'Aktualizacja do Actual Budget v26.3.0. BEZPIECZEŃSTWO: naprawia nieuwierzytelnione endpointy SimpleFin/Pluggy, nieautoryzowany dostęp do plików w trybie wieloużytkownikowym oraz walidację ID pliku na serwerze synchronizacji. Zawiera również zarządzanie tagami API, dostęp do raportów z paska poleceń, motywy wykresów słupkowych/kołowych, niestandardową datę/saldo początkowe synchronizacji bankowej, automatyzację szablonów uzupełniania, filtry grup kategorii, zmianę obrazu Docker na Node Alpine, migrację z Redux do React Query i ponad 30 poprawek błędów.',
    fr_FR:
      'Mise à jour vers Actual Budget v26.3.0. SÉCURITÉ : corrige les endpoints SimpleFin/Pluggy non authentifiés, l\'accès non autorisé aux fichiers en mode multi-utilisateur et la validation des ID de fichier sur le serveur de synchronisation. Inclut également la gestion des tags API, l\'accès aux rapports via la barre de commandes, les thèmes de graphiques en barres/camembert, la date/solde de départ personnalisé pour la synchronisation bancaire, l\'automatisation des modèles de recharge, les filtres de groupe de catégories, le passage de l\'image Docker à Node Alpine, la migration Redux vers React Query et plus de 30 corrections de bugs.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
