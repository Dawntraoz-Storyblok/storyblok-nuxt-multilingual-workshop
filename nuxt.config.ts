// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      { accessToken: 'tHkiysJSuR2QaMy8gQQsqgtt' }
    ],
    '@nuxtjs/tailwindcss'
  ],
})
