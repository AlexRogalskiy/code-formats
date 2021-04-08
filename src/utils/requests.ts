import { NowResponse } from '@vercel/node'

import fetch from 'isomorphic-unfetch'

import { GeneralError, ResponseError } from '../errors/errors'
import { errorLogs } from './loggers'
import { isBlankString } from './validators'

import { RESPONSE_HEADERS } from '../constants/constants'

export const getApiUrl = (baseUrl: string, query: string): string => `${baseUrl}?${query}`

export const sendResponse = (res: NowResponse, error: GeneralError): NowResponse => {
    return res.status(error['code']).send({
        type: error.type,
        name: error.name,
        message: error.message,
    })
}

export const setHeaders = <T>(
    res: T,
    values: Record<string, number | string | string[]> = RESPONSE_HEADERS
): void => {
    for (const [key, value] of Object.entries(values)) {
        setHeader(key, value, res)
    }
}

export const setHeader = <T>(key: string, value: number | string | string[], headers: T): T => {
    if (Array.isArray(headers)) {
        headers.push([key, value])
    } else if (Object.prototype.hasOwnProperty.call(headers, 'setHeader')) {
        headers['setHeader'](key, value)
    } else {
        headers[key] = value
    }

    return headers
}

export const isResponseOk = (response: Response): boolean => {
    const statusCode = response.status
    const limitStatusCode = response.redirected ? 299 : 399

    return (statusCode >= 200 && statusCode <= limitStatusCode) || statusCode === 304
}

export const checkStatus = async (response: Response): Promise<Response> => {
    if (isResponseOk(response)) {
        return response
    }

    const error = new ResponseError(response.statusText, response)

    return Promise.reject(error)
}

export const fetchAsText = async (url: string, options: RequestInit = {}): Promise<string> => {
    try {
        const response = await fetch(url, options)
        const data = await checkStatus(response)

        return await data.text()
    } catch (error) {
        errorLogs(`Cannot fetch request by url: ${url}, message: ${error.message}`)
        throw error
    }
}

export const fetchAsJson = async (url: string, options: RequestInit = {}): Promise<any> => {
    try {
        const response = await fetch(url, options)
        const data = await checkStatus(response)

        return await data.json()
    } catch (error) {
        errorLogs(`Cannot fetch request by url: ${url}, message: ${error.message}`)
        throw error
    }
}

export const jsonFromURL = async (url: string, param: string): Promise<string> => {
    if (param) {
        url += encodeURIComponent(param)
    }

    const option = {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await fetch(url, option)

    return await res.json()
}

export const toBase64ImageUrl = async (request: RequestInfo): Promise<string> => {
    const fetchImageUrl = await fetch(request)
    const responseArrBuffer = await fetchImageUrl.arrayBuffer()

    return `data:${fetchImageUrl.headers.get('Content-Type') || 'image/png'};base64,${Buffer.from(
        responseArrBuffer
    ).toString('base64')}`
}

export const toFormatUrl = (str: string, prefix = 'http', suffix = '.json'): string => {
    if (isBlankString(str)) throw new Error('Source URL should not be blank or empty')
    str = str.startsWith(prefix) ? str : `${prefix}://${str}`
    str = str.endsWith(suffix) ? str : `${str}${suffix}`
    return str
}
