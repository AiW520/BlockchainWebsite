import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// Get the base path from environment variable or default to '/'
const base = process.env.SITE_BASE || '/';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  },
});
