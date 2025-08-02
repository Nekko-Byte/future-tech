import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@helpers': path.resolve(__dirname, './src/styles/helpers'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@img': path.resolve(__dirname, './src/assets/images'),
    },
  },
})
