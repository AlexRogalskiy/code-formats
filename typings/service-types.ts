import { NowRequest, NowResponse } from '@vercel/node'

/**
 * RouteFunction
 * @desc Route function type representing single unit of work per request
 */
export type RouteFunction = (req: NowRequest, res: NowResponse) => Promise<NowResponse | void>
//--------------------------------------------------------------------------------------------------
