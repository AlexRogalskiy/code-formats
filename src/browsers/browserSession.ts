import { Browser, Page } from 'puppeteer'

import {
    ChromeBrowserOptions,
    ImageOptions,
    PuppeteerPageOptions,
    ResourceOptions,
} from '../../typings/browser-types'

import { profile } from '../utils/profiles'
import { logs } from '../utils/loggers'
import { serialize } from '../utils/serializers'
import { mergeProps } from '../utils/commons'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const browserSession = require('puppeteer')

export default class BrowserSession {
    /**
     * Current chromium browserSession instance
     * @private
     */
    private browser: Browser
    /**
     * Current page instance
     * @private
     */
    private page: Page

    /**
     * Obtains browserSession and page object on bootstrap
     * @param options initial input {@link ChromeBrowserOptions}
     */
    async setup(options?: ChromeBrowserOptions): Promise<void> {
        const browserOptions = mergeProps<ChromeBrowserOptions>(
            profile.screenshotOptions.browserOptions,
            options
        )

        logs(`>>> Browser options=${serialize(browserOptions)}`)

        // Launches the Chromium browserSession.
        this.browser = await browserSession.launch(browserOptions)
        this.page = await this.browser.newPage()
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
        resourceOptions: ResourceOptions,
        pageOptions: PuppeteerPageOptions
    ): Promise<Buffer | string | void> {
        await this.page.setViewport(imageOptions)
        await this.page.goto(url, pageOptions)

        return await this.page.screenshot(resourceOptions)
    }

    /**
     * Closes browserSession session on teardown
     */
    async teardown(): Promise<void> {
        logs('Closing remote browserSession session...')

        if (this.page) await this.page.close()
        if (this.browser) await this.browser.close()
    }
}
