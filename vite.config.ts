/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// <https://vitejs.dev/config/>
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    restoreMocks: true,
    setupFiles: ['test/vitest.setup.ts'],
    coverage: {
      // exclude: [
      //   '**/node_modules/**',
      //   '**/commitlint.config.ts',
      //   '**/release.config.cjs',
      //   '**/index.ts',
      //   '**/models/**',
      // ],
      include: ['src/shared/components/Loader.tsx'],
    },
  },
  envPrefix: 'RC_',
  envDir: './',
  resolve: {
    alias: {
      global: 'globalThis',
      '@': path.resolve(__dirname, './src'),
      process: 'process/browser',
      buffer: 'buffer',
    },
  },
  define: {
    'process.env': process.env,
    global: 'window',
  },
});
