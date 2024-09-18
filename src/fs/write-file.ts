import { dirname } from 'node:path'
import { mkdir, writeFile as write } from 'node:fs/promises'

/**
 * Writes data to a file recursively.
 *
 * @example
 *
 * ```ts
 * import { writeFile } from '@hypernym/utils/fs'
 *
 * await writeFile('dir/subdir/file.ts', `console.log('Hello World!')`)
 * ```
 */
export async function writeFile(
  path: string,
  data: Parameters<typeof write>[1],
  options?: Parameters<typeof write>[2],
): Promise<void> {
  await mkdir(dirname(path), { recursive: true })

  return await write(path, data, options)
}
