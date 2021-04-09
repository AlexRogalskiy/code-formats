import { FormatOptions, ParsedRequestData, QueryOptions } from '../../typings/domain-types'
import { ImageContentType, ImageEncodingType } from '../../typings/browser-types'
import { ThemePattern } from '../../typings/enum-types'

import * as webShotService from './webshot.service'

import { mergeProps, single, toBoolean, toInt } from '../utils/commons'
import { profile } from '../utils/profiles'

import { IMAGE_CONTENT, IMAGE_ENCODING } from '../constants/constants'

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
    const type: ImageContentType = IMAGE_CONTENT[single(requestData.query.type)]
    const encoding: ImageEncodingType = IMAGE_ENCODING[single(requestData.query.encoding)]

    const routeOptions = { url }
    const imageOptions = { width, height }
    const resourceOptions = { selector, fullPage, type, encoding }

    return await webShotService.getScreenshot({ routeOptions, imageOptions, resourceOptions })
}
