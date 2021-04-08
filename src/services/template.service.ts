import { FormatOptions, ParsedRequestData, QueryOptions } from '../../typings/domain-types'
import { ThemePattern } from '../../typings/enum-types'

import * as webShotService from './webshot.service'

import { mergeProps, toBoolean, toInt, single } from '../utils/commons'
import { profile } from '../utils/profiles'

import { ImageContent, ImageEncoding } from '../constants/constants'

export async function templateRenderer(requestData: ParsedRequestData): Promise<Buffer | string | void> {
    const theme = ThemePattern[single(requestData.query.theme)]
    const format = requestData.query as Partial<FormatOptions>
    const data = requestData.data

    const queryOptions = mergeProps<QueryOptions>(profile.routeOptions, {
        theme,
        format,
        data,
    })

    const url = webShotService.createTargetUrl(queryOptions)

    const width = toInt(single(requestData.query.width))
    const height = toInt(single(requestData.query.height))

    const selector = single(requestData.query.selector)
    const fullPage = toBoolean(single(requestData.query.fullPage))
    const type = ImageContent[single(requestData.query.type)]
    const encoding = ImageEncoding[single(requestData.query.encoding)]

    const routeOptions = { url }
    const imageOptions = { width, height }
    const resourceOptions = { selector, fullPage, type, encoding }

    return await webShotService.getScreenshot({ routeOptions, imageOptions, resourceOptions })
}
