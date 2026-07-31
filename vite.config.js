import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    sourcemap: false, // Ensure source maps are disabled to hide original source code in inspect mode
  }
});
