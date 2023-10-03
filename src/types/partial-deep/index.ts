import type { BuiltIn } from '../base/index.js'

type PartialOptions = {
  /**
   * Enables recursive mode for arrays and tuples.
   *
   * @default true
   */
  readonly arrays?: boolean
}

/**
 * Constructs a type by recursively setting all properties as optional.
 *
 * Use `Partial<T>` for one level.
 */
export type PartialDeep<
  T,
  Options extends PartialOptions = { arrays: true },
> = T extends BuiltIn
  ? T | undefined
  : T extends Map<infer K, infer V>
  ? Map<PartialDeep<K, Options>, PartialDeep<V, Options>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<PartialDeep<K, Options>, PartialDeep<V, Options>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<Partial<K>, PartialDeep<V, Options>>
  : T extends Set<infer V>
  ? Set<PartialDeep<V, Options>>
  : T extends ReadonlySet<infer V>
  ? ReadonlySet<PartialDeep<V, Options>>
  : T extends WeakSet<infer V>
  ? WeakSet<Partial<V>>
  : T extends Promise<infer V>
  ? Promise<PartialDeep<V, Options>>
  : T extends (...args: any[]) => unknown
  ? T | undefined
  : T extends object
  ? T extends ReadonlyArray<infer V>
    ? Options['arrays'] extends true
      ? V[] extends T
        ? readonly V[] extends T
          ? ReadonlyArray<PartialDeep<V, Options>>
          : Array<PartialDeep<V, Options>>
        : PartialObjectDeep<T, Options>
      : T | undefined
    : PartialObjectDeep<T, Options>
  : unknown

type PartialObjectDeep<
  T extends object,
  Options extends PartialOptions = { arrays: true },
> = {
  [K in keyof T]?: PartialDeep<T[K], Options>
}
