import { ImageOptions, PageOptions, ParsedRequest, ResourceOptions } from '../../typings/browser-types'

import { getSession, profile } from '../utils/profiles'
import { mergeProps } from '../utils/commons'
import { boxenLogs } from '../utils/loggers'
import { serialize } from '../utils/serializers'

const createScreenshot = async (parsedRequest: Required<ParsedRequest>): Promise<Buffer | string | void> => {
    boxenLogs(`>>> Generating screenshot with parameters: ${serialize(parsedRequest)}`)

    return await getSessionScreenshot(parsedRequest)
}

const getSessionScreenshot = async (
    parsedRequest: Required<ParsedRequest>
): Promise<Buffer | string | void> => {
    const { url, imageOptions, resourceOptions, pageOptions } = parsedRequest

    const session = await getSession()

    try {
        await session.setup()

        return await session.createScreenshot(url, imageOptions, resourceOptions, pageOptions)
    } finally {
        await session.teardown()
    }
}

export async function screenshotRenderer(parsedRequest: ParsedRequest): Promise<Buffer | string | void> {
    const { imageOptions, resourceOptions, pageOptions } = profile.screenshotOptions

    const request: Required<ParsedRequest> = {
        url: parsedRequest.url,
        imageOptions: mergeProps<ImageOptions>(imageOptions, parsedRequest.imageOptions),
        resourceOptions: mergeProps<ResourceOptions>(resourceOptions, parsedRequest.resourceOptions),
        pageOptions: mergeProps<PageOptions>(pageOptions, parsedRequest.pageOptions),
    }

    return await createScreenshot(request)
}
