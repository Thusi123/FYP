import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  publicDir: 'assets',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
