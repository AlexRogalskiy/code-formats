import { FormatOptions, ParsedRequestData, QueryOptions } from '../../typings/domain-types'
import { ThemePattern } from '../../typings/enum-types'

import * as webShotService from './webshot.service'

import { mergeProps, toBoolean, toInt, toString } from '../utils/commons'
import { profile } from '../utils/profiles'

import { ImageContent, ImageEncoding } from '../constants/constants'

export async function templateRenderer(requestData: ParsedRequestData): Promise<Buffer | string | void> {
    const theme = ThemePattern[toString(requestData.query.theme)]
    const format = requestData.query as Partial<FormatOptions>
    const data = requestData.data

    const queryOptions = mergeProps<QueryOptions>(profile.routeOptions, {
        theme,
        format,
        data,
    })

    const url = webShotService.createTargetUrl(queryOptions)

    const width = toInt(toString(requestData.query.width))
    const height = toInt(toString(requestData.query.height))

    const selector = toString(requestData.query.selector)
    const fullPage = toBoolean(toString(requestData.query.fullPage))
    const type = ImageContent[toString(requestData.query.type)]
    const encoding = ImageEncoding[toString(requestData.query.encoding)]

    const routeOptions = { url }
    const imageOptions = { width, height }
    const resourceOptions = { selector, fullPage, type, encoding }

    return await webShotService.getScreenshot({ routeOptions, imageOptions, resourceOptions })
}
