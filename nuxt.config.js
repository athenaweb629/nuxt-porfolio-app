const _ = {
  capitalize: (str) => {
    return str[0].toUpperCase() + str.slice(1)
  }
}

export default {
  head: {
    title: 'Phobos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  },
  globalName: 'phobos',
  globals: {
    id: globalName => `__${globalName}`,
    nuxt: globalName => `$${globalName}`,
    context: globalName => `__${globalName.toUpperCase()}__`,
    pluginPrefix: globalName => globalName,
    readyCallback: globalName => `on${_.capitalize(globalName)}Ready`,
    loadedCallback: globalName => `_on${_.capitalize(globalName)}Loaded`
  },
  css: [
    '~/assets/global.css'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  build: {}
}
