import { defineConfig } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    { input: './src/index.ts' },
    { types: './src/types/index.ts' },
    { input: './src/fs/index.ts' },
    { types: './src/types/fs/index.ts' },
  ],
})
