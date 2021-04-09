import boxen from 'boxen'

import { ScreenshotOptions } from './browser-types'
import { ThemePattern } from './enum-types'
import { Optional } from './standard-types'

/**
 * Headers
 * @desc Type representing headers
 */
export type Headers = Record<string, number | string | string[]>

//--------------------------------------------------------------------------------------------------
/**
 * RouteOptions
 * @desc Type representing route options
 */
export type RouteOptions = {
    /**
     * Route base url.
     */
    readonly url: string
}
//--------------------------------------------------------------------------------------------------
/**
 * ThemeOptions
 * @desc Type representing theme options
 */
export type ThemeOptions = {
    /**
     * Theme pattern.
     */
    readonly theme?: Optional<ThemePattern>
    /**
     * Theme format options.
     */
    readonly format?: FormatOptions
}
//--------------------------------------------------------------------------------------------------
/**
 * PayloadOptions
 * @desc Type representing payload options
 */
export type PayloadOptions = {
    /**
     * Payload data
     */
    readonly data: string
}
//--------------------------------------------------------------------------------------------------
/**
 * QueryOptions
 * @desc Type representing query options
 */
export type QueryOptions = RouteOptions & ThemeOptions & PayloadOptions
//--------------------------------------------------------------------------------------------------
/**
 * CarbonFormatOptions
 * @desc Type representing carbon format options
 */
export type CarbonFormatOptions = Record<string, string | boolean>
//--------------------------------------------------------------------------------------------------
/**
 * FormatOptions
 * @desc Type representing format options
 */
export type FormatOptions = {
    /**
     * Background color
     */
    readonly backgroundColor: string
    /**
     * Drop shadow
     */
    readonly dropShadow: string
    /**
     * Drop shadow blur
     */
    readonly dropShadowBlur: string
    /**
     * Drop shadow offsetY
     */
    readonly dropShadowOffsetY: string
    /**
     * Image export size
     */
    readonly exportSize: string
    /**
     * Font family
     */
    readonly fontFamily: string
    /**
     * Font size
     */
    readonly fontSize: string
    /**
     * Language
     */
    readonly language: string
    /**
     * Line height
     */
    readonly lineHeight: string
    /**
     * Line number
     */
    readonly lineNumber: string
    /**
     * Horizontal padding
     */
    readonly paddingHorizontal: string
    /**
     * Vertical padding
     */
    readonly paddingVertical: string
    /**
     * Image theme
     */
    readonly theme: string
    /**
     * Image squred size
     */
    readonly squaredImage: string
    /**
     * Image width adjustment
     */
    readonly widthAdjustment: string
    /**
     * Window controls
     */
    readonly windowControl: string
    /**
     * Image watermark
     */
    readonly watermark: string
    /**
     * Window theme
     */
    readonly windowTheme: string
}
//--------------------------------------------------------------------------------------------------
/**
 * ThemeFormatOptions
 * @desc Type representing theme format options
 */
export type ThemeFormatOptions = Record<keyof FormatOptions, keyof CarbonFormatOptions>

//--------------------------------------------------------------------------------------------------
/**
 * ProfileOptions
 * @desc Type representing profile options
 */
export type ProfileOptions = {
    /**
     * Route configuration options.
     */
    readonly routeOptions: Partial<RouteOptions>
    /**
     * Screenshot configuration options.
     */
    readonly screenshotOptions: Partial<ScreenshotOptions>
    /**
     * Logging options
     */
    readonly outputOptions?: Partial<boxen.Options>
}
//--------------------------------------------------------------------------------------------------
/**
 * ParsedRequestData
 * @desc Type representing parsed request data
 */
export type ParsedRequestData = {
    /**
     * Request data
     */
    readonly data: string
    /**
     * Request query
     */
    readonly query: Record<string, string | string[]>
}
//--------------------------------------------------------------------------------------------------
