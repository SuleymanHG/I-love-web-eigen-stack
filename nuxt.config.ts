// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  // 👇 Recommended: basic site meta
  app: {
    head: {
      title: 'Süleyman Portfolio',
      meta: [
        { name: 'description', content: 'Portfolio website showcasing design and development projects.' },
      ],
    },
  },

  // 👇 Recommended for static hosting (Netlify)
  routeRules: {
    // Static prerender of all pages
    '/**': { prerender: true },
  },

  // 👇 Optional: disables SSR server if you only want static HTML
  nitro: {
    preset: 'static',
  },
})
