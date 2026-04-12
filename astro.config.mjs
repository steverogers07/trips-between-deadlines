// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://www.trips-between-deadlines.com',
  output: 'static',
  adapter: vercel(),

  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    sitemap(),
    react(),
  ],
});
