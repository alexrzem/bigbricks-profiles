import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const base = '/bigbricks-profiles/';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bigbricks-profiles/',
  root: './',
  build: {
    outDir: '../dist',
  },
  plugins: [vue()],
});
