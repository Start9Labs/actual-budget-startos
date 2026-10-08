import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { storeJson } from '../fileModels/store.json'

export const getAdminPassword = sdk.Action.withoutInput(
  'get-admin-password',

  async ({ effects }) => ({
    name: i18n('Get Admin Password'),
    description: i18n(
      'Show the admin password generated at install. If you change the password inside Actual Budget, this still shows the original.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  async ({ effects }) => {
    const password = await storeJson.read((s) => s.adminPassword).once()

    return {
      version: '1',
      title: i18n('Admin Password'),
      message: i18n('Use this password to log in to Actual Budget:'),
      result: {
        type: 'single',
        name: i18n('Password'),
        description: null,
        value: password ?? 'UNKNOWN',
        masked: true,
        copyable: true,
        qr: false,
      },
    }
  },
)
