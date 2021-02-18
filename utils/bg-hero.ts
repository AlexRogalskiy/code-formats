import { EditorPattern } from '../typings/types'
import { isBlankString, randomEnum, strToEnum } from './commons'

type PatternOperator = (fill: string, opacity: string) => string

type PatternMapper = { [K in EditorPattern]: K }

const patternMapping: PatternMapper = strToEnum(Object.values(EditorPattern))

const getPattern = (pattern: string, opacity: string, colorPattern: string): string => {
    const patternFunc: PatternOperator = isBlankString(pattern)
        ? patternMapping[randomEnum(EditorPattern)]
        : patternMapping[pattern]

    return patternFunc(colorPattern, opacity)
}

export default getPattern
