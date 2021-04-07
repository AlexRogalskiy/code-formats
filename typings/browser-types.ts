import { BrowserOptions, ChromeArgOptions, LaunchOptions, PuppeteerLifeCycleEvent } from 'puppeteer-core'
import { LaunchOptions as PlayLaunchOptions } from 'playwright-chromium'

import { ImageContent, ImageEncoding } from '../src/constants/constants'

//--------------------------------------------------------------------------------------------------
/**
 * ImageContentType
 * @desc Type representing supported image contents
 */
export type ImageContentType = keyof typeof ImageContent

/**
 * ImageEncodingType
 * @desc Type representing supported image encodings
 */
export type ImageEncodingType = keyof typeof ImageEncoding

//--------------------------------------------------------------------------------------------------
/**
 * BrowserType
 * @desc Type representing supported browsers
 */
export enum BrowserType {
    chromium = 'chromium',
    firefox = 'firefox',
}

//--------------------------------------------------------------------------------------------------
/**
 * ChromeBrowserOptions
 * @desc Type representing chrome browser options
 */
export type ChromeBrowserOptions = LaunchOptions & ChromeArgOptions & BrowserOptions
//--------------------------------------------------------------------------------------------------
/**
 * PageOptions
 * @desc Type representing page options
 */
export type PageOptions = {
    /**
     * Page referer.
     */
    readonly referer?: string | undefined
    /**
     * Page loading timeout.
     */
    readonly timeout?: number | undefined
    /**
     * Page loading timeout by event.
     * 'load' | 'domcontentloaded' | 'networkidle'
     */
    readonly waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]
}

/**
 * PlayPageOptions
 * @desc Type representing play page options
 */
export type PlayPageOptions = {
    /**
     * Page referer.
     */
    readonly referer?: string | undefined
    /**
     * Page loading timeout.
     */
    readonly timeout?: number | undefined
    /**
     * Page loading timeout by event.
     * 'load' | 'domcontentloaded' | 'networkidle'
     */
    readonly waitUntil?: 'load' | 'domcontentloaded' | 'networkidle'
}
//--------------------------------------------------------------------------------------------------
export type LocationOptions = {
    /**
     * Generated image name.
     */
    readonly name: string
    /**
     * Generated image path.
     */
    readonly path: string
}
//--------------------------------------------------------------------------------------------------
export type ImageOptions = {
    /**
     * Page width in pixels.
     */
    readonly width: number
    /**
     * Page height in pixels.
     */
    readonly height: number
    /**
     * Device scale factor.
     */
    readonly deviceScaleFactor?: number
}
//--------------------------------------------------------------------------------------------------
export type ImageClipOptions = {
    /**
     * page clip start X-position in pixels.
     */
    readonly x: number
    /**
     * page clip start Y-position in pixels.
     */
    readonly y: number
    /**
     * page clip width in pixels.
     */
    readonly width: number
    /**
     * page clip height in pixels.
     */
    readonly height: number
}

//--------------------------------------------------------------------------------------------------
export type ScreenshotOptions = {
    /**
     * Image configuration options.
     */
    readonly imageOptions: ImageOptions
    /**
     * Image clip configuration options.
     */
    readonly imageClipOptions?: ImageClipOptions
    /**
     * Play browser launch options.
     */
    readonly launchOptions: PlayLaunchOptions
    /**
     * Page configuration options.
     */
    readonly pageOptions?: PageOptions | PlayPageOptions
    /**
     * Browser configuration options.
     */
    readonly browserOptions: ChromeBrowserOptions
    /**
     * Image location options.
     */
    readonly locationOptions: Partial<LocationOptions>
    /**
     * Image resource options.
     */
    readonly resourceOptions: Partial<ResourceOptions>
}

//--------------------------------------------------------------------------------------------------
/**
 * ResourceOptions
 * @desc Type representing resource options
 */
export type ResourceOptions = {
    /**
     * Enable/disable full page view port for screenshot.
     */
    readonly fullPage?: boolean
    /**
     * Screenshot image quality (0-100).
     */
    readonly quality?: number
    /**
     * Omit screenshot background.
     */
    readonly omitBackground?: boolean
    /**
     * Page selector to fetch by
     */
    readonly selector: string
    /**
     * Image content type.
     */
    readonly type: ImageContentType
    /**
     * Image content transfer encoding.
     */
    readonly encoding: ImageEncodingType
}

//--------------------------------------------------------------------------------------------------
export type ParsedRequest = {
    /**
     * Parsed image url.
     */
    url: string
    /**
     * Parsed image options.
     */
    imageOptions?: ImageOptions
    /**
     * Parsed resource options.
     */
    resourceOptions?: ResourceOptions
    /**
     * Parsed page options.
     */
    pageOptions?: PageOptions
}
//--------------------------------------------------------------------------------------------------
