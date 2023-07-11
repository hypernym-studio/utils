import { readdir, stat } from 'node:fs/promises'
import { resolve, parse, basename } from 'node:path'
import type { DirStats, DirStatsOptions } from '../types/node'

/**
 * Scans the specified directory and gets details for each subdirectory and file.
 *
 * By default, recursive mode is disabled so only one level is scanned.
 */
export async function getDirStats(path: string, options?: DirStatsOptions) {
  const dirPath = resolve(path)
  const dirFiles = await readdir(dirPath)
  const dirBase = basename(dirPath)

  let dirStats: DirStats[] = []
  const subdirList: DirStats['subdirs'] = []
  const fileList: DirStats['files'] = []

  let dirSize = 0
  let dirIndex = 0
  let fileIndex = -1
  let subdirIndex = -1

  for (const file of dirFiles) {
    const filePath = resolve(path, file)
    const fileStat = await stat(filePath)

    if (fileStat.isDirectory()) {
      subdirIndex++

      subdirList.push({
        index: subdirIndex,
        path: filePath,
        base: file
      })

      if (options?.recursive) {
        const stats = await getDirStats(filePath)
        const updateDirStats = { ...stats[0], ...{ index: dirIndex++ } }

        dirStats = [...dirStats, updateDirStats]
      }
    } else {
      const { base, name, ext } = parse(file)
      const { size } = fileStat

      fileIndex++
      dirSize += size

      fileList.push({
        index: fileIndex,
        path: filePath,
        base,
        name,
        ext,
        size
      })
    }
  }

  dirStats.push({
    index: dirIndex,
    path: dirPath,
    base: dirBase,
    size: dirSize,
    subdirs: subdirList,
    files: fileList
  })

  return dirStats
}
