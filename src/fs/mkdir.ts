import { mkdir as makedir } from 'node:fs/promises'
import { isString, isURL } from '@'

export type MakeDirPath = string | URL

export interface MakeDirOptions {
  /**
   * Indicates whether parent folders should be created.
   *
   * If a folder was created, the path to the first created folder will be returned.
   *
   * @default true
   */
  recursive?: boolean
  /**
   * A file mode. If a string is passed, it is parsed as an octal integer.
   *
   * @default 0o777
   */
  mode?: string | number
}

/**
 * Creates a `directory` recursively.
 *
 * Accepts a single path or a range of paths.
 *
 * @example
 *
 * ```ts
 * import { mkdir } from '@hypernym/utils/fs'
 *
 * await mkdir('src/subdir')
 * ```
 */
export async function mkdir(
  path: MakeDirPath | MakeDirPath[],
  options: MakeDirOptions = {},
): Promise<void> {
  const { recursive = true } = options

  const paths = isString(path) || isURL(path) ? [path] : path

  for (const p of paths) {
    await makedir(p, { recursive })
  }
}
