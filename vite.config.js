import { defineConfig } from 'vite';

export default defineConfig({
  // Otras configuraciones de Vite...
  server: {
    // Configuración de caché
    cors: true,  // Permitir CORS si es necesario
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
});
