import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update base for Github repository
//const base = process.env.NODE_ENV === 'production' ? '/agilecoderquest/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist', // Set the output directory to 'dist'
  },
})
