import { Browser } from 'puppeteer'

import { ChromeBrowserOptions, ImageOptions, PageOptions, ResourceOptions } from '../../typings/browser-types'

import { logs } from '../utils/loggers'
import { serialize } from '../utils/serializers'
import { mergeProps } from '../utils/commons'

import { responseError } from '../errors/errors'

/**
 * Base browser session class
 */
export default abstract class BaseBrowserSession {
    /**
     * Current chromium browser
     * @private
     */
    protected browser: Browser

    /**
     * Base browser session constructor by input {@link ChromeBrowserOptions}
     * @constructor initial input {@link ChromeBrowserOptions} to operate by
     */
    protected constructor(private readonly options: ChromeBrowserOptions) {
        logs(`>>> Initializing browser context with options => ${serialize(options)}`)
    }

    /**
     * Creates browser session
     */
    async setup(): Promise<void> {
        this.browser = await this.createBrowser(this.options)
    }

    /**
     * Creates new screenshot by input parameters
     * @param url initial input {@link string} url to fetch from
     * @param imageOptions initial input {@link ImageOptions}
     * @param resourceOptions initial input {@link ResourceOptions}
     * @param pageOptions initial input {@link PageOptions}
     */
    async createScreenshot(
        url: string,
        imageOptions: ImageOptions,
        resourceOptions: ResourceOptions,
        pageOptions: PageOptions
    ): Promise<Buffer | string | void> {
        const page = await this.browser.newPage()

        await page.setViewport(imageOptions)
        await page.goto(url, pageOptions)

        // await page.evaluate(() => document.querySelector(resourceOptions.selector))
        const exportContainer = await page.waitForSelector(resourceOptions.selector)

        if (!exportContainer) {
            throw responseError(`Cannot get page range  by selector ${resourceOptions.selector}`)
        }

        const elementBounds = await exportContainer.boundingBox()

        if (!elementBounds) {
            throw responseError('Cannot get export container bounding box')
        }

        const options = mergeProps<ResourceOptions>(resourceOptions, {
            clip: {
                ...elementBounds,
                /**
                 * Little hack to avoid black borders:
                 * https://github.com/mixn/carbon-now-cli/issues/9#issuecomment-414334708
                 */
                x: Math.round(elementBounds.x),
                height: Math.round(elementBounds.height) - 1,
            },
        })

        return await exportContainer.screenshot(options)
    }

    /**
     * Closes browser session
     */
    async teardown(): Promise<void> {
        logs('Closing browser session...')

        if (this.browser) await this.browser.close()
    }

    /**
     * Returns {@link Browser} instance by input parameters
     * @param options initial input {@Link ChromeBrowserOptions} to operate by
     */
    protected abstract createBrowser(options: ChromeBrowserOptions): Promise<Browser>
}
