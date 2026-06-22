// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Static output, deployed on Netlify. No external font/CDN calls — fonts are
// bundled via @fontsource so the lamplit page loads the same in the dark
// everywhere. MDX powers the dev journal so articles can drop in optimised
// <Figure> images with captions, Medium-style.
export default defineConfig({
  site: 'https://elua.example', // ← replace with the real domain before launch
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [mdx()],
});
