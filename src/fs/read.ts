import { readFile } from 'node:fs/promises'

export type ReadPath = string | URL
export type ReadEncodingType = BufferEncoding | null | undefined
export type ReadType<T> = T extends BufferEncoding | undefined
  ? string
  : T extends null
    ? Buffer
    : never

export interface ReadOptions<T extends ReadEncodingType> {
  /**
   * If no encoding is specified, the data is returned as a `Buffer` object. Otherwise, the data will be a string.
   *
   * @default 'utf-8'
   */
  encoding?: T
  /**
   * When provided the corresponding `AbortController` can be used to cancel an asynchronous action.
   *
   * @default undefined
   */
  signal?: AbortSignal
  /**
   * If a flag is not provided, it defaults to `'r'`.
   *
   * @default 'r'
   */
  flag?: number | string
}

/**
 * Reads the entire contents of a `file`.
 *
 * @example
 *
 * ```ts
 * import { read } from '@hypernym/utils/fs'
 *
 * await read('dir/subdir/file.ts')
 * ```
 */
export async function read<T extends ReadEncodingType = BufferEncoding>(
  path: ReadPath,
  options: ReadOptions<T> = {},
): Promise<ReadType<T>> {
  const { encoding = 'utf-8' } = options

  return (await readFile(path, { encoding, ...options })) as ReadType<T>
}
