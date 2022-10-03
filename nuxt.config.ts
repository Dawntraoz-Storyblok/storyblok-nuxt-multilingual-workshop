// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      { accessToken: process.env.SB_API_TOKEN }
    ],
    '@nuxtjs/tailwindcss'
  ],
})
