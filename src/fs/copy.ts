import { cp } from 'node:fs/promises'
import { isString, isURL } from '@'

export interface CopyOptions {
  /**
   * Copies files or directories recursively.
   *
   * @default true
   */
  recursive?: boolean
  /**
   * Filters copied `files` or `directories`.
   *
   * Returns `true` to copy the item, `false` to ignore it.
   *
   * @default undefined
   */
  filter?(source: string, destination: string): boolean | Promise<boolean>
}

/**
 * Copies `files` or `directories` recursively.
 *
 * Accepts a single source or a range of sources.
 *
 * @example
 *
 * ```ts
 * import { copy } from '@hypernym/utils/fs'
 *
 * await copy('src/subdir/file.ts', './dist/subdir')
 * ```
 */
export async function copy(
  source: string | URL | (string | URL)[],
  destination: string | URL,
  options: CopyOptions,
): Promise<void> {
  const { recursive = true, filter } = options

  const sources = isString(source) || isURL(source) ? [source] : source

  for (const src of sources) {
    await cp(src, destination, {
      recursive,
      filter,
    })
  }
}
