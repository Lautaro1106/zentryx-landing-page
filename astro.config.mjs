import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Generar HTML estático
  output: 'static',

  // Configuración del sitio
  site: 'https://zentryxhub.com.ar',

  // Configuración del servidor de desarrollo
  server: {
    port: 4321,
    host: true
  },

  // Configuración de build
  build: {
    // Inline CSS pequeños para mejor performance
    inlineStylesheets: 'auto'
  },

  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ['zentryxhub.com.ar']
    }
  }
});