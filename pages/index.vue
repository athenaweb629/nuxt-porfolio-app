<template>
  <div id="axhl__home" class="flex w-full h-full flex-col justify-center items-center">
    <div class="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
      <span class="md:hidden block select-none absolute w-min top-0 left-3 text-left text-midnight-400">/\\ \\\\ · / /// - // \ /\\ \\\\ · / /// - // \ /\\ \\\\ · / /// - // \ /\ /\\ \\\\ · / /// - // \ /\\ \\\\ · / /// - // \ /\\ \\\\</span>
      <h1 id="__subtitle-stroke" class="text-6xl font-bold text-midnight-900">
        i'm
      </h1>
      <h1 id="__title-stroke" class="text-6xl font-bold text-midnight-900">
        aexhell.
      </h1>
      <div class="flex flex-col justify-center items-center mt-4">
        <svg
          class="md:hidden block slidedown cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          width="50px"
          height="50px"
          viewBox="0 0 960 560"
          enable-background="new 0 0 960 560"
          xml:space="preserve"
          @click="goto('data-container')"
        >
          <g id="Rounded_Rectangle_33_copy_4_1_">
            <path class="text-midnight-400" fill="currentColor" d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937   c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937   c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z" />
          </g>
        </svg>
      </div>
      <span class="md:hidden block select-none absolute top-0 w-min right-6 text-right text-midnight-400">/\\ \\\\ · / /// - // \ /\\ \\\\ · / /// - // \ /\\ \\\\ · / /// - // \ /\ /\\ \\\\ · / /// - // \ /\\ \\\\ · / /// - // \ /\\ \\\\</span>
    </div>
    <div class="flex p-12 flex-col w-full overflow-x-hidden">
      <div ref="data-container" class="__axhl-container">
        <h1 class="md:text-4xl text-3xl font-bold text-midnight-900">
          hello.
        </h1>
        <p class="mb-6 text-midnight-1000 text-base md:text-md">
          The name's Aexhell. I am a 16-yo front-end developer focused on web engineering.
          My main tools are Visual Studio Code and Figma. I started programming around 2015, GML being my first language. On 2018, I started learning HTML, CSS, and JS. On 2019-2020, I started learning the Vue.js framework, with Nuxt on 2021. On 2022, I started learning Svelte framework.
        </p>
      </div>
      <div class="__axhl-container">
        <h1 class="md:text-4xl text-3xl font-bold text-midnight-900">
          contact.
        </h1>
        <p class="mb-6 text-midnight-1000 text-base md:text-md">
          You can use my <a href="mailto:aexhell@gmail.com">email</a> to contact me.
          If you have a project request, have in mind that:
          <ul class="ml-8 list-disc my-2">
            <li>I do not accept projects using React/Angular/PHP. I work with Vue.js/Nuxt.</li>
            <li>I do not accept projects without payment. We can discuss the price of the project.</li>
            <li>I am not entirely back-end. I have more experience with front-end.</li>
            <li>I prefer telecommuting.</li>
            <li>I accept payments using my currency (€ &lt;euro&gt;).</li>
          </ul>
          If you agree with all of these statements, contact me using the email from above.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    goto (refName) {
      const elem = this.$refs[refName]
      const top = elem.offsetTop

      window.scrollTo(0, top)
    }
  }
}
</script>
