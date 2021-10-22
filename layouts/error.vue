<template>
  <div id="phb__mount" class="p-24 flex-col w-screen h-screen flex justify-center items-center">
    <h1 id="phb__header" class="text-2xl text-red-400">
      ~$ 404
    </h1>
    <div id="phb__content">
      <p>page not found.</p>
      <div id="phb__button" class="mt-8 flex justify-center items-center cursor-pointer bg-button hover:bg-indigo-700 p-4 rounded-lg">
        <nuxt-link to="/" class="text-white hover:no-underline">
          ../home
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  meta: {
    title: 'Not Found',
    namespace: 'normal'
  }
})
</script>