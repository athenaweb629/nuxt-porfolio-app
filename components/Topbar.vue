<template>
  <div id="axhl__topbar" class="fixed border-b border-midnight-200 bg-midnight-100 flex flex-row justify-between p-12 w-full">
    <div class="axhl__topbar-left">
      <nuxt-link to="/" class="text-midnight-600">
        aexhell.
      </nuxt-link>
    </div>
    <div class="axhl__topbar-right flex flex-row">
      <nuxt-link to="/about" class="ml-6">
        about.
      </nuxt-link>
      <nuxt-link to="/works" class="ml-6">
        works.
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TopBar'
}
</script>
