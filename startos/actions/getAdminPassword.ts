import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { storeJson } from '../fileModels/store.json'

export const getAdminPassword = sdk.Action.withoutInput(
  'get-admin-password',

  async ({ effects }) => ({
    name: i18n('Get Admin Password'),
    description: i18n('Retrieve the password for Actual Budget'),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  async ({ effects }) => {
    const password = await storeJson.read((s) => s.adminPassword).once()

    return {
      version: '1',
      title: 'Admin Password',
      message: 'Use this password to log in to Actual Budget:',
      result: {
        type: 'single',
        name: 'Password',
        description: null,
        value: password ?? 'UNKNOWN',
        masked: true,
        copyable: true,
        qr: false,
      },
    }
  },
)
