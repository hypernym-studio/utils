import type { Primitive } from './primitive'

/**
 * Matches any `Primitive`, `Date` or `RegExp` value.
 */
export type BuiltIn = Primitive | Date | RegExp
