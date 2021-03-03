import { NowRequest, NowResponse, VercelResponse } from '@vercel/node'

import { codeFormatRenderer } from '../utils/code-format'
import { notBlankOrElse, toString } from '../utils/commons'
import {
    CategoryPattern,
    EditorPattern,
    ImageContent,
    ImageContentType,
    ImageEncoding,
    ImageEncodingType,
} from '../typings/types'
import { CONFIG } from '../utils/config'

export default async function render(req: NowRequest, res: NowResponse): Promise<VercelResponse> {
    try {
        const {
            category,
            pattern,
            width,
            height,
            backgroundColor,
            fontColor,
            opacity,
            colorPattern,
        } = req.query

        const type: ImageContentType = ImageContent[toString(req.query.type)]
        const encoding: ImageEncodingType = ImageEncoding[toString(req.query.encoding)]

        const codeFormat = await codeFormatRenderer({
            category: CategoryPattern[toString(category)] as CategoryPattern,
            pattern: EditorPattern[toString(pattern)] as EditorPattern,
            width: toString(width),
            height: toString(height),
            backgroundColor,
            fontColor,
            opacity,
            colorPattern,
        })

        res.setHeader('Cache-Control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate')
        res.setHeader('Pragma', 'no-cache')
        res.setHeader('Expires', '-1')
        res.setHeader('Content-type', `image/${notBlankOrElse(type, CONFIG.resourceOptions.type)}`)
        res.setHeader(
            'Content-transfer-encoding',
            `${notBlankOrElse(encoding, CONFIG.resourceOptions.encoding)}`
        )
        res.setHeader('X-Powered-By', 'Vercel')

        return res.send(codeFormat)
    } catch (error) {
        return res.send({
            status: 'Error',
            name: error.name,
            message: error.message,
        })
    }
}
