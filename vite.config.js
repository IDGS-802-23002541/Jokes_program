import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Jokes Program',
        short_name: 'Jokes',
        description: 'Aplicacion de chistes malos',
        theme_color: '#ff9a3b',
        background_color: '#ffffff',
        display: 'standalone', // se abre como app, sin la barra del navegador
        start_url: '/',
        icons: [
          {
            src: 'gato-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'gato-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'gato-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable', // version que se adapta a iconos redondos/cuadrados en Android
          },
        ],
      },
      workbox: {
        // Cachea automaticamente todo lo que Vite genera en el build (JS, CSS, HTML, imagenes)
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
})