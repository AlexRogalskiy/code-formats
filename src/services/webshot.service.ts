import { stringify } from 'querystring'

import { Optional } from '../../typings/standard-types'
import {
    GeneralPageOptions,
    ImageOptions,
    RequestOptions,
    ResourceOptions,
} from '../../typings/browser-types'
import { CarbonFormatOptions, FormatOptions, QueryOptions } from '../../typings/domain-types'

import * as screenshotClient from '../clients/screenshot.client'

import { QUERY_FORMAT_MAPPINGS } from '../constants/constants'

import { getTheme } from '../themes/themes'

import { mergeProps } from '../utils/commons'
import { serialize } from '../utils/serializers'
import { getApiUrl } from '../utils/requests'
import { boxenLogs } from '../utils/loggers'
import { profile } from '../utils/profiles'

const buildQueryParams = (options: Partial<FormatOptions>): Partial<CarbonFormatOptions> => {
    return Object.keys(options).reduce((acc, curr) => {
        /**
         * Go through the options and map them with their corresponding
         * carbon query param key.
         */
        const carbonConfigKey = QUERY_FORMAT_MAPPINGS[curr as keyof FormatOptions]
        if (!carbonConfigKey) {
            return acc
        }

        /**
         * Assign the value of the option to the corresponding
         * carbon query param key
         */
        return {
            ...acc,
            [carbonConfigKey]: options[curr as keyof FormatOptions],
        }
    }, {})
}

const toQueryParams = (options: Optional<Partial<FormatOptions>>): Partial<CarbonFormatOptions> => {
    return options ? buildQueryParams(options) : {}
}

export function createTargetUrl(query: QueryOptions): string {
    /**
     * Merge the default query params with the ones that we got
     * from the options object.
     */
    const queryParams = mergeProps<CarbonFormatOptions>(getTheme(query.theme), toQueryParams(query.format))

    /**
     * Make the code string url safe
     */
    const code = encodeURIComponent(query.data)

    /**
     * Stringify the code string and the carbon query params object to get the proper
     * query string to pass
     */
    const queryString = stringify({ code, ...queryParams })

    /**
     * Return the concatenation of the base url and the query string.
     */
    return getApiUrl(query.url, queryString)
}

export async function getScreenshot(request: RequestOptions): Promise<Buffer | string | void> {
    boxenLogs(`Creating screenshot by request params=${serialize(request)}`)

    const { imageOptions, resourceOptions, pageOptions } = profile.screenshotOptions

    const requestData: Required<RequestOptions> = {
        routeOptions: request.routeOptions,
        imageOptions: mergeProps<ImageOptions>(imageOptions, request.imageOptions),
        resourceOptions: mergeProps<ResourceOptions>(resourceOptions, request.resourceOptions),
        pageOptions: mergeProps<GeneralPageOptions>(pageOptions, request.pageOptions),
    }

    return await screenshotClient.screenshotRenderer(requestData)
}
