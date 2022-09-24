<template>
  <div id="axhl__home" class="w-screen h-screen px-12 md:px-24 py-12 z-0">
    <div class="flex flex-row w-full items-center justify-between">
      <div>
        <nuxt-link to="/" class="uppercase text-sm font-light text-midnight-500 mr-4">
          Home
        </nuxt-link>
        <nuxt-link to="/about" class="uppercase text-sm font-light text-midnight-500 mr-4">
          About
        </nuxt-link>
        <nuxt-link to="/contact" class="uppercase text-sm font-light text-midnight-500">
          Contact
        </nuxt-link>
      </div>
      <Themer class="text-midnight-500 hover:text-midnight-800 cursor-pointer" />
    </div>
    <div class="flex flex-col justify-start items-start w-full p-8 h-auto bg-midnight-200 mt-4 rounded-md">
      <h1 class="font-bold text-xl my-4 text-midnight-900">
        About
      </h1>
      <p class="text-sm mb-4 text-midnight-800">
        My name is Aexhell. I am a 16 year old Spanish software engineer working as a front-end developer.
        Computer science always fascinated me as a kid, and in 2015 I was already experimenting with GameMaker (GML) for game development,
        at the age of 9. At the age of 13, I joined Wikia, where I officially created my first account.
        At Wikia I started playing around with HTML, CSS and JS. When I was 15 years old I started experimenting with the Vue framework and Nuxt.js.
        I am currently using Vue, Nuxt and React Native as main frameworks.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>
