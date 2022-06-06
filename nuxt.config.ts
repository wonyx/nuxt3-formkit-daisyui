import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  colorMode: {
    preference: 'light',
    dataValue: 'theme'
  },
  modules: [
    '@formkit/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ]
})
