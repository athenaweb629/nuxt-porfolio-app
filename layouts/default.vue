<template>
  <div id="phb__mount">
    <Nuxt id="phb__content" />
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
  mounted () {
    this.detectLang()
    console.log('[i18n] English initialized')
  },
  methods: {
    detectLang () {
      const lang = localStorage.getItem('phb__lang') || 'en'

      this.$root.$i18n.locale = lang
      document.documentElement.setAttribute('lang', lang)
    }
  }
}
</script>
