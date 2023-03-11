import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      $: 'jquery',
      "window.jQuery": "jquery",
      jQuery: 'jquery',
    }),
    react()],
  optimizeDeps: {
    include: ["jquery"],
  },
  root: './',
  build: {
    outDir: 'dist',
  },
  publicDir: 'assets'
})
