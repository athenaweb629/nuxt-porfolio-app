<template>
  <div id="phb__leading" class="md:text-5xl md:leading-tight text-xl select-none">
    <nuxt-link to="/" class="phb__header text-white font-700 lowercase" v-text="text" />
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
