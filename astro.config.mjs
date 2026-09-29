import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Central configuration: easily customizable or overridden via environment variables
const SITE_URL = process.env.SITE_URL || 'https://sushil-patel.github.io';
const BASE_PATH = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [
    tailwind({
      applyBaseStyles: false, // We'll manage base CSS in src/styles/global.css for maximum performance
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
