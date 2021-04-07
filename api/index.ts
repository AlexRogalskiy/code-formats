import { NowRequest, NowResponse } from '@vercel/node'

import { RoutePattern } from '../typings/enum-types'

import { getRoute } from '../src/routes/routes'
import { toString } from '../src/utils/commons'

export default async function render(req: NowRequest, res: NowResponse): Promise<NowResponse | void> {
    try {
        const routePattern = RoutePattern[toString(req.query.mode)]

        const route = getRoute(routePattern)

        return await route(req, res)
    } catch (error) {
        return res.send({
            status: 'Error',
            name: error.name,
            message: error.message,
        })
    }
}
