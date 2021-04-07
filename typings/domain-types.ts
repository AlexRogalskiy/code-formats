import boxen from 'boxen'

import { Optional } from './standard-types'
import { ScreenshotOptions } from './browser-types'
//--------------------------------------------------------------------------------------------------
/**
 * Headers
 * @desc Type representing headers
 */
export type Headers = Record<string, number | string | string[]>
//--------------------------------------------------------------------------------------------------
/**
 * FontOptions
 * @desc Type representing font options
 */
export type FontOptions = {
    /**
     * Font family
     */
    readonly fontFamily: string
    /**
     * Font data
     */
    readonly fontSrc: string
}
//--------------------------------------------------------------------------------------------------
/**
 * ThemeOptions
 * @desc Type representing theme options
 */
export type ThemeOptions = {
    /**
     * Theme quote text color
     */
    readonly quoteColor?: string
    /**
     * Theme author text color
     */
    readonly authorColor?: string
    /**
     * Theme background color
     */
    readonly bgColor?: string
    /**
     * Theme color pattern
     */
    readonly colorPattern?: string
    /**
     * Theme background opacity
     */
    readonly opacity?: Optional<number>
}
//--------------------------------------------------------------------------------------------------
/**
 * StyleOptions
 * @desc Type representing style options
 */
export type StyleOptions = {
    /**
     * Style font options
     */
    readonly font: FontOptions
    /**
     * Style theme options
     */
    readonly theme: ThemeOptions
}

//--------------------------------------------------------------------------------------------------
/**
 * RouteOptions
 * @desc Type representing route options
 */
export interface RouteOptions {
    /**
     * Route base url.
     */
    readonly url: string
    /**
     * Route format options.
     */
    readonly options?: FormatOptions
}

//--------------------------------------------------------------------------------------------------
/**
 * QueryOptions
 * @desc Type representing query options
 */
export type QueryOptions = RouteOptions & { readonly data: string }
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
 * QueryFormatOptions
 * @desc Type representing query format options
 */
export type QueryFormatOptions = Record<keyof FormatOptions, keyof CarbonFormatOptions>

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
     * Query configuration options.
     */
    readonly queryOptions: Partial<QueryOptions>
    /**
     * Screenshot configuration options.
     */
    readonly screenshotOptions: Partial<ScreenshotOptions>
    /**
     * Style configuration options.
     */
    readonly styleOptions?: Partial<StyleOptions>
    /**
     * Output options
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
