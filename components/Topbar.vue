<template>
  <div id="phb__topbar" class="fixed border-b border-midnight-200 bg-midnight-100 flex flex-row justify-between p-12 w-full">
    <div class="phb__topbar-left">
      <h1 class="text-midnight-600">
        aexhell.
      </h1>
    </div>
    <div class="phb__topbar-right flex flex-row">
      <nuxt-link to="/" class="ml-6">
        home.
      </nuxt-link>
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
