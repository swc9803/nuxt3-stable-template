// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      pageTransition: { name: 'page', mode: 'out-in' }
    },
    imports: {
      dirs: ['stores']
    },
    modules: [
      ['@pinia/nuxt',
        {
          autoImports: ['defineStore', 'acceptHMRUpdate']
        }
      ],
      '@nuxtjs/device'
    ]
})
