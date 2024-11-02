import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './src/shared'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    sourcemap: false,
    target: 'esnext',
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
        manualChunks: {
          'react-vendors': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
