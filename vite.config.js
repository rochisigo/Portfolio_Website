import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this site from https://rochisigo.github.io/Portfolio_Website/,
  // so every asset URL has to start with the repo name.
  base: '/Portfolio_Website/',
})
