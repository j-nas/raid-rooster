// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import db from '@astrojs/db';

import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),

  integrations: [db(), alpinejs({entrypoint: '/src/entrypoint'})],

  vite: {
    plugins: [tailwindcss()]
  }
});