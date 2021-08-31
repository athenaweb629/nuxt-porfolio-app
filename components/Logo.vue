<template>
  <nuxt-link to="/" class="md:text-6xl md:leading-tight select-none text-4xl font-700 lowercase phb__header w-min" v-text="text"></nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default {
   name: "Logo",
   props: {
      text: String
   }
}
</script>