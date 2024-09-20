import { readdir as readDir } from 'node:fs/promises'
import type { Dirent } from 'node:fs'

export type ReaddirPath = string | URL
export type ReaddirEncodingType = BufferEncoding | null | 'buffer' | undefined
export type ReaddirWithFileType = true | undefined

export type ReaddirType<E, F> = F extends true
  ? Dirent
  : E extends BufferEncoding | undefined
    ? string
    : E extends null | 'buffer'
      ? Buffer
      : never

export interface ReaddirOptions<
  E extends ReaddirEncodingType,
  F extends ReaddirWithFileType,
> {
  /**
   * If the encoding is set to `'buffer'` or `null`, the filenames returned will be passed as `Buffer` objects.
   *
   * @default 'utf-8'
   */
  encoding?: E
  /**
   * If `withFileTypes` is set to `true`, the returned array will contain `fs.Dirent` objects.
   *
   * @default undefined
   */
  withFileTypes?: F
  /**
   * Reads the directory recursively.
   *
   * @default true
   */
  recursive?: boolean
}

/**
 * Reads the contents of a `directory` recursively.
 *
 * @example
 *
 * ```ts
 * import { readdir } from '@hypernym/utils/fs'
 *
 * await readdir('dir/subdir')
 * ```
 */
export async function readdir<
  E extends ReaddirEncodingType = BufferEncoding,
  F extends ReaddirWithFileType = undefined,
>(
  path: ReaddirPath,
  options: ReaddirOptions<E, F> = {},
): Promise<ReaddirType<E, F>[]> {
  const { encoding = 'utf-8', recursive = true } = options

  return (await readDir(path, {
    encoding,
    recursive,
    ...options,
  } as any)) as ReaddirType<E, F>[]
}
