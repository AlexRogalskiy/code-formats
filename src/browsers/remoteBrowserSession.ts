import chromium from 'chrome-aws-lambda'
import { Browser } from 'puppeteer'

import { ChromeBrowserOptions } from '../../typings/browser-types'

import BaseBrowserSession from './baseBrowserSession'

import { mergeProps } from '../utils/commons'
import { profile } from '../utils/profiles'

/**
 * Remote browser session class
 */
export default class RemoteBrowserSession extends BaseBrowserSession {
    /**
     * Obtains remote chromium browser options
     * @private
     */
    private static async getBrowserOptions(): Promise<ChromeBrowserOptions> {
        return {
            args: [
                ...chromium.args,
                '--headless',
                '--no-sandbox',
                '--hide-scrollbars',
                '--disable-gpu',
                '--disable-web-security',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
            ],
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath,
            headless: true,
            ignoreHTTPSErrors: true,
        }
    }

    /**
     * Returns remote {@link Browser} instance by input parameters
     * @param options initial input {@Link ChromeBrowserOptions} to operate by
     */
    protected async createBrowser(options: ChromeBrowserOptions): Promise<Browser> {
        return await chromium.puppeteer.launch(options)
    }

    /**
     * Returns new remote {@link BaseBrowserSession}
     * @param options initial input {@Link ChromeBrowserOptions} to operate by
     */
    static async createSession(options?: ChromeBrowserOptions): Promise<BaseBrowserSession> {
        const browserOptions: ChromeBrowserOptions = mergeProps(
            profile.screenshotOptions.browserOptions,
            await RemoteBrowserSession.getBrowserOptions(),
            options
        )

        return new RemoteBrowserSession(browserOptions)
    }
}
