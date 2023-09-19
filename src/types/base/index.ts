/**
 * Matches any primitive value.
 */
export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint

/**
 * Matches any `Primitive`, `Date` or `RegExp` value.
 */
export type BuiltIn = Primitive | Date | RegExp

// Auto-generated
export * from '../../base/index.js'
