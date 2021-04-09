import { BrowserOptions, ChromeArgOptions, LaunchOptions, PuppeteerLifeCycleEvent } from 'puppeteer-core'
import { LaunchOptions as PlayLaunchOptions } from 'playwright-chromium'

import { Keys, Optional, Undef } from './standard-types'
import { ThemePattern } from './enum-types'
import { RouteOptions } from './domain-types'

import { IMAGE_CONTENT, IMAGE_ENCODING } from '../src/constants/constants'

//--------------------------------------------------------------------------------------------------
/**
 * ImageContentType
 * @desc Type representing supported image contents
 */
export type ImageContentType = Keys<typeof IMAGE_CONTENT>

/**
 * ImageEncodingType
 * @desc Type representing supported image encodings
 */
export type ImageEncodingType = Keys<typeof IMAGE_ENCODING>

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
 * @desc Type representing page configuration options
 */
export type PageOptions<T> = {
    /**
     * Page referer.
     */
    readonly referer?: Undef<string>
    /**
     * Page loading timeout.
     */
    readonly timeout?: Undef<number>
    /**
     * Page loading timeout by DOM event.
     */
    readonly waitUntil?: T
}

/**
 * PuppeteerPageOptions
 * @desc Type representing puppeteer page configuration options
 */
export type PuppeteerPageOptions = PageOptions<PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]>

/**
 * PlaywrightPageOptions
 * @desc Type representing playwright page configuration options
 */
export type PlaywrightPageOptions = PageOptions<'load' | 'domcontentloaded' | 'networkidle'>

/**
 * GeneralPageOptions
 * @desc Type representing general page configuration options
 */
export type GeneralPageOptions = PuppeteerPageOptions | PlaywrightPageOptions
//--------------------------------------------------------------------------------------------------
/**
 * LocationOptions
 * @desc Type representing location options
 */
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
/**
 * ImageOptions
 * @desc Type representing image options
 */
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
/**
 * ImageClipOptions
 * @desc Type representing image clip options
 */
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
/**
 * ScreenshotOptions
 * @desc Type representing screenshot options
 */
export type ScreenshotOptions = {
    /**
     * Image configuration options.
     */
    readonly imageOptions?: Partial<ImageOptions>
    /**
     * Image clip configuration options.
     */
    readonly imageClipOptions?: Partial<ImageClipOptions>
    /**
     * Play browser launch options.
     */
    readonly playLaunchOptions?: Partial<PlayLaunchOptions>
    /**
     * Page configuration options.
     */
    readonly pageOptions?: Partial<GeneralPageOptions>
    /**
     * Browser configuration options.
     */
    readonly browserOptions?: Partial<ChromeBrowserOptions>
    /**
     * Image location options.
     */
    readonly locationOptions?: Partial<LocationOptions>
    /**
     * Image resource options.
     */
    readonly resourceOptions?: Partial<ResourceOptions>
}

//--------------------------------------------------------------------------------------------------
/**
 * ThemeOptions
 * @desc Type representing theme options
 */
export type ThemeOptions = {
    /**
     * Page theme
     */
    readonly theme: Optional<ThemePattern>
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
/**
 * RequestOptions
 * @desc Type representing request options
 */
export type RequestOptions = {
    /**
     * Parsed image url.
     */
    readonly routeOptions: RouteOptions
    /**
     * Parsed image options.
     */
    readonly imageOptions?: ImageOptions
    /**
     * Parsed resource options.
     */
    readonly resourceOptions?: ResourceOptions
    /**
     * Parsed page options.
     */
    readonly pageOptions?: GeneralPageOptions
}
//--------------------------------------------------------------------------------------------------
