import { Browser, Page } from 'playwright-core'
import { chromium, LaunchOptions } from 'playwright-chromium'
import { BrowserContext } from 'playwright-core/types/types'

import { ImageOptions, PlaywrightPageOptions, ResourceOptions } from '../../typings/browser-types'

import { mergeProps } from '../utils/commons'
import { profile } from '../utils/profiles'
import { serialize } from '../utils/serializers'
import { logs } from '../utils/loggers'

export default class PlaywrightBrowserSession {
    /**
     * Current chromium browser instance
     * @private
     */
    private browser: Browser
    /**
     * Current chromium browser context
     * @private
     */
    private context: BrowserContext
    /**
     * Current page instance
     * @private
     */
    private page: Page

    /**
     * Obtains browser and page object on bootstrap
     * @param options initial input {@link LaunchOptions}
     */
    async setup(options?: LaunchOptions): Promise<void> {
        const browserOptions: LaunchOptions = mergeProps(profile.screenshotOptions.browserOptions, options)

        logs(`\n>>> Browser options=${serialize(browserOptions)}`)

        // Launches the Chromium browser.
        this.browser = await chromium.launch(browserOptions)
        this.context = await this.browser.newContext()
        this.page = await this.context.newPage()
    }

    /**
     * Creates new page with new context
     */
    async newContextPage(): Promise<Page> {
        const context = await this.browser.newContext()

        return await context.newPage()
    }

    /**
     * Creates page screenshot
     * @param url initial input url {@link string} to fetch from
     * @param imageOptions initial input {@link ImageOptions}
     * @param resourceOptions initial input {@link ResourceOptions}
     * @param pageOptions initial input {@link PageOptions}
     */
    async createScreenshot(
        url: string,
        imageOptions: ImageOptions,
        resourceOptions?: ResourceOptions,
        pageOptions?: PlaywrightPageOptions
    ): Promise<Buffer | string | void> {
        await this.page.setViewportSize(imageOptions)
        await this.page.goto(url, pageOptions)

        return await this.page.screenshot(resourceOptions)
    }

    /**
     * Closes browser session on teardown
     */
    async teardown(): Promise<void> {
        logs('Closing local browser session...')

        if (this.page) await this.page.close()
        if (this.context) await this.context.close()
        if (this.browser) await this.browser.close()
    }
}
