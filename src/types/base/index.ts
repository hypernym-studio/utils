/**
 * Matches any primitive value.
 *
 * @example
 *
 * ```ts
 * import type { Primitive } from '@hypernym/utils'
 *
 * type OnlyPrimitives<T> = T extends Primitive ? T : never
 *
 * type Filtered = OnlyPrimitives<string | number | {} | Date> // string | number
 * ```
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
 *
 * @example
 *
 * ```ts
 * import type { BuiltIn } from '@hypernym/utils'
 *
 * type OnlyBuiltIns<T> = T extends BuiltIn ? T : never
 *
 * type Filtered = OnlyBuiltIns<string | Date | {} | RegExp> // string | Date | RegExp
 * ```
 */
export type BuiltIn = Primitive | Date | RegExp

export * from '@/base'
