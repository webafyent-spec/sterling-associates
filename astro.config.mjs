// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sterling-associates-seven.vercel.app',
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});