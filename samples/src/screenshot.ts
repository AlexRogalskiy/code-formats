import { readFile } from 'fs'
import { stringify } from 'querystring'

import * as fetchImport from 'isomorphic-unfetch'

import { promisify } from 'util'

const fetch = fetchImport.default || fetchImport
const readFileAsync = promisify(readFile)

const getScreenshot = async (): Promise<void> => {
    const code = await readFileAsync('./src/screenshot.ts')

    const language = 'ts'

    const params = {
        backgroundColor: '#E6EDF8',
        dropShadow: true,
        dropShadowBlurRadius: '68px',
        dropShadowOffsetY: '20px',
        fontFamily: 'Fira Code',
        fontSize: '14px',
        lineHeight: '133%',
        lineNumbers: false,
        paddingHorizontal: '35px',
        paddingVertical: '49px',
        squaredImage: false,
        theme: 'nord',
        widthAdjustment: true,
        language,
    }

    try {
        const option = {
            method: 'POST',
            body: code.toString('base64'),
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response = await fetch(
            `https://styled-code-formats.vercel.app/api?${stringify(params)}`,
            option
        )

        if (response.status === 200) {
            console.log(response)
        } else {
            console.error(response)
        }
    } catch (error) {
        console.error(error)
    }
}

void getScreenshot()
