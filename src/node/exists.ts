import { access, constants } from 'node:fs/promises'

/**
 * Checks if the file exists.
 */
export async function exists(path: string) {
  return await access(path, constants.F_OK)
    .then(() => true)
    .catch(() => false)
}
