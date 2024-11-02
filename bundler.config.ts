import { defineConfig, resolvePaths } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    { input: './src/index.ts' },
    {
      input: './src/index.ts',
      output: './dist/index.min.mjs',
      minify: true,
    },
    {
      input: './src/index.ts',
      output: './dist/index.iife.js',
      format: 'iife',
      name: 'Hyperutils',
      minify: true,
    },
    {
      input: './src/index.ts',
      output: './dist/index.umd.js',
      format: 'umd',
      name: 'Hyperutils',
      minify: true,
    },
    { dts: './src/types/index.ts' },
    {
      input: './src/fs/index.ts',
      externals: [/^node/, /^@/],
      paths: resolvePaths([{ find: /^@/, replacement: '../index.mjs' }]),
    },
    { dts: './src/types/fs/index.ts' },
  ],
})
