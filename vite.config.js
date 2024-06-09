import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Establece el tipo MIME para los archivos JSX
    hmr: {
      overlay: true,
    },
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
});
