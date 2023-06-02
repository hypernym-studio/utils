import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    typecheck: {
      include: ['test/types/**/*.ts']
    }
  }
})
