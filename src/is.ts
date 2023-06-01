import type { Primitive } from './types'

const getType = (v: any): string =>
  Object.prototype.toString.call(v).slice(8, -1)

/**
 * Checks if the code is running in the browser.
 */
export const isClient = typeof window !== 'undefined'

/**
 * Returns a boolean if the given value is a `null`.
 */
export const isNull = (v: any): v is null => v === null

/**
 * Returns a boolean if the given value is a `undefined`.
 */
export const isUndefined = (v: any): v is undefined => typeof v === 'undefined'

/**
 * Returns a boolean if the given value is a `string`.
 */
export const isString = (v: any): v is string => typeof v === 'string'

/**
 * Returns a boolean if the given value is an empty `string`.
 */
export const isStringEmpty = (v: any): v is string =>
  isString(v) && v.trim().length === 0

/**
 * Returns a boolean if the given value is a `boolean`.
 */
export const isBoolean = (v: any): v is boolean => typeof v === 'boolean'

/**
 * Returns a boolean if the given value is a `number`.
 */
export const isNumber = (v: any): v is number =>
  typeof v === 'number' && !isNaN(v)

/**
 * Returns a boolean if the given value is a `array`.
 */
export const isArray = (v: any): v is any[] => Array.isArray(v)

/**
 * Returns a boolean if the given value is an empty `array`.
 */
export const isArrayEmpty = (v: any): v is any[] => isArray(v) && v.length === 0

/**
 * Returns a boolean if the given value is a `object`.
 */
export const isObject = (v: any): v is object => getType(v) === 'Object'

/**
 * Returns a boolean if the given value is an empty `object`.
 */
export const isObjectEmpty = (v: any): v is object =>
  isObject(v) && Object.keys(v).length === 0

/**
 * Returns a boolean if the given value is a `Function`.
 */
export const isFunction = (v: any): v is (...args: any[]) => unknown =>
  v instanceof Function

/**
 * Returns a boolean if the given value is a `NaN`.
 */
export const isNaNValue = (v: any): v is typeof NaN =>
  typeof v === 'number' && isNaN(v)

/**
 * Returns a boolean if the given value is a `RegExp`.
 */
export const isRegExp = (v: any): v is RegExp => v instanceof RegExp

/**
 * Returns a boolean if the given value is a `map`.
 */
export const isMap = (v: any): v is Map<any, any> => v instanceof Map

/**
 * Returns a boolean if the given value is a `set`.
 */
export const isSet = (v: any): v is Set<any> => v instanceof Set

/**
 * Returns a boolean if the given value is a `symbol`.
 */
export const isSymbol = (v: any): v is symbol => getType(v) === 'Symbol'

/**
 * Returns a boolean if the given value is a `Date`.
 */
export const isDate = (v: any): v is Date =>
  v instanceof Date && !isNaN(v.valueOf())

/**
 * Returns a boolean if the given value is a `bigint`.
 */
export const isBigint = (v: any): v is bigint => typeof v === 'bigint'

/**
 * Returns a boolean if the given value is a `Infinity`.
 */
export const isInfinity = (v: any): v is number =>
  v === Infinity || v === -Infinity

/**
 * Returns a boolean if the given value is a `URL`.
 */
export const isURL = (v: any): v is URL => v instanceof URL

/**
 * Returns a boolean if the given value is a `Error`.
 */
export const isError = (v: any): v is Error => v instanceof Error

/**
 * Returns a boolean if the given value is a `Primitive`.
 */
export const isPrimitive = (v: any): v is Primitive =>
  isString(v) ||
  isNumber(v) ||
  isBigint(v) ||
  isBoolean(v) ||
  isSymbol(v) ||
  isNull(v) ||
  isUndefined(v)

/**
 * Returns a boolean if the given value is a `Element`.
 */
export const isElement = (v: any): v is Element => v instanceof Element

/**
 * Returns a boolean if the given value is a `NodeList`.
 */
export const isNodeList = (v: any): v is NodeList => v instanceof NodeList

/**
 * Returns a boolean if the given value is an empty `NodeList`.
 */
export const isNodeListEmpty = (v: any): v is NodeList =>
  isNodeList(v) && v.length === 0

/**
 * Returns a boolean if the given value is a `HTMLCollection`.
 */
export const isHtmlCollection = (v: any): v is HTMLCollection =>
  v instanceof HTMLCollection

/**
 * Returns a boolean if the given value is an empty `HTMLCollection`.
 */
export const isHtmlCollectionEmpty = (v: any): v is HTMLCollection =>
  isHtmlCollection(v) && v.length === 0
