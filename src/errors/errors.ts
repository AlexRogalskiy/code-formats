import { hasProperty } from '../utils/commons'
import { errorLogs } from '../utils/loggers'

import { ErrorType, StatusCode } from '../../typings/enum-types'

/**
 * ErrorData
 * @desc Type representing error data
 */
export type ErrorData = {
    /**
     * Error code
     */
    readonly code: StatusCode
    /**
     * Error description
     */
    readonly description: string
}

/**
 * ErrorCode
 * @desc Type representing error codes
 */
export const ErrorCode: Record<ErrorType, ErrorData> = {
    [ErrorType.general_error]: {
        code: StatusCode.INTERNAL_SERVER_ERROR,
        description: 'General Error',
    },
    [ErrorType.parser_error]: {
        code: StatusCode.UNPROCESSABLE_ENTITY,
        description: 'Parser Error',
    },
    [ErrorType.validation_error]: { code: StatusCode.BAD_REQUEST, description: 'Validation Error' },
    [ErrorType.request_error]: { code: StatusCode.BAD_REQUEST, description: 'Request Error' },
    [ErrorType.response_error]: {
        code: StatusCode.INTERNAL_SERVER_ERROR,
        description: 'Response Error',
    },
    [ErrorType.parameter_error]: { code: StatusCode.BAD_REQUEST, description: 'Parameter Error' },
    [ErrorType.type_error]: { code: StatusCode.BAD_REQUEST, description: 'Type Error' },
    [ErrorType.value_error]: { code: StatusCode.BAD_REQUEST, description: 'Value Error' },
}

/**
 * ExtendableError
 * @desc Class representing extendable error
 */
export class ExtendableError extends Error {
    /**
     * Error data by provided {@link ErrorType}
     */
    readonly data: ErrorData = ErrorCode[this.type]
    /**
     * Error timestamp
     */
    readonly timestamp = new Date().getTime()

    /**
     * Extendable error constructor by input parameters
     * @param type initial input {@link ErrorType}
     * @param message initial input {@link string} message
     */
    constructor(readonly type: ErrorType, readonly message: string) {
        super(message)

        Object.defineProperty(this, 'message', {
            configurable: true,
            enumerable: false,
            value: message,
            writable: true,
        })

        Object.defineProperty(this, 'type', {
            configurable: true,
            enumerable: false,
            value: type,
            writable: true,
        })

        Object.defineProperty(this, 'data', {
            configurable: true,
            enumerable: false,
            value: ErrorCode[type],
            writable: true,
        })

        Object.defineProperty(this, 'name', {
            configurable: true,
            enumerable: false,
            value: this.constructor.name,
            writable: true,
        })

        if (hasProperty(Error, 'captureStackTrace')) {
            Error.captureStackTrace(this, this.constructor)
            return
        }

        Object.defineProperty(this, 'stack', {
            configurable: true,
            enumerable: false,
            value: new Error(message).stack,
            writable: true,
        })

        if (typeof this.stack === 'string') {
            const indexOfMessage = this.stack.indexOf(this.message) + this.message.length
            const thisStackTrace = this.stack.slice(indexOfMessage).split('\n').reverse()

            this.stack = `${this.stack.slice(0, indexOfMessage)}${thisStackTrace.reverse().join('\n')}`
        }
    }
}

/**
 * GeneralError
 * @desc Class representing general error
 */
export class GeneralError extends ExtendableError {
    /**
     * Error arguments
     */
    readonly args: any[] = []

    /**
     * General error constructor by input parameters
     * @param type initial input {@link ErrorType}
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly type: ErrorType, readonly message: string, ...args: any[]) {
        super(type, message)
        this.args = args
    }

    /**
     * Print current logging information
     * @protected
     */
    protected logMessage(): void {
        errorLogs(this.message, this.args)
    }
}

/**
 * ValueError
 * @desc Class representing value error
 */
export class ValueError extends GeneralError {
    /**
     * Value error constructor by input parameters
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly message: string, ...args: any[]) {
        super(ErrorType.value_error, message, args)
    }
}

/**
 * TypeError
 * @desc Class representing type error
 */
export class TypeError extends GeneralError {
    /**
     * Type error constructor by input parameters
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly message: string, ...args: any[]) {
        super(ErrorType.type_error, message, args)
    }
}

/**
 * ValidationError
 * @desc Class representing validation error
 */
export class ValidationError extends GeneralError {
    /**
     * Validation error constructor by input parameters
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly message: string, ...args: any[]) {
        super(ErrorType.validation_error, message, args)
    }
}

/**
 * RequestError
 * @desc Class representing request error
 */
export class RequestError extends GeneralError {
    /**
     * Request error constructor by input parameters
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly message: string, ...args: any[]) {
        super(ErrorType.request_error, message, args)
    }
}

/**
 * ResponseError
 * @desc Class representing request error
 */
export class ResponseError extends GeneralError {
    /**
     * Response error constructor by input parameters
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly message: string, ...args: any[]) {
        super(ErrorType.response_error, message, args)
    }
}

/**
 * UnsupportedParameterError
 * @desc Class representing unsupported parameter error
 */
export class UnsupportedParameterError extends GeneralError {
    /**
     * Unsupported parameter error constructor by input parameters
     * @param parameter: initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly parameter: string, ...args: any[]) {
        super(ErrorType.parameter_error, `Unsupported parameter: ${parameter}`, args)
    }
}

/**
 * Error constructor types
 * @desc Types representing error constructors
 */
export type ExtendableErrorConstructor = typeof ExtendableError
export type GeneralErrorConstructor = typeof GeneralError
export type TypeErrorConstructor = typeof TypeError
export type ValidationErrorConstructor = typeof ValidationError
export type RequestErrorConstructor = typeof RequestError
export type ResponseErrorConstructor = typeof ResponseError
export type UnsupportedParameterErrorConstructor = typeof UnsupportedParameterError

export const valueError = (message: string, ...args: any[]): ValueError => {
    return new ValueError(message, args)
}

export const typeError = (message: string, ...args: any[]): TypeError => {
    return new TypeError(message, args)
}

export const validationError = (message: string, ...args: any[]): ValidationError => {
    return new ValidationError(message, args)
}

export const responseError = (param: string, ...args: any[]): ResponseError => {
    return new ResponseError(param, args)
}

export const requestError = (param: string, ...args: any[]): RequestError => {
    return new RequestError(param, args)
}

export const unsupportedParamError = (param: string, ...args: any[]): UnsupportedParameterError => {
    return new UnsupportedParameterError(param, args)
}
