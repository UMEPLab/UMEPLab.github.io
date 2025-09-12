import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://umep-lab.github.io/',
  integrations: [tailwind()],
    output: 'static' 

});