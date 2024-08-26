import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://password-manager-5s8l.onrender.com',
        changeOrigin: true,
        secure: false, 
      }
    }
  }
})
