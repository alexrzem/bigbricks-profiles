import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const base = '/bigbricks-profiles/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});
