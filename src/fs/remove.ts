import { rm } from 'node:fs/promises'
import { isString, isURL } from '@'

export type RemovePath = string | URL

export interface RemoveOptions {
  /**
   * If `true`, perform a recursive directory removal.
   *
   * In recursive mode, operations are retried on failure.
   *
   * @default true
   */
  recursive?: boolean
  /**
   * When `true`, exceptions will be ignored if `path` does not exist.
   *
   * @default true
   */
  force?: boolean
  /**
   * If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or
   * `EPERM` error is encountered, Node.js will retry the operation with a linear
   * backoff wait of `retryDelay` ms longer on each try. This option represents the
   * number of retries. This option is ignored if the `recursive` option is not
   * `true`.
   *
   * @default 0
   */
  maxRetries?: number
  /**
   * The amount of time in milliseconds to wait between retries.
   *
   * This option is ignored if the `recursive` option is not `true`.
   *
   * @default 100
   */
  retryDelay?: number
}

/**
 * Removes `files` and `directories` recursively.
 *
 * Accepts a single path or a range of paths.
 *
 * @example
 *
 * ```ts
 * import { remove } from '@hypernym/utils/fs'
 *
 * await remove('src/subdir/file.ts')
 * ```
 */
export async function remove(
  path: RemovePath | RemovePath[],
  options: RemoveOptions = {},
): Promise<void> {
  const { recursive = true, force = true } = options

  const paths = isString(path) || isURL(path) ? [path] : path

  for (const p of paths) {
    await rm(p, { recursive, force, ...options })
  }
}
