import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/AppleByReact/", // Replace with your repository name
  plugins: [react()],
  server: {
    port: 4424,
  },
});


