import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { qrcode } from 'vite-plugin-qrcode';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), qrcode()],
  resolve: {
    alias: [{find: '@', replacement: path.resolve(__dirname, "src")}]
  },
})
