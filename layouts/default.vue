<template>
  <div id="phb__mount" class="w-screen h-screen flex items-center">
    <Nuxt id="phb__content" />
    <div id="phb__lang" class="absolute top-5 left-5 cursor-pointer flex flex-row items-center" @click="changeLang($i18n.locale)">
      <svg
        class="w-6 h-6 md:w-8 md:h-8"
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0)">
          <path d="M1.41801 15.0156C1.41801 15.0156 8.33833 8.71569 9.77722 4.17959L1.418 4.17959" stroke="currentColor" stroke-linecap="round" />
          <path d="M3.58521 6.6564C3.58521 6.6564 4.19645 8.85059 5.75242 10.3716C7.30839 11.8926 10.3964 12.2292 10.3964 12.2292" stroke="currentColor" stroke-linecap="round" />
          <path d="M1 4.17999L11 4.17999" stroke="currentColor" stroke-linecap="round" />
          <line
            x1="6"
            y1="3.51508"
            x2="6"
            y2="2.50001"
            stroke="currentColor"
            stroke-linecap="round"
          />
          <path d="M11.7483 16.1042L14.2483 16.1042L16.7483 16.1042" stroke="currentColor" stroke-linecap="round" />
          <path d="M10 18.9421L14.7483 9.10419" stroke="currentColor" stroke-linecap="round" />
          <path d="M18.2483 18.6042L14.7483 9.10424" stroke="currentColor" stroke-linecap="round" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="24" height="24" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
      <span class="phb__lang-indicator text-xs md:text-sm select-none uppercase cursor-default">
        {{ $i18n.locale }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  transition (to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  },
  mounted () {
    this.detectLang()
    console.log('[i18n] English initialized')
  },
  methods: {
    detectLang () {
      const lang = localStorage.getItem('phb__lang') || 'en'

      this.$root.$i18n.locale = lang
    },
    changeLang (lang) {
      switch (lang) {
        case 'en':
          // document.documentElement.setAttribute('lang', 'es')
          localStorage.setItem('phb__lang', 'es')
          this.$root.$i18n.locale = 'es'
          console.log('[i18n] Changed to Spanish')
          break
        case 'es':
          // document.documentElement.setAttribute('lang', 'en')
          localStorage.setItem('phb__lang', 'en')
          this.$root.$i18n.locale = 'en'
          console.log('[i18n] Changed to English')
          break
        default:
          // document.documentElement.setAttribute('lang', 'en')
          localStorage.setItem('phb__lang', 'en')
          this.$root.$i18n.locale = 'en'
          console.log('[i18n] English initialized')
          break
      }
    }
  }
}
</script>
