/**
 * Returns a boolean if the given type is a `null`.
 */
export type IsNull<T> = [T] extends [null] ? true : false

/**
 * Returns a boolean if the given type is a `any`.
 */
export type IsAny<T> = 0 extends 1 & T ? true : false

/**
 * Returns a boolean if the given type is a `never`.
 */
export type IsNever<T> = [T] extends [never] ? true : false

// auto-generated
export * from '../is'
