import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '0.0.0.0', // This will allow the server to be publicly accessible
  //   port: 3000,       // Set a port (Render usually uses port 3000 by default)
  // },
})
