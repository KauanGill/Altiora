import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // No GitHub Pages o site fica em /Altiora/; em outros lugares (Vercel, local) fica na raiz
  base: process.env.GITHUB_PAGES ? '/Altiora/' : '/',
})
