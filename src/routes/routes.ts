import { RouteFunction } from '../../typings/service-types'
import { RoutePattern } from '../../typings/enum-types'
import { Optional } from '../../typings/standard-types'

import { rawController } from '../controllers/raw.controller'
import { fileController } from '../controllers/file.controller'

/**
 * RouteRecord
 * @desc Type representing route config options
 */
export type RouteRecord = Record<RoutePattern, RouteFunction>

/**
 * Route mappings
 * @desc Type representing supported route mappings
 */
const routes: Readonly<RouteRecord> = {
    default: rawController,
    raw: rawController,
    file: fileController,
}

/**
 * Returns {@link RouteFunction} by input {@link RoutePattern} value
 * @param value initial input {@link RoutePattern} to fetch by
 */
export const getRoute = (value: Optional<RoutePattern>): RouteFunction => {
    return value ? routes[value] : routes[RoutePattern.default]
}
