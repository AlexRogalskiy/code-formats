import { ImageOptions, ParsedRequest } from '../typings/types'
import { mergeProps, toFormatString } from './commons'
import { CONFIG } from './config'

export async function codeFormatRenderer(parsedRequest: ParsedRequest): Promise<null> {
    const { category, width, height } = parsedRequest

    const imageOptions: ImageOptions = mergeProps(CONFIG.imageOptions, { width, height })

    console.log(
        `
        >>> Generating quote with parameters:
        category=${category},
        imageOptions=${toFormatString(imageOptions)}
        `
    )

    return null
}
