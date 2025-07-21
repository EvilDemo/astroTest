// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://astrotestproject.netlify.app/', // Replace with your actual site URL
  integrations: [preact()],
});
