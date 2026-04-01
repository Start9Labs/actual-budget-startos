import { setupManifest } from '@start9labs/start-sdk'
import { short, long, alertUninstall } from './i18n'

export const manifest = setupManifest({
  id: 'actual-budget',
  title: 'Actual Budget',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9Labs/actual-budget-startos',
  upstreamRepo: 'https://github.com/actualbudget/actual',
  marketingUrl: 'https://actualbudget.org/',
  donationUrl: 'https://opencollective.com/actual',
  docsUrls: ['https://actualbudget.org/docs/'],
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerBuild: {
          workdir: './actual',
          dockerfile: './actual/sync-server.Dockerfile',
        },
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  alerts: {
    install: null,
    update: null,
    uninstall: alertUninstall,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
