<template>
  <div id="axhl__about" class="flex w-screen h-screen flex-row justify-center items-center">
    <article class="md:pl-48 md:pr-48 pl-8 pr-8">
      <h1 class="text-2xl text-midnight-700">
        hello.
      </h1>
      <p class="text-midnight-1000">
        the name's aexhell. i am a web developer and graphic designer (wip).
        i currently live on Spain and i am 16-yo. currently searching for projects...
      </p>
      <p class="mt-4 mb-6 text-midnight-1000">
        i started programming around 2015, GML being my first language. on 2018, i started
        learning HTML, CSS, and JS. On 2019-2020, i started learning the Vue.js framework, with Nuxt
        on 2021. on 2022, i started learning Svelte framework.
      </p>
      <nuxt-link to="/works" class="text-midnight-700">
        wanna see my works?
      </nuxt-link>
    </article>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutPage'
}
</script>
