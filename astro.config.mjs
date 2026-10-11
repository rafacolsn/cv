import { defineConfig } from 'astro/config';

// Site statique publié sur GitHub Pages (domaine perso via public/CNAME)
export default defineConfig({
  site: 'https://raphaelcolson.be',
  build: { inlineStylesheets: 'auto' },
});
