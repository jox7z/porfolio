import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio-jose-hernandez.netlify.app/',
  // El sitio inicia en inglés; la antigua ruta /en/ sigue funcionando
  redirects: {
    '/en': '/',
  },
})
