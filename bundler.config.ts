import { defineConfig, replacePath } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    { input: './src/index.ts' },
    { declaration: './src/types/index.ts' },
    {
      input: './src/fs/index.ts',
      externals: [/^node/, /^@/],
      paths: (id) => replacePath(/^@/, '../index.mjs')(id),
    },
    { declaration: './src/types/fs/index.ts' },
  ],
})
