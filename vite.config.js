import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    chunkSizeWarningLimit: 1000, // Set your desired size limit
  },
  base: '/nuradil.adiletov/',
})
