import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import pkg from './package.json' assert { type: 'json' }

const exports = {
  main: pkg.exports['.']
}

export default defineConfig([
  {
    input: './src/index.ts',
    output: [{ file: exports.main.import, format: 'esm' }],
    plugins: [esbuild()]
  },
  {
    input: './src/types/index.ts',
    output: [{ file: exports.main.types, format: 'esm' }],
    plugins: [dts()]
  }
])
