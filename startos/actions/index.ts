import { sdk } from '../sdk'
import { getAdminPassword } from './getAdminPassword'

export const actions = sdk.Actions.of().addAction(getAdminPassword)
