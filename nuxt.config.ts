// https://nuxt.com/docs/api/configuration/nuxt-configimport

export default defineNuxtConfig({
  devtools: {
    enabled: process.env.NODE_ENV === 'development'
  },

  devServer: {
    port: 3021,
  },

  svgo: {
    autoImportPath: './assets/layoutIcons/',
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  runtimeConfig: {
    public: {
      API: 'https://dummyjson.com',
    },
  },

  css: ['@/assets/styles/_fonts.scss', '@/assets/styles/_vars.scss', '@/assets/styles/main.scss'],
  modules: ["nuxt-svgo", "@pinia/nuxt"],
  compatibilityDate: '2024-10-23',
})