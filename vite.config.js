import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // yoki '/' ham bo'lishi mumkin, ikkisini navbat bilan sinab ko‘rish mumkin
})
