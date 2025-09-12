import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist'
  }
});


// ✅ Points:
  
// React plugin for Vite

// Custom dev server port

// Build output folder