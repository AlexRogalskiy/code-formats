/**
 * ProfilePattern
 * @desc Enumeration type representing supported profile patterns
 */
export enum ProfilePattern {
    dev = 'dev',
    prod = 'prod',
    test = 'test',
}

//--------------------------------------------------------------------------------------------------
/**
 * ThemePattern
 * @desc Enumeration type representing supported theme patterns
 */
export enum ThemePattern {
    default = 'default',
}

//--------------------------------------------------------------------------------------------------
/**
 * RoutePattern
 * @desc Enumeration type representing supported route patterns
 */
export enum RoutePattern {
    default = 'default',
    file = 'file',
    raw = 'raw',
}

//--------------------------------------------------------------------------------------------------
/**
 * StatusCode
 * @desc Type representing supported status codes
 */
export enum StatusCode {
    OK = 200,
    CREATED = 201,
    UNAUTHORIZED = 401,
    BAD_REQUEST = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    UNPROCESSABLE_ENTITY = 422,
    INTERNAL_SERVER_ERROR = 500,
    SERVICE_UNAVAILABLE = 503,
}

//--------------------------------------------------------------------------------------------------
/**
 * ErrorType
 * @desc Type representing supported errors
 */
export enum ErrorType {
    general_error = 'GeneralError',
    parser_error = 'ParserError',
    validation_error = 'ValidationError',
    request_error = 'RequestError',
    response_error = 'ResponseError',
    parameter_error = 'ParameterError',
    type_error = 'TypeError',
    value_error = 'ValueError',
}

//--------------------------------------------------------------------------------------------------
