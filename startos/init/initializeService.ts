import { utils } from '@start9labs/start-sdk'
import { getAdminPassword } from '../actions/getAdminPassword'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { dataDir, uiPort } from '../utils'

export const initializeService = sdk.setupOnInit(async (effects, kind) => {
  if (kind === 'install') {
    const adminPassword = utils.getDefaultString({
      charset: 'a-z,A-Z,0-9',
      len: 24,
    })

    await storeJson.merge(effects, { adminPassword })

    const appSub = await sdk.SubContainer.of(
      effects,
      { imageId: 'main' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: dataDir,
        readonly: false,
      }),
      'actual-budget-init',
    )

    await sdk.Daemons.of(effects)
      .addDaemon('server', {
        subcontainer: appSub,
        exec: { command: ['node', 'build/app.js'] },
        ready: {
          display: null,
          fn: () =>
            sdk.healthCheck.checkPortListening(effects, uiPort, {
              successMessage: 'Server ready',
              errorMessage: 'Server not ready',
            }),
        },
        requires: [],
      })
      .addOneshot('bootstrap', {
        subcontainer: appSub,
        exec: {
          command: [
            'node',
            '-e',
            `fetch('http://127.0.0.1:${uiPort}/account/bootstrap',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({password:'${adminPassword}'})}).then(r=>{if(!r.ok)throw new Error('Bootstrap failed');process.exit(0)}).catch(e=>{console.error(e);process.exit(1)})`,
          ],
        },
        requires: ['server'],
      })
      .runUntilSuccess(120_000)

    await sdk.action.createOwnTask(effects, getAdminPassword, 'critical', {
      reason: i18n('Retrieve the admin password'),
    })
  } else {
    await storeJson.merge(effects, {})
  }
})
