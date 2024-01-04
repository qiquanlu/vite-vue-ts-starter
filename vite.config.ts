import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const rootPath = resolve(__dirname, 'src')

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': rootPath,
    },
  },
})
