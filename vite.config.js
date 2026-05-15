import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        polityka: 'polityka-prywatnosci.html',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
