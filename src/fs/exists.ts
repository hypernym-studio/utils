import { access, constants } from 'node:fs/promises'

/**
 * Checks if the file or directory exists.
 *
 * @example
 *
 * ```ts
 * // New import
 * import { exists } from '@hypernym/utils/fs'
 * ```
 *
 * ```ts
 * // Deprecated import
 * import { exists } from '@hypernym/utils/node'
 * ```
 */
export async function exists(path: string) {
  return await access(path, constants.F_OK)
    .then(() => true)
    .catch(() => false)
}
