<template>
  <div id="phb__leading" class="md:text-4xl md:leading-tight text-2xl select-none">
    <nuxt-link to="/" class="phb__header text-main font-300 lowercase" v-text="text" />
  </div>
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
