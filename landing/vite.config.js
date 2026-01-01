import { defineConfig } from 'vite';

export default defineConfig({
  // Static site configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  // Base path for deployment (uncomment if deploying to GitHub Pages subdirectory)
  // base: '/ReqDrivenDev/',
});
