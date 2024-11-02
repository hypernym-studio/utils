<h1 align="center">Hypernym Utils</h1>

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

## Usage

After installation, import `Hyperutils` into your project:

```ts
// ESM & TS
import { isNull, isString, ... } from '@hypernym/utils'

// ESM & TS
import { exists, copy, ... } from '@hypernym/utils/fs'

// Types
import type { IsAny, RequiredDeep, ... } from '@hypernym/utils'
```

## CDN

Here are some examples of how to integrate **Hyperutils** from a CDN via a script tag.

Also, it is possible to download files manually and serve them accordingly.

#### minified esm

```html
<script type="module">
  import { isNull, isString, ... } from 'https://unpkg.com/@hypernym/utils/dist/index.min.mjs'
</script>
```

#### minified iief

```html
<script src="https://unpkg.com/@hypernym/utils/dist/index.iief.mjs"></script>
<script>
  const { isNull, isString, ... } = Hyperutils
</script>
```

#### minified umd

```html
<script src="https://unpkg.com/@hypernym/utils/dist/index.umd.mjs"></script>
<script>
  const { isNull, isString, ... } = Hyperutils
</script>
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

isNull(null) // => true
```

### isUndefined

Returns a boolean if the given value is a `undefined`.

```ts
import { isUndefined } from '@hypernym/utils'

isUndefined(undefined) // => true
```

### isString

Returns a boolean if the given value is a `string`.

```ts
import { isString } from '@hypernym/utils'

isString('@hypernym/utils') // => true
```

## fs

### exists

Checks if the `file` or `directory` exists.

```ts
import { exists } from '@hypernym/utils/fs'

await exists('dir/file.ts') // => true
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

### PartialDeep

Constructs a type by recursively setting all properties as optional.

Use `Partial<T>` for one level.

```ts
type PartialObject = PartialDeep<Object>

// Disables recursive mode for arrays and tuples.
type PartialObject = PartialDeep<Object, { arrays: false }>
```

### RequiredDeep

Constructs a type by recursively setting all properties as required.

Use `Required<T>` for one level.

```ts
type RequiredObject = RequiredDeep<Object>

// Disables recursive mode for arrays and tuples.
type RequiredObject = RequiredDeep<Object, { arrays: false }>
```

## Community

Feel free to ask questions or share new ideas.

Use the official [discussions](https://github.com/hypernym-studio/utils/discussions) to get involved.

## License

Developed in 🇭🇷 Croatia, © Hypernym Studio.

Released under the [MIT](LICENSE.txt) license.
