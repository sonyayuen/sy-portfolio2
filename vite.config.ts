import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { qrcode } from 'vite-plugin-qrcode';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), qrcode()],
  
  base: "/sy-portfolio2/"
})
