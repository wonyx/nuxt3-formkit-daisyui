import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light', // default theme
    dataValue: 'theme' // activate data-theme in <html> tag
  },
  modules: [
    '@formkit/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ]
})
