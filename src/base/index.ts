/**
 * An empty arrow function that performs no operation.
 *
 * @example
 *
 * ```ts
 * import { noop } from '@hypernym/utils'
 *
 * noop()
 * ```
 */
export const noop = (): void => {}

/**
 * Returns a string representing the object.
 *
 * @example
 *
 * ```ts
 * import { toString } from '@hypernym/utils'
 *
 * toString({}) // => 'Object'
 * ```
 */
export const toString = (v: any): string =>
  Object.prototype.toString.call(v).slice(8, -1)
