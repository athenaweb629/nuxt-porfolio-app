<template>
  <div id="phb__home" class="flex w-screen h-screen flex-row justify-center items-center">
    <div id="phb__console" class="flex flex-col">
      <div class="phb__console-details">
        <span class="text-violet-400">aurora</span>
        <span class="text-violet-200">~/labs/phobos</span>
        <span class="text-violet-300">></span>
        <span class="text-violet-300 bg-violet-300 waveAnim">|</span>
      </div>
      <div class="flex flex-row">
        <p class="text-violet-200 whitespace-pre-line">
          contact info: <span class="text-white">hi@aexhell.ml</span>
          discord: <span class="text-white">aexhell#2194</span>
          twitter/github/polywork: <span class="text-white">@aexhell</span>
          <br>
          <nuxt-link to="/love">
            love letter.
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IndexPage'
}
</script>
