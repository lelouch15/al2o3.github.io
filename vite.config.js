import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({ 
   base: '/al2o3.github.io/',
   plugins: [react()], 
 })
