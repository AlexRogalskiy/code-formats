import { ProfilePattern } from '../../typings/enum-types'
import { Optional } from '../../typings/standard-types'
import { ProfileOptions } from '../../typings/domain-types'

import { CONFIG } from '../configs/config'

import { isNotUndefined } from './validators'

export const getProfileByEnv = (env: Optional<string> = process.env.NODE_ENV): ProfilePattern =>
    env && ProfilePattern[env] ? ProfilePattern[env] : ProfilePattern.dev

export const getConfigByEnv = (env: Optional<string> = process.env.NODE_ENV): ProfileOptions =>
    CONFIG[getProfileByEnv(env)]

export const isProd =
    isNotUndefined(process.env.AWS_LAMBDA_FUNCTION_VERSION) || ProfilePattern.prod === getProfileByEnv()

export const profile = isProd ? CONFIG[ProfilePattern.prod] : getConfigByEnv()
