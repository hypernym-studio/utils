import { defineConfig } from 'rollup'
import { getLogFilter } from 'rollup/getLogFilter'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import pkg from '../package.json' assert { type: 'json' }

const exports = {
  main: pkg.exports['.'],
  node: pkg.exports['./node']
}

const logFilter = getLogFilter(['!code:CIRCULAR_DEPENDENCY'])
const onLog = (level, log, handler) => {
  if (logFilter(log)) handler(level, log)
}
const external = [/^node:/]

export default defineConfig([
  {
    input: './src/index.ts',
    output: [
      { file: exports.main.import, format: 'esm' },
      { file: exports.main.require, format: 'cjs' }
    ],
    plugins: [esbuild()]
  },
  {
    input: './src/node/index.ts',
    output: [
      { file: exports.node.import, format: 'esm' },
      { file: exports.node.require, format: 'cjs' }
    ],
    plugins: [esbuild()],
    external
  },
  {
    input: './src/types/index.ts',
    output: [{ file: exports.main.types, format: 'esm' }],
    plugins: [dts()],
    onLog
  },
  {
    input: './src/types/node/index.ts',
    output: [{ file: exports.node.types, format: 'esm' }],
    plugins: [dts()],
    external,
    onLog
  }
])
