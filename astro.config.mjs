import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://studiyo.co',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
