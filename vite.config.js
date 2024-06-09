import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA(),
  ],
  server: {
    middlewareMode: 'ssr',
    // Middleware para establecer el tipo MIME correcto para los archivos JSX
    fs: {
      strict: false,
    },
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
