import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Vite config — https://vitejs.dev/config/
// Trimmed down from the Figma Make export: the Figma-only dev-server plugins
// (site.json injection, HMR error overlay replay, story kit) are removed since
// they depend on Figma Make's own tooling and aren't needed to build/deploy.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
