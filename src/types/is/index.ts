/**
 * Returns a boolean if the given type is a `null`.
 *
 * @example
 *
 * ```ts
 * import type { IsNull } from '@hypernym/utils'
 *
 * type A = IsNull<null> // true
 * type B = IsNull<string> // false
 * type C = IsNull<undefined> // false
 * ```
 */
export type IsNull<T> = [T] extends [null] ? true : false

/**
 * Returns a boolean if the given type is a `any`.
 *
 * @example
 *
 * ```ts
 * import type { IsAny } from '@hypernym/utils'
 *
 * type A = IsAny<any> // true
 * type B = IsAny<string> // false
 * type C = IsAny<unknown> // false
 * ```
 */
export type IsAny<T> = 0 extends 1 & T ? true : false

/**
 * Returns a boolean if the given type is a `never`.
 *
 * @example
 *
 * ```ts
 * import type { IsNever } from '@hypernym/utils'
 *
 * type A = IsNever<never> // true
 * type B = IsNever<number> // false
 * type C = IsNever<undefined> // false
 * ```
 */
export type IsNever<T> = [T] extends [never] ? true : false

export * from '@/is'
