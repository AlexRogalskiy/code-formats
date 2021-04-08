import BaseBrowserSession from '../browsers/baseBrowserSession'
import LocalBrowserSession from '../browsers/localBrowserSession'
import RemoteBrowserSession from '../browsers/remoteBrowserSession'

import { isProd } from './profiles'

export const createBrowserSession = async (): Promise<BaseBrowserSession> => {
    return isProd ? await RemoteBrowserSession.createSession() : await LocalBrowserSession.createSession()
}
