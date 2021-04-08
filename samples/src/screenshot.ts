import { readFile, writeFile } from 'fs'
import { stringify } from 'querystring'
import FormData from 'form-data'

import * as fetchImport from 'node-fetch'

import { promisify } from 'util'

const fetch = fetchImport.default || fetchImport
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

const getScreenshot = async (): Promise<void> => {
    const code = await readFileAsync('./typings/form-data/form-data.d.ts')

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

    const formData = new FormData()
    formData.append('data', Buffer.from('console.log(4)').toString('base64'))
    formData.append('data', code.toString('base64'))

    // const data = `data=${Buffer.from('console.log(4)').toString('base64')}`
    const data = `data=${code.toString('base64')}`

    try {
        const options = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data,
        }

        const response = await fetch(
            `https://styled-code-formats.vercel.app/api?${stringify(params)}`,
            options
        )

        if (response.status === 200) {
            const text = await response.text()
            const imageData = `data:image/png;base64,${text.replaceAll('"', '')}`

            await writeFileAsync('./data/image.txt', imageData)
        } else {
            console.error(response)
        }
    } catch (error) {
        console.error(error)
    }
}

void getScreenshot()
