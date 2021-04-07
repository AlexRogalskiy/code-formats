import { FormatOptions, ParsedRequestData, QueryOptions } from '../../typings/domain-types'
import { ImageContentType, ImageEncodingType } from '../../typings/browser-types'

import * as webshotService from './webshot.service'

import { mergeProps, toBoolean, toInt, toString } from '../utils/commons'
import { profile } from '../utils/profiles'

import { ImageContent, ImageEncoding } from '../constants/constants'

export async function templateRenderer(requestData: ParsedRequestData): Promise<Buffer | string | void> {
    const width = toInt(toString(requestData.query.width))
    const height = toInt(toString(requestData.query.height))

    const selector = toString(requestData.query.selector)
    const fullPage = toBoolean(toString(requestData.query.fullPage))
    const type: ImageContentType = ImageContent[toString(requestData.query.type)]
    const encoding: ImageEncodingType = ImageEncoding[toString(requestData.query.encoding)]

    const imageOptions = { width, height }
    const resourceOptions = { selector, fullPage, type, encoding }

    const queryOptions = mergeProps<Required<QueryOptions>>(profile.routeOptions, {
        data: requestData.data,
        options: requestData.query as Partial<FormatOptions>,
    })
    const url = webshotService.createTargetUrl(queryOptions)

    return await webshotService.getScreenshot({ url, imageOptions, resourceOptions })
}
