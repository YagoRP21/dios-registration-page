import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pagina-cadastro-dio/',
  build: {
    emptyOutputDir: false
  },
  plugins: [react()]
})
