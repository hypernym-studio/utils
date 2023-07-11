interface SubdirDetails {
  index: number
  path: string
  base: string
}

interface FileDetails {
  index: number
  path: string
  base: string
  name: string
  ext: string
  size: number
}

export interface DirStats {
  index: number
  path: string
  base: string
  size: number
  subdirs: SubdirDetails[]
  files: FileDetails[]
}

export interface DirStatsOptions {
  recursive?: boolean
}

// Auto-generated
export * from '../../node/get-dir-stats'
