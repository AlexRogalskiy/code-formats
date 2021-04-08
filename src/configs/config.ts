import { Profile } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import {
    BROWSER_OPTIONS,
    IMAGE_OPTIONS,
    LOCATION_OPTIONS,
    OUTPUT_OPTIONS,
    PAGE_OPTIONS,
    RESOURCE_OPTIONS,
    ROUTE_OPTIONS,
} from '../constants/constants'

/**
 * ConfigRecord
 * @desc Type representing profile config options
 */
export type ConfigRecord = Record<Profile, ProfileOptions>

/**
 * Configuration options
 */
export const CONFIG: Readonly<ConfigRecord> = {
    dev: {
        routeOptions: ROUTE_OPTIONS,
        screenshotOptions: {
            browserOptions: BROWSER_OPTIONS,
            locationOptions: LOCATION_OPTIONS,
            resourceOptions: RESOURCE_OPTIONS,
            imageOptions: IMAGE_OPTIONS,
            pageOptions: PAGE_OPTIONS,
        },
        outputOptions: OUTPUT_OPTIONS,
    },
    prod: {
        routeOptions: ROUTE_OPTIONS,
        screenshotOptions: {
            browserOptions: BROWSER_OPTIONS,
            locationOptions: LOCATION_OPTIONS,
            resourceOptions: RESOURCE_OPTIONS,
            imageOptions: IMAGE_OPTIONS,
            pageOptions: PAGE_OPTIONS,
        },
        outputOptions: OUTPUT_OPTIONS,
    },
    test: {
        routeOptions: ROUTE_OPTIONS,
        screenshotOptions: {
            browserOptions: BROWSER_OPTIONS,
            locationOptions: LOCATION_OPTIONS,
            resourceOptions: RESOURCE_OPTIONS,
            imageOptions: IMAGE_OPTIONS,
            pageOptions: PAGE_OPTIONS,
        },
        outputOptions: OUTPUT_OPTIONS,
    },
}
