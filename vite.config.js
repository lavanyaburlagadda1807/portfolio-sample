import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  },
  build: {
    rollupOptions: {
      input: '/index.html'
    }
  }
});
