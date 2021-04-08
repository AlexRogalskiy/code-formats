import { NowRequest, NowResponse } from '@vercel/node'

import { RoutePattern } from '../typings/enum-types'

import { getRoute } from '../src/routes/routes'
import { single } from '../src/utils/commons'
import { sendResponse } from '../src/utils/requests'

import { responseError } from '../src/errors/errors'

export default async function render(req: NowRequest, res: NowResponse): Promise<NowResponse | void> {
    try {
        const routePattern = RoutePattern[single(req.query.mode)]

        const route = getRoute(routePattern)

        return await route(req, res)
    } catch (error) {
        return sendResponse(res, responseError(error.message))
    }
}
