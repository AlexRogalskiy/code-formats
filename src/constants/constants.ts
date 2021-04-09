import boxen from 'boxen'

import { LaunchOptions as PlayLaunchOptions } from 'playwright-chromium'

import { Headers, RouteOptions, ThemeFormatOptions } from '../../typings/domain-types'
import {
    ChromeBrowserOptions,
    ImageOptions,
    LocationOptions,
    PuppeteerPageOptions,
    ResourceOptions,
    ScreenshotOptions,
} from '../../typings/browser-types'

import { strToEnum } from '../utils/commons'

/**
 * Image supported content types
 */
export const IMAGE_CONTENT = strToEnum(['jpeg', 'png'])

/**
 * Image supported encoding types
 */
export const IMAGE_ENCODING = strToEnum(['base64', 'binary'])

/**
 * Output configuration options
 */
export const OUTPUT_OPTIONS: Readonly<boxen.Options> = {
    padding: 1,
    margin: 1,
    borderStyle: 'single',
    borderColor: 'yellow',
}

/**
 * Play launch configuration options
 */
export const PLAY_LAUNCH_OPTIONS: Readonly<PlayLaunchOptions> = {
    chromiumSandbox: false,
}

/**
 * Page configuration options
 */
export const PAGE_OPTIONS: Readonly<PuppeteerPageOptions> = {
    waitUntil: 'load',
}

/**
 * Image configuration options
 */
export const IMAGE_OPTIONS: Readonly<ImageOptions> = {
    width: 2560,
    height: 1080,
    deviceScaleFactor: 2,
}

/**
 * Route configuration options
 */
export const ROUTE_OPTIONS: Readonly<RouteOptions> = {
    url: 'https://snippet-editor.vercel.app/',
}
/**
 * Location configuration options
 */
export const LOCATION_OPTIONS: Readonly<LocationOptions> = {
    name: 'screenshot',
    path: 'images',
}

/**
 * Resource configuration options
 */
export const RESOURCE_OPTIONS: Readonly<ResourceOptions> = {
    fullPage: false,
    type: 'png',
    encoding: 'binary',
    selector: '#export-container',
}

/**
 * Browser configuration options
 */
export const BROWSER_OPTIONS: Readonly<ChromeBrowserOptions> = {
    headless: true,
    devtools: false,
    args: [
        '--headless',
        '--no-sandbox',
        '--disable-gpu',
        '--hide-scrollbars',
        '--disable-web-security',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
    ],
    ignoreDefaultArgs: ['--disable-extensions'],
}

/**
 * Query format mappings
 */
export const QUERY_FORMAT_MAPPINGS: Readonly<ThemeFormatOptions> = {
    backgroundColor: 'bg',
    dropShadow: 'ds',
    dropShadowBlur: 'dsblur',
    dropShadowOffsetY: 'dsyoff',
    exportSize: 'es',
    fontFamily: 'fm',
    fontSize: 'fs',
    language: 'l',
    lineHeight: 'lh',
    lineNumber: 'ln',
    paddingHorizontal: 'ph',
    paddingVertical: 'pv',
    theme: 't',
    squaredImage: 'si',
    widthAdjustment: 'wa',
    windowControl: 'wc',
    watermark: 'wm',
    windowTheme: 'wt',
}

/**
 * Response headers
 */
export const RESPONSE_HEADERS: Readonly<Headers> = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Cache-Control': 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '-1',
    'Content-type': 'application/json',
    'X-Powered-By': 'Vercel',
}

/**
 * Screenshot configuration options
 */
export const SCREENSHOTS_OPTIONS: Readonly<ScreenshotOptions> = {
    playLaunchOptions: PLAY_LAUNCH_OPTIONS,
    browserOptions: BROWSER_OPTIONS,
    locationOptions: LOCATION_OPTIONS,
    resourceOptions: RESOURCE_OPTIONS,
    imageOptions: IMAGE_OPTIONS,
    pageOptions: PAGE_OPTIONS,
}
