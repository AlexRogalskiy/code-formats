import { strToEnum } from '../utils/commons'

export enum EditorPattern {
    plus = 'plus',
    topography = 'topography',
}

export enum CategoryPattern {
    general = 'general',
    life = 'life',
    success = 'success',
    motivational = 'motivational',
    fun = 'fun',
    programming = 'programming',
    entrepreneurship = 'entrepreneurship',
}

export interface ParsedRequest {
    category?: CategoryPattern | undefined
    width?: string
    height?: string
    colorPattern?: string | string[]
    fontColor?: string | string[]
    backgroundColor?: string | string[]
    pattern?: EditorPattern | undefined
    opacity?: string | string[]
}

export interface ColorOptions {
    readonly colorPattern: string | string[]
    readonly fontColor: string | string[]
    readonly backgroundColor: string | string[]
    readonly opacity: string | string[]
    readonly pattern?: string
}

export interface RouteOptions {
    /**
     * Snippet editor url.
     */
    readonly url: string
}

export interface LocationOptions {
    /**
     * Generated image name.
     */
    readonly name: string
    /**
     * Generated image path.
     */
    readonly path: string
}

export interface ImageOptions {
    /**
     * Page width in pixels.
     */
    readonly width: number
    /**
     * Page height in pixels.
     */
    readonly height: number
}

export interface ResourceOptions {
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
     * Image content type.
     */
    readonly type: ImageContentType
    /**
     * Image content transfer encoding.
     */
    readonly encoding: ImageEncodingType
}

export interface ConfigOptions {
    /**
     * Route configuration options.
     */
    readonly routeOptions: RouteOptions
    /**
     * Location configuration options.
     */
    readonly locationOptions: LocationOptions
    /**
     * Image configuration options.
     */
    readonly imageOptions: ImageOptions
    /**
     * Resource configuration options.
     */
    readonly resourceOptions: ResourceOptions
}

export const ImageContent = strToEnum(['jpeg', 'png'])
export type ImageContentType = keyof typeof ImageContent

export const ImageEncoding = strToEnum(['base64', 'binary'])
export type ImageEncodingType = keyof typeof ImageEncoding
