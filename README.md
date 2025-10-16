<h1 align="center">@hypernym/utils</h1>

<p align="center">A collection of reusable utilities.</p>

<p align="center">
  <a href="https://github.com/hypernym-studio/utils">Repository</a>
  <span>✦</span>
  <a href="https://www.npmjs.com/package/@hypernym/utils">Package</a>
  <span>✦</span>
  <a href="https://github.com/hypernym-studio/utils/releases">Releases</a>
  <span>✦</span>
  <a href="https://github.com/hypernym-studio/utils/discussions">Discussions</a>
</p>

<br>

<pre align="center">pnpm add @hypernym/utils</pre>

<br>

## Features

- TypeScript friendly
- Fully tree-shakeable
- No dependencies

## Installation

Install `@hypernym/utils` package:

```sh
# via pnpm
pnpm add @hypernym/utils
```

```sh
# via npm
npm install @hypernym/utils
```

### CDN

Here are some examples of how to integrate **Hyperutils** from a CDN via a script tag.

Also, it is possible to download files manually and serve them accordingly.

#### ESM (minified)

```html
<script type="module">
  import { isNull, isString, ... } from 'https://unpkg.com/@hypernym/utils/dist/index.min.js'
</script>
```

#### IIFE (minified)

```html
<script src="https://unpkg.com/@hypernym/utils/dist/index.iife.js"></script>
<script>
  const { isNull, isString, ... } = Hyperutils
</script>
```

#### UMD (minified)

```html
<script src="https://unpkg.com/@hypernym/utils/dist/index.umd.js"></script>
<script>
  const { isNull, isString, ... } = Hyperutils
</script>
```

## Usage

After installation, import `utils` into your project:

```ts
// ESM & TS
import { isNull, isString, ... } from '@hypernym/utils'

// ESM & TS
import { exists, copy, ... } from '@hypernym/utils/fs'

// Types
import type { IsAny, RequiredDeep, ... } from '@hypernym/utils'
```

## is

### isBrowser

Checks if the code is running in the `browser`.

```ts
import { isBrowser } from '@hypernym/utils'

isBrowser // true
```

### isNull

Returns a boolean if the given value is a `null`.

```ts
import { isNull } from '@hypernym/utils'

isNull(null) // true
```

### isUndefined

Returns a boolean if the given value is a `undefined`.

```ts
import { isUndefined } from '@hypernym/utils'

isUndefined(undefined) // true
```

### isString

Returns a boolean if the given value is a `string`.

```ts
import { isString } from '@hypernym/utils'

isString('@hypernym/utils') // true
```

### isStringEmpty

Returns a boolean if the given value is an empty `string`.

```ts
import { isStringEmpty } from '@hypernym/utils'

isStringEmpty('') // true
```

### isBoolean

Returns a boolean if the given value is a `boolean`.

```ts
import { isBoolean } from '@hypernym/utils'

isBoolean(true) // true
```

### isTrue

Returns a boolean if the given value is a `true`.

```ts
import { isTrue } from '@hypernym/utils'

isTrue(true) // true
```

### isFalse

Returns a boolean if the given value is a `false`.

```ts
import { isFalse } from '@hypernym/utils'

isFalse(false) // true
```

### isNumber

Returns a boolean if the given value is a `number`.

```ts
import { isNumber } from '@hypernym/utils'

isNumber(33) // true
```

### isArray

Returns a boolean if the given value is a `array`.

```ts
import { isArray } from '@hypernym/utils'

isArray([]) // true
```

### isArrayEmpty

Returns a boolean if the given value is an empty `array`.

```ts
import { isArrayEmpty } from '@hypernym/utils'

isArrayEmpty([]) // true
```

### isObject

Returns a boolean if the given value is a `object`.

```ts
import { isObject } from '@hypernym/utils'

isObject({}) // true
```

### isObjectEmpty

Returns a boolean if the given value is an empty `object`.

```ts
import { isObjectEmpty } from '@hypernym/utils'

isObjectEmpty({}) // true
```

### isFunction

Returns a boolean if the given value is a `Function`.

```ts
import { isFunction } from '@hypernym/utils'

isFunction(() => {}) // true
```

### isNanValue

Returns a boolean if the given value is a `NaN`.

```ts
import { isNaNValue } from '@hypernym/utils'

isNaNValue(NaN) // true
```

### isRegExp

Returns a boolean if the given value is a `RegExp`.

```ts
import { isRegExp } from '@hypernym/utils'

isRegExp(/^hypernym/) // true
```

### isMap

Returns a boolean if the given value is a `Map`.

```ts
import { isMap } from '@hypernym/utils'

isMap(new Map()) // true
```

### isWeakMap

Returns a boolean if the given value is a `WeakMap`.

```ts
import { isWeakMap } from '@hypernym/utils'

isWeakMap(new WeakMap()) // true
```

### isSet

Returns a boolean if the given value is a `Set`.

```ts
import { isSet } from '@hypernym/utils'

isSet(new Set()) // true
```

### isWeakSet

Returns a boolean if the given value is a `WeakSet`.

```ts
import { isWeakSet } from '@hypernym/utils'

isWeakSet(new WeakSet()) // true
```

### isSymbol

Returns a boolean if the given value is a `symbol`.

```ts
import { isSymbol } from '@hypernym/utils'

isSymbol(Symboly('hypernym')) // true
```

### isDate

Returns a boolean if the given value is a `Date`.

```ts
import { isDate } from '@hypernym/utils'

isDate(new Date()) // true
```

### isBigInt

Returns a boolean if the given value is a `bigint`.

```ts
import { isBigInt } from '@hypernym/utils'

isBigInt(1n) // true
```

### isInfinity

Returns a boolean if the given value is a `Infinity`.

```ts
import { isInfinity } from '@hypernym/utils'

isInfinity(Infinity) // true
```

### isURL

Returns a boolean if the given value is a `URL`.

```ts
import { isURL } from '@hypernym/utils'

isURL(new URL('https://localhost:3000')) // true
```

### isError

Returns a boolean if the given value is a `Error`.

```ts
import { isError } from '@hypernym/utils'

isError(new Error()) // true
```

### isPrimitive

Returns a boolean if the given value is a `Primitive`.

```ts
import { isPrimitive } from '@hypernym/utils'

isPrimitive(true) // true
```

### isElement

Returns a boolean if the given value is a `Element`.

```ts
import { isElement } from '@hypernym/utils'

isElement(el) // true
```

### isHtmlElement

Returns a boolean if the given value is a `HTMLElement`.

```ts
import { isHtmlElement } from '@hypernym/utils'

isHtmlElement(htmlEl) // true
```

### isSvgElement

Returns a boolean if the given value is a `SVGElement`.

```ts
import { isSvgElement } from '@hypernym/utils'

isSvgElement(svgEl) // true
```

### isNodeList

Returns a boolean if the given value is a `NodeList`.

```ts
import { isNodeList } from '@hypernym/utils'

isNodeList(document.querySelectorAll('div')) // true
```

### isNodeListEmpty

Returns a boolean if the given value is an empty `NodeList`.

```ts
import { isNodeListEmpty } from '@hypernym/utils'

isNodeListEmpty(document.querySelectorAll('divs')) // true
```

### isHtmlCollection

Returns a boolean if the given value is a `HTMLCollection`.

```ts
import { isHtmlCollection } from '@hypernym/utils'

isHtmlCollection(document.getElementsByClassName('el')) // true
```

### isHtmlCollectionEmpty

Returns a boolean if the given value is an empty `HTMLCollection`.

```ts
import { isHtmlCollectionEmpty } from '@hypernym/utils'

isHtmlCollectionEmpty(document.getElementsByClassName('els')) // true
```

## fs

### exists

Checks if the `file` or `directory` exists.

```ts
import { exists } from '@hypernym/utils/fs'

await exists('dir/file.ts') // true
```

### read

Reads the entire contents of a `file`.

```ts
import { read } from '@hypernym/utils/fs'

await read('dir/subdir/file.ts')
```

### readdir

Reads the contents of a `directory` recursively.

```ts
import { readdir } from '@hypernym/utils/fs'

await readdir('dir/subdir')
```

### write

Writes data to a `file` recursively.

```ts
import { write } from '@hypernym/utils/fs'

await write('dir/subdir/file.ts', `console.log('Hello World!')`)
```

### copy

Copies `files` or `directories` recursively.

Accepts a single source or a range of sources.

```ts
import { copy } from '@hypernym/utils/fs'

await copy('src/subdir/file.ts', './dist/subdir')
```

### mkdir

Creates a `directory` recursively.

Accepts a single path or a range of paths.

```ts
import { mkdir } from '@hypernym/utils/fs'

await mkdir('src/subdir')
```

### remove

Removes `files` and `directories` recursively.

Accepts a single path or a range of paths.

```ts
import { remove } from '@hypernym/utils/fs'

await remove('src/subdir/file.ts')
```

## Types

### Primitive

Matches any primitive value.

```ts
import type { Primitive } from '@hypernym/utils'

type OnlyPrimitives<T> = T extends Primitive ? T : never

type Filtered = OnlyPrimitives<string | number | {} | Date> // string | number
```

### BuiltIn

Matches any `Primitive`, `Date` or `RegExp` value.

```ts
import type { BuiltIn } from '@hypernym/utils'

type OnlyBuiltIns<T> = T extends BuiltIn ? T : never

type Filtered = OnlyBuiltIns<string | Date | {} | RegExp> // string | Date | RegExp
```

### IsNull

Returns a boolean if the given type is a `null`.

```ts
import type { IsNull } from '@hypernym/utils'

type A = IsNull<null> // true
type B = IsNull<string> // false
type C = IsNull<undefined> // false
```

### IsAny

Returns a boolean if the given type is a `any`.

```ts
import type { IsAny } from '@hypernym/utils'

type A = IsAny<any> // true
type B = IsAny<string> // false
type C = IsAny<unknown> // false
```

### IsNever

Returns a boolean if the given type is a `never`.

```ts
import type { IsNever } from '@hypernym/utils'

type A = IsNever<never> // true
type B = IsNever<number> // false
type C = IsNever<undefined> // false
```

### PartialDeep

Constructs a type by recursively setting all properties as optional.

Use `Partial<T>` for one level.

```ts
import type { PartialDeep } from '@hypernym/utils'

type PartialObject = PartialDeep<Object>

// Disables recursive mode for arrays and tuples.
type PartialObject = PartialDeep<Object, { arrays: false }>
```

### RequiredDeep

Constructs a type by recursively setting all properties as required.

Use `Required<T>` for one level.

```ts
import type { RequiredDeep } from '@hypernym/utils'

type RequiredObject = RequiredDeep<Object>

// Disables recursive mode for arrays and tuples.
type RequiredObject = RequiredDeep<Object, { arrays: false }>
```

## License

Developed in 🇭🇷 Croatia, © Hypernym Studio.

Released under the [MIT](LICENSE.txt) license.
