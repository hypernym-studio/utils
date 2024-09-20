import { access, constants } from 'node:fs/promises'

/**
 * Checks if the `file` or `directory` exists.
 *
 * @example
 *
 * ```ts
 * import { exists } from '@hypernym/utils/fs'
 *
 * await exists('dir/file.ts') // => true
 * ```
 */
export async function exists(path: string): Promise<boolean> {
  return await access(path, constants.F_OK)
    .then(() => true)
    .catch(() => false)
}
