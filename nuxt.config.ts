import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/scripts',
    '@pinia/nuxt',
    'nuxt-delay-hydration',
    '@nuxtjs/partytown',
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Fake Store DL',
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  delayHydration: {
    debug: true,
    mode: 'mount',
  },
  extends: [
    './app/auth',
    './app/categories',
    './app/products',
    './app/shopping-cart',
    './app/shared',
  ],

  ui: {
    colorMode: false,
  },
});
