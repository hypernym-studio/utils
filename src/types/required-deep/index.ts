import type { BuiltIn } from '../base/index.js'

type RequiredOptions = {
  /**
   * Enables recursive mode for arrays and tuples.
   *
   * @default true
   */
  readonly arrays?: boolean
}

/**
 * Constructs a type by recursively setting all properties as required.
 *
 * Use `Required<T>` for one level.
 */
export type RequiredDeep<
  T,
  Options extends RequiredOptions = { arrays: true },
> = T extends BuiltIn
  ? Exclude<T, undefined>
  : T extends Map<infer K, infer V>
  ? Map<RequiredDeep<K, Options>, RequiredDeep<V, Options>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<RequiredDeep<K, Options>, RequiredDeep<V, Options>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<RequiredDeep<K, Options>, RequiredDeep<V, Options>>
  : T extends Set<infer V>
  ? Set<RequiredDeep<V, Options>>
  : T extends ReadonlySet<infer V>
  ? ReadonlySet<RequiredDeep<V, Options>>
  : T extends WeakSet<infer V>
  ? WeakSet<RequiredDeep<V, Options>>
  : T extends Promise<infer V>
  ? Promise<RequiredDeep<V, Options>>
  : T extends (...args: any[]) => unknown
  ? Exclude<T, undefined>
  : T extends object
  ? T extends ReadonlyArray<infer V>
    ? Options['arrays'] extends true
      ? V[] extends T
        ? readonly V[] extends T
          ? ReadonlyArray<RequiredDeep<Exclude<V, undefined>, Options>>
          : Array<RequiredDeep<Exclude<V, undefined>, Options>>
        : RequiredObjectDeep<T, Options>
      : Exclude<T, undefined>
    : RequiredObjectDeep<T, Options>
  : unknown

type RequiredObjectDeep<
  T extends object,
  Options extends RequiredOptions = { arrays: true },
> = {
  [K in keyof T]-?: RequiredDeep<T[K], Options>
}
