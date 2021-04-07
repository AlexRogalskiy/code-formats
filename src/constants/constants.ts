import boxen from 'boxen'

import { ChromeArgOptions, LaunchOptions } from 'puppeteer-core'

import { Headers, CarbonFormatOptions, QueryFormatOptions, RouteOptions } from '../../typings/domain-types'
import { ImageOptions, LocationOptions, PageOptions, ResourceOptions } from '../../typings/browser-types'

import { strToEnum } from '../utils/commons'

/**
 * Image supported content types
 */
export const ImageContent = strToEnum(['jpeg', 'png'])

/**
 * Image supported encoding types
 */
export const ImageEncoding = strToEnum(['base64', 'binary'])

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
 * Launch configuration options
 */
export const LAUNCH_OPTIONS: Readonly<LaunchOptions> = {
    // empty
}

/**
 * Page configuration options
 */
export const PAGE_OPTIONS: Readonly<PageOptions> = {
    waitUntil: 'domcontentloaded',
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
export const BROWSER_OPTIONS: Readonly<LaunchOptions & ChromeArgOptions> = {
    headless: true,
    devtools: false,
    args: [
        '--hide-scrollbars',
        '--disable-web-security',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--headless',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--hide-scrollbars',
        '--disable-web-security',
    ],
    ignoreDefaultArgs: ['--disable-extensions'],
}

/**
 * Carbon format configuration options
 */
export const QUERY_OPTIONS: Readonly<CarbonFormatOptions> = {
    bg: '#FFFFFF',
    ds: false,
    dsblur: '50px',
    dsyoff: '20px',
    es: '2x',
    fm: 'Fira Code',
    fs: '18px',
    l: 'auto',
    lh: '110%',
    ln: false,
    pv: '0',
    ph: '0',
    t: 'material',
    si: false,
    wa: true,
    wc: true,
    wt: 'none',
    wm: false,
}

/**
 * Query format configuration mappings
 */
export const QUERY_FORMAT_MAPPINGS: Readonly<QueryFormatOptions> = {
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
export const RESPONSE_HEADERS: Headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Cache-Control': 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '-1',
    'Content-type': 'application/json',
    'X-Powered-By': 'Vercel',
}
