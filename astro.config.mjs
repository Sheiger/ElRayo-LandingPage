// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://elrayologistic.com',
  fonts: [
    {
      name: 'Outfit',
      cssVariable: '--font-outfit',
      provider: fontProviders.google(),
      weights: [500, 600, 700],
      subsets: ['latin'],
    },
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      subsets: ['latin'],
    },
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});