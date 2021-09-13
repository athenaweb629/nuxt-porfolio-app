<template>
  <nuxt-link to="/" class="text-white md:text-5xl md:leading-tight select-none text-xl font-700 lowercase phb__header" v-text="text" />
</template>

<script lang="ts">
export default {
  name: 'Logo',
  props: {
    text: {
      type: String,
      default: 'Aexhell'
    }
  }
}
</script>
