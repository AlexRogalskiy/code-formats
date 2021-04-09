import { ProfilePattern } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { OUTPUT_OPTIONS, ROUTE_OPTIONS, SCREENSHOTS_OPTIONS } from '../constants/constants'

/**
 * ProfileConfigOptions
 * @desc Type representing profile configuration options
 */
export type ProfileConfigOptions = Record<ProfilePattern, ProfileOptions>

/**
 * Configuration options
 */
export const CONFIG: Readonly<ProfileConfigOptions> = {
    dev: {
        routeOptions: ROUTE_OPTIONS,
        screenshotOptions: SCREENSHOTS_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    prod: {
        routeOptions: ROUTE_OPTIONS,
        screenshotOptions: SCREENSHOTS_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    test: {
        routeOptions: ROUTE_OPTIONS,
        screenshotOptions: SCREENSHOTS_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
}
