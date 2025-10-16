import { defineConfig } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    { input: './src/index.ts' },
    {
      input: './src/index.ts',
      output: './dist/index.min.js',
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
    { dts: './src/types/index.ts', output: './dist/index.d.ts' },
    {
      input: './src/fs/index.ts',
      externals: [/^node/, /^@/],
      paths: [{ find: /^@/, replacement: '../index.js' }],
    },
    { dts: './src/types/fs/index.ts', output: './dist/fs/index.d.ts' },
  ],
})
