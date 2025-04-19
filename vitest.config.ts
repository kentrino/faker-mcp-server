import { defineConfig } from "vitest/config"

// biome-ignore lint/style/noDefaultExport: <explanation>
export default defineConfig({
  test: {
    silent: true,
    globals: true,
    environment: "node",
    include: ["**/*.test.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "build/"],
    },
  },
})
