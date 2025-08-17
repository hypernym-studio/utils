import { toString } from '@/base'
import type { Primitive } from '@/types'

/**
 * Checks if the code is running in the browser.
 *
 * @example
 *
 * ```ts
 * import { isBrowser } from '@hypernym/utils'
 *
 * isBrowser // true
 * ```
 */
export const isBrowser = typeof window !== 'undefined'

/**
 * Returns a boolean if the given value is a `null`.
 *
 * @example
 *
 * ```ts
 * import { isNull } from '@hypernym/utils'
 *
 * isNull(null) // true
 * ```
 */
export const isNull = (v: any): v is null => v === null

/**
 * Returns a boolean if the given value is a `undefined`.
 *
 * @example
 *
 * ```ts
 * import { isUndefined } from '@hypernym/utils'
 *
 * isUndefined(undefined) // true
 * ```
 */
export const isUndefined = (v: any): v is undefined => typeof v === 'undefined'

/**
 * Returns a boolean if the given value is a `string`.
 *
 * @example
 *
 * ```ts
 * import { isString } from '@hypernym/utils'
 *
 * isString('@hypernym/utils') // true
 * ```
 */
export const isString = (v: any): v is string => typeof v === 'string'

/**
 * Returns a boolean if the given value is an empty `string`.
 *
 * @example
 *
 * ```ts
 * import { isStringEmpty } from '@hypernym/utils'
 *
 * isStringEmpty('') // true
 * ```
 */
export const isStringEmpty = (v: any): v is string =>
  isString(v) && v.trim().length === 0

/**
 * Returns a boolean if the given value is a `boolean`.
 *
 * @example
 *
 * ```ts
 * import { isBoolean } from '@hypernym/utils'
 *
 * isBoolean(true) // true
 * ```
 */
export const isBoolean = (v: any): v is boolean => typeof v === 'boolean'

/**
 * Returns a boolean if the given value is a `true`.
 *
 * @example
 *
 * ```ts
 * import { isTrue } from '@hypernym/utils'
 *
 * isTrue(true) // true
 * ```
 */
export const isTrue = (v: any): v is true => v === true

/**
 * Returns a boolean if the given value is a `false`.
 *
 * @example
 *
 * ```ts
 * import { isFalse } from '@hypernym/utils'
 *
 * isFalse(false) // true
 * ```
 */
export const isFalse = (v: any): v is false => v === false

/**
 * Returns a boolean if the given value is a `number`.
 *
 * @example
 *
 * ```ts
 * import { isNumber } from '@hypernym/utils'
 *
 * isNumber(33) // true
 * ```
 */
export const isNumber = (v: any): v is number =>
  typeof v === 'number' && !isNaN(v)

/**
 * Returns a boolean if the given value is a `array`.
 *
 * @example
 *
 * ```ts
 * import { isArray } from '@hypernym/utils'
 *
 * isArray([]) // true
 * ```
 */
export const isArray = (v: any): v is any[] => Array.isArray(v)

/**
 * Returns a boolean if the given value is an empty `array`.
 *
 * @example
 *
 * ```ts
 * import { isArrayEmpty } from '@hypernym/utils'
 *
 * isArrayEmpty([]) // true
 * ```
 */
export const isArrayEmpty = (v: any): v is any[] => isArray(v) && v.length === 0

/**
 * Returns a boolean if the given value is a `object`.
 *
 * @example
 *
 * ```ts
 * import { isObject } from '@hypernym/utils'
 *
 * isObject({}) // true
 * ```
 */
export const isObject = (v: any): v is object => toString(v) === 'Object'

/**
 * Returns a boolean if the given value is an empty `object`.
 *
 * @example
 *
 * ```ts
 * import { isObjectEmpty } from '@hypernym/utils'
 *
 * isObjectEmpty({}) // true
 * ```
 */
export const isObjectEmpty = (v: any): v is object =>
  isObject(v) && Object.keys(v).length === 0

/**
 * Returns a boolean if the given value is a `Function`.
 *
 * @example
 *
 * ```ts
 * import { isFunction } from '@hypernym/utils'
 *
 * isFunction(() => {}) // true
 * ```
 */
export const isFunction = (v: any): v is (...args: any[]) => unknown =>
  v instanceof Function

/**
 * Returns a boolean if the given value is a `NaN`.
 *
 * @example
 *
 * ```ts
 * import { isNaNValue } from '@hypernym/utils'
 *
 * isNaNValue(NaN) // true
 * ```
 */
export const isNaNValue = (v: any): v is typeof NaN =>
  typeof v === 'number' && isNaN(v)

/**
 * Returns a boolean if the given value is a `RegExp`.
 *
 * @example
 *
 * ```ts
 * import { isRegExp } from '@hypernym/utils'
 *
 * isRegExp(/^hypernym/) // true
 * ```
 */
export const isRegExp = (v: any): v is RegExp => v instanceof RegExp

/**
 * Returns a boolean if the given value is a `Map`.
 *
 * @example
 *
 * ```ts
 * import { isMap } from '@hypernym/utils'
 *
 * isMap(new Map()) // true
 * ```
 */
export const isMap = (v: any): v is Map<any, any> => v instanceof Map

/**
 * Returns a boolean if the given value is a `WeakMap`.
 *
 * @example
 *
 * ```ts
 * import { isWeakMap } from '@hypernym/utils'
 *
 * isWeakMap(new WeakMap()) // true
 * ```
 */
export const isWeakMap = (v: any): v is WeakMap<any, any> =>
  v instanceof WeakMap

/**
 * Returns a boolean if the given value is a `Set`.
 *
 * @example
 *
 * ```ts
 * import { isSet } from '@hypernym/utils'
 *
 * isSet(new Set()) // true
 * ```
 */
export const isSet = (v: any): v is Set<any> => v instanceof Set

/**
 * Returns a boolean if the given value is a `WeakSet`.
 *
 * @example
 *
 * ```ts
 * import { isWeakSet } from '@hypernym/utils'
 *
 * isWeakSet(new WeakSet()) // true
 * ```
 */
export const isWeakSet = (v: any): v is WeakSet<any> => v instanceof WeakSet

/**
 * Returns a boolean if the given value is a `symbol`.
 *
 * @example
 *
 * ```ts
 * import { isSymbol } from '@hypernym/utils'
 *
 * isSymbol(Symboly('hypernym')) // true
 * ```
 */
export const isSymbol = (v: any): v is symbol => toString(v) === 'Symbol'

/**
 * Returns a boolean if the given value is a `Date`.
 *
 * @example
 *
 * ```ts
 * import { isDate } from '@hypernym/utils'
 *
 * isDate(new Date()) // true
 * ```
 */
export const isDate = (v: any): v is Date =>
  v instanceof Date && !isNaN(v.valueOf())

/**
 * Returns a boolean if the given value is a `bigint`.
 *
 * @example
 *
 * ```ts
 * import { isBigInt } from '@hypernym/utils'
 *
 * isBigInt(1n) // true
 * ```
 */
export const isBigInt = (v: any): v is bigint => typeof v === 'bigint'

/**
 * Returns a boolean if the given value is a `Infinity`.
 *
 * @example
 *
 * ```ts
 * import { isInfinity } from '@hypernym/utils'
 *
 * isInfinity(Infinity) // true
 * ```
 */
export const isInfinity = (v: any): v is number =>
  v === Infinity || v === -Infinity

/**
 * Returns a boolean if the given value is a `URL`.
 *
 * @example
 *
 * ```ts
 * import { isURL } from '@hypernym/utils'
 *
 * isURL(new URL('https://localhost:3000')) // true
 * ```
 */
export const isURL = (v: any): v is URL => v instanceof URL

/**
 * Returns a boolean if the given value is a `Error`.
 *
 * @example
 *
 * ```ts
 * import { isError } from '@hypernym/utils'
 *
 * isError(new Error()) // true
 * ```
 */
export const isError = (v: any): v is Error => v instanceof Error

/**
 * Returns a boolean if the given value is a `Primitive`.
 *
 * @example
 *
 * ```ts
 * import { isPrimitive } from '@hypernym/utils'
 *
 * isPrimitive(true) // true
 * ```
 */
export const isPrimitive = (v: any): v is Primitive =>
  isString(v) ||
  isNumber(v) ||
  isBigInt(v) ||
  isBoolean(v) ||
  isSymbol(v) ||
  isNull(v) ||
  isUndefined(v)

/**
 * Returns a boolean if the given value is a `Element`.
 *
 * @example
 *
 * ```ts
 * import { isElement } from '@hypernym/utils'
 *
 * isElement(el) // true
 * ```
 */
export const isElement = (v: any): v is Element => v instanceof Element

/**
 * Returns a boolean if the given value is a `HTMLElement`.
 *
 * @example
 *
 * ```ts
 * import { isHtmlElement } from '@hypernym/utils'
 *
 * isHtmlElement(htmlEl) // true
 * ```
 */
export const isHtmlElement = (v: any): v is HTMLElement =>
  v instanceof HTMLElement

/**
 * Returns a boolean if the given value is a `SVGElement`.
 *
 * @example
 *
 * ```ts
 * import { isSvgElement } from '@hypernym/utils'
 *
 * isSvgElement(svgEl) // true
 * ```
 */
export const isSvgElement = (v: any): v is SVGElement => v instanceof SVGElement

/**
 * Returns a boolean if the given value is a `NodeList`.
 *
 * @example
 *
 * ```ts
 * import { isNodeList } from '@hypernym/utils'
 *
 * isNodeList(document.querySelectorAll('div')) // true
 * ```
 */
export const isNodeList = (v: any): v is NodeList => v instanceof NodeList

/**
 * Returns a boolean if the given value is an empty `NodeList`.
 *
 * @example
 *
 * ```ts
 * import { isNodeListEmpty } from '@hypernym/utils'
 *
 * isNodeListEmpty(document.querySelectorAll('divs')) // true
 * ```
 */
export const isNodeListEmpty = (v: any): v is NodeList =>
  isNodeList(v) && v.length === 0

/**
 * Returns a boolean if the given value is a `HTMLCollection`.
 *
 * @example
 *
 * ```ts
 * import { isHtmlCollection } from '@hypernym/utils'
 *
 * isHtmlCollection(document.getElementsByClassName('el')) // true
 * ```
 */
export const isHtmlCollection = (v: any): v is HTMLCollection =>
  v instanceof HTMLCollection

/**
 * Returns a boolean if the given value is an empty `HTMLCollection`.
 *
 * ```ts
 * import { isHtmlCollectionEmpty } from '@hypernym/utils'
 *
 * isHtmlCollectionEmpty(document.getElementsByClassName('els')) // true
 * ```
 */
export const isHtmlCollectionEmpty = (v: any): v is HTMLCollection =>
  isHtmlCollection(v) && v.length === 0
