const _ = {
  capitalize: (str) => {
    return str[0] + str.slice(1, str.length)
  }
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'aex.web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'og:title', content: 'aexhell' },
      { name: 'og:site_name', content: 'aexhell.ml' },
      { name: 'theme-color', content: '#343144' },
      { name: 'og:description', content: 'are you ready for more?' },
      { name: 'og:type', content: 'website' }
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/app.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-windicss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'es',
        file: 'es.js'
      }
    ],
    lazy: false,
    langDir: 'i18n/',
    defaultLocale: 'en'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
