import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'actual-budget',
  title: 'Actual Budget',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/actual-budget-startos',
  upstreamRepo: 'https://github.com/actualbudget/actual',
  supportSite: 'https://actualbudget.org/docs/',
  marketingSite: 'https://actualbudget.org/',
  donationUrl: 'https://opencollective.com/actual',
  docsUrl: 'https://actualbudget.org/docs/',
  description: {
    short: 'A local-first personal finance app',
    long: 'Actual Budget is a super fast and privacy-focused app for managing your finances using the envelope budgeting methodology. Your data stays local with optional sync across devices.',
  },
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerBuild: {
          dockerfile: './actual/sync-server.Dockerfile',
          workdir: './actual',
        },
      },
    },
  },
  alerts: {
    install: null,
    update: null,
    uninstall: 'All budget data will be deleted.',
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
