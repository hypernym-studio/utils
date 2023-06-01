# Utils

A collection of reusable utilities.

<sub><a href="https://github.com/hypernym-studio/utils">Repository</a> | <a href="https://www.npmjs.com/package/@hypernym/utils">Package</a> | <a href="https://github.com/hypernym-studio/utils/releases">Releases</a> | <a href="https://github.com/hypernym-studio/utils/discussions">Discussions</a></sub>

## Features

- TypeScript friendly
- Zero dependencies

## Installation

```sh
npm i @hypernym/utils
```

## Imports

```ts
// ESM & TS
import { util } from '@hypernym/utils'

// Types
import type { Util } from '@hypernym/utils'
```

## API

- [`generic`](./src/generic.ts) - Useful common utilities.
- [`is`](./src/is.ts) - Simple conditional utilities.

### Types

- [`Primitive`](./src/types/primitive.ts) - Matches any primitive value.
- [`BuiltIn`](./src/types/built-in.ts) - Matches any `Primitive`, `Date` or `RegExp` value.
- [`PartialDeep`](./src/types/partial-deep.ts) - Constructs a type by recursively setting all properties as optional.
- [`RequiredDeep`](./src/types/required-deep.ts) - Constructs a type by recursively setting all properties as required.
- [`IsNull`](./src/types/is.ts) - Returns a boolean if the given type is a `null`.
- [`IsAny`](./src/types/is.ts) - Returns a boolean if the given type is a `any`.
- [`IsNever`](./src/types/is.ts) - Returns a boolean if the given type is a `never`.

## Community

Feel free to use the official [discussions](https://github.com/hypernym-studio/utils/discussions) for any additional questions.

## License

Developed in 🇭🇷 Croatia

Released under the [MIT](LICENSE.txt) license.

© Hypernym Studio
