import { defineConfig, replacePath } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    { input: './src/index.ts' },
    {
      input: './src/index.ts',
      output: './dist/index.min.mjs',
      transformers: { esbuild: { minify: true } },
    },
    {
      input: './src/index.ts',
      output: './dist/index.iife.js',
      transformers: { esbuild: { minify: true } },
      format: 'iife',
      name: 'Hyperutils',
    },
    {
      input: './src/index.ts',
      output: './dist/index.umd.js',
      transformers: { esbuild: { minify: true } },
      format: 'umd',
      name: 'Hyperutils',
    },
    { declaration: './src/types/index.ts' },
    {
      input: './src/fs/index.ts',
      externals: [/^node/, /^@/],
      paths: (id) => replacePath(/^@/, '../index.mjs')(id),
    },
    { declaration: './src/types/fs/index.ts' },
  ],
})
