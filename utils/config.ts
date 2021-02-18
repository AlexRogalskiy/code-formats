import { ConfigOptions } from '../typings/types'

export const CONFIG: ConfigOptions = {
    routeOptions: {
        url: 'https://snippet-editor.vercel.app/',
    },
    locationOptions: {
        name: 'screenshot',
        path: 'images',
    },
    imageOptions: {
        width: 800,
        height: 800,
    },
    resourceOptions: {
        fullPage: false,
        type: 'png',
        encoding: 'binary',
    },
}
