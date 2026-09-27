import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path is read from an env var so it can be set per-deployment.
// For a GitHub Pages *project* site (https://<user>.github.io/<repo>/) this
// should be "/<repo>/". For a *user/organization* site
// (https://<user>.github.io/) it should be "/".
const base = process.env.VITE_BASE_PATH || '/ommistacks/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
      },
    },
  },
})
