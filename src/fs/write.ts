import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { mkdir, writeFile as writefile } from 'node:fs/promises'
import { isURL } from '@'

export type WritePath = string | URL

/**
 * Writes data to a `file` recursively.
 *
 * @example
 *
 * ```ts
 * import { write } from '@hypernym/utils/fs'
 *
 * await write('dir/subdir/file.ts', `console.log('Hello World!')`)
 * ```
 */
export async function write(
  path: WritePath,
  data: Parameters<typeof writefile>[1],
  options?: Parameters<typeof writefile>[2],
): Promise<void> {
  await mkdir(dirname(isURL(path) ? fileURLToPath(path) : path), {
    recursive: true,
  })

  await writefile(path, data, options)
}

/**
 * @deprecated Use `write` instead.
 */
export const writeFile = write
