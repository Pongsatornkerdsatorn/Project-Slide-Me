import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    fs: {
      strict: false, // อนุญาตให้เข้าถึงไฟล์ในระบบ
    },
  },
  plugins: [react()],
  base: '/project-slide-me/',
})


