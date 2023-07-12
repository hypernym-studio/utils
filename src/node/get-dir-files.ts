import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import type { DirFilesOptions } from '../types/node'

/**
 * Scans the specified directory and returns a list of all files.
 *
 * By default, recursive mode is disabled so only one level is scanned.
 */
export async function getDirFiles(path: string, options?: DirFilesOptions) {
  const dirPath = resolve(path)
  const dirFiles = await readdir(dirPath, { withFileTypes: true })

  let fileList: string[] = []

  for (const file of dirFiles) {
    const filePath = resolve(path, file.name)

    if (file.isDirectory()) {
      if (options?.recursive) {
        fileList = [...fileList, ...(await getDirFiles(filePath))]
      }
    } else {
      fileList.push(filePath)
    }
  }

  return fileList
}
