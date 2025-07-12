import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'MeowClient',
        short_name: 'MeowClient',
        start_url: '.',
        display: 'standalone',
        background_color: '#f5f5f5',
        theme_color: '#f5f5f5',
        description: 'A modern, production-ready React chat application.',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  build: {
    minify: 'esbuild',
    brotliSize: true,
    sourcemap: false,
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
          ],
        },
      },
    },
  },
  server: {
    open: true,
  },
});
