import fetch from 'isomorphic-unfetch'
import _ from 'lodash'

export const random = (max: number): number => {
    return Math.floor(Math.random() * max)
}

export const randomElement = <T>(arr: T[]): T => arr[random(arr.length)]

export const toBase64ImageUrl = async (imgUrl): Promise<string> => {
    const fetchImageUrl = await fetch(imgUrl)
    const responseArrBuffer = await fetchImageUrl.arrayBuffer()

    return `data:${fetchImageUrl.headers.get('Content-Type') || 'image/png'};base64,${Buffer.from(
        responseArrBuffer
    ).toString('base64')}`
}

export const isNonEmptyString = (str: string): boolean => {
    return str !== undefined && str !== null && str.length > 0
}

export const isBlankString = (str: string): boolean => {
    return !str || /^\s*$/.test(str)
}

export const toUrl = (str: string): string => {
    if (isBlankString(str)) throw Error('Source URL should not be blank or empty')
    str = str.startsWith('http') ? str : `http://${str}`
    str = str.endsWith('.json') ? str : `${str}.json`
    return str
}

export const notBlankOrElse = (str: string, defaultValue: string): string => {
    return isBlankString(str) ? defaultValue : str
}

export const toString = (str: string | string[]): string => {
    return Array.isArray(str) ? str[0] : str
}

export const toInt = (str: string, defaultValue?: number): number | undefined => {
    try {
        return parseInt(str) || defaultValue
    } catch (e) {
        return defaultValue
    }
}

export const randomEnum = <T>(anEnum: T): T[keyof T] => {
    const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][]
    const randomIndex = random(enumValues.length)
    return enumValues[randomIndex]
}

export const toFormatString = (obj): string => {
    return `(${objToString(obj)})`
}

const objToString = (obj): string => {
    let str = ''
    for (const p in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, p)) {
            str += `${p} => ${typeof obj[p] === 'object' ? `[${objToString(obj[p])}]` : `${obj[p]},`}`
        }
    }
    return str
}

export const pluck = <T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] => {
    return propertyNames.map(n => o[n])
}

export const mergeProps = <T>(...obj: unknown[]): T => {
    return _.mergeWith({}, ...obj, (o, s) => (_.isNull(s) ? o : s))
}

/**
 * Utility function to create a K:V from a list of strings
 * @param o initial input array to operate by
 */
export const strToEnum = <T extends string>(o: T[]): { [K in T]: K } => {
    return o.reduce((res, key) => {
        res[key] = key
        return res
    }, Object.create(null))
}
