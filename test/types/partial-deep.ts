import { expectTypeOf } from 'expect-type'
import type { PartialDeep } from '../../src/types'

type Actual = {
  null: null
  undefined: undefined
  string: string
  number: number
  boolean: boolean
  function: () => void
  object: {
    functionWithArgument: (arg: any) => void
    functionWithArguments: (...args: any[]) => void
    namespace: {
      (arg: any): void
      string: string
    }
    null: null
    undefined: undefined
    string: string
    number: number
    boolean: boolean
    object: { string: string }
    map: Map<string, string>
    readonlyMap: ReadonlyMap<string, string>
    weakMap: WeakMap<{ string: string }, string>
    set: Set<string>
    readonlySet: ReadonlySet<string>
    weakSet: WeakSet<{ string: string }>
    date: Date
    regexp: RegExp
    symbol: symbol
    promise: Promise<string>
    array: Array<string>
    readonlyArray: ReadonlyArray<string>
    tuple: ['value']
    readonlyTuple: readonly ['value']
  }
}

type Expected = {
  null?: null | undefined
  undefined?: undefined
  string?: string | undefined
  number?: number | undefined
  boolean?: boolean | undefined
  function?: (() => void) | undefined
  object?: {
    functionWithArgument?: ((arg: any) => void) | undefined
    functionWithArguments?: ((...args: any[]) => void) | undefined
    namespace?:
      | {
          (arg: any): void
          string: string
        }
      | undefined
    null?: null | undefined
    undefined?: undefined
    string?: string | undefined
    number?: number | undefined
    boolean?: boolean | undefined
    object?: { string?: string | undefined } | undefined
    map?: Map<string | undefined, string | undefined> | undefined
    readonlyMap?:
      | ReadonlyMap<string | undefined, string | undefined>
      | undefined
    weakMap?:
      | WeakMap<{ string?: string | undefined }, string | undefined>
      | undefined
    set?: Set<string | undefined> | undefined
    readonlySet?: ReadonlySet<string | undefined> | undefined
    weakSet?: WeakSet<{ string?: string | undefined }> | undefined
    date?: Date | undefined
    regexp?: RegExp | undefined
    symbol?: symbol | undefined
    promise?: Promise<string | undefined> | undefined
    array?: Array<string | undefined> | undefined
    readonlyArray?: ReadonlyArray<string | undefined> | undefined
    tuple?: [('value' | undefined)?] | undefined
    readonlyTuple?: readonly [('value' | undefined)?] | undefined
  }
}

type ExpectedArrays = {
  null?: null | undefined
  undefined?: undefined
  string?: string | undefined
  number?: number | undefined
  boolean?: boolean | undefined
  function?: (() => void) | undefined
  object?: {
    functionWithArgument?: ((arg: any) => void) | undefined
    functionWithArguments?: ((...args: any[]) => void) | undefined
    namespace?:
      | {
          (arg: any): void
          string: string
        }
      | undefined
    null?: null | undefined
    undefined?: undefined
    string?: string | undefined
    number?: number | undefined
    boolean?: boolean | undefined
    object?: { string?: string | undefined } | undefined
    map?: Map<string | undefined, string | undefined> | undefined
    readonlyMap?:
      | ReadonlyMap<string | undefined, string | undefined>
      | undefined
    weakMap?:
      | WeakMap<{ string?: string | undefined }, string | undefined>
      | undefined
    set?: Set<string | undefined> | undefined
    readonlySet?: ReadonlySet<string | undefined> | undefined
    weakSet?: WeakSet<{ string?: string | undefined }> | undefined
    date?: Date | undefined
    regexp?: RegExp | undefined
    symbol?: symbol | undefined
    promise?: Promise<string | undefined> | undefined
    array?: Array<string> | undefined
    readonlyArray?: ReadonlyArray<string> | undefined
    tuple?: ['value'] | undefined
    readonlyTuple?: readonly ['value'] | undefined
  }
}

expectTypeOf<PartialDeep<Actual>>().toEqualTypeOf<Expected>()

expectTypeOf<
  PartialDeep<Actual, { arrays: false }>
>().toEqualTypeOf<ExpectedArrays>()
