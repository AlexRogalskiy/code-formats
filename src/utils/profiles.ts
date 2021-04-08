import { Profile } from '../../typings/enum-types'
import { Optional } from '../../typings/standard-types'
import { ProfileOptions } from '../../typings/domain-types'

import { CONFIG } from '../configs/config'

export const getProfileByEnv = (env: Optional<string> = process.env.NODE_ENV): Profile => {
    return (env && Profile[env]) ?? Profile.dev
}

export const getConfigByEnv = (env: Optional<string> = process.env.NODE_ENV): ProfileOptions => {
    return CONFIG[getProfileByEnv(env)]
}

export const isProd = process.env.AWS_LAMBDA_FUNCTION_VERSION || Profile.prod === getProfileByEnv()

const getConfig = (): ProfileOptions => {
    return isProd ? CONFIG[Profile.prod] : getConfigByEnv()
}

export const profile = getConfig()
