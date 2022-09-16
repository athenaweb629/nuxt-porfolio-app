<template>
  <div id="axhl__home" class="w-screen h-screen px-12 md:px-24 py-12 z-0">
    <div class="flex flex-row w-full items-center md:justify-start justify-center">
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
    <div class="flex flex-row justify-start items-start w-full xs:h-full sm:h-2/6 h-2/6 bg-midnight-200 mt-4 rounded-md">
      <div class="w-1/2 bg-midnight-50 rounded-tl-md rounded-bl-md h-full flex justify-center items-center">
        <svg
          class="text-midnight-700 md:w-full w-1/2"
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="83"
          viewBox="0 0 109 83"
          fill="none"
        >
          <path d="M54.5 0L81.1981 39.9096L90.9238 53.9594H81.1981L109 83V53.9594L81.1981 39.9096H65.7513L54.5 26.4176L42.1045 39.9096L27.25 40.1885L0 53.9594V83L27.25 53.9594H16.932L27.25 40.1885L54.5 0Z" fill="currentColor" />
        </svg>
      </div>
      <div class="w-1/2 md:overflow-y-hidden overflow-y-scroll h-full border-l border-midnight-400 p-4 md:p-6">
        <span class="uppercase text-xs font-light text-midnight-700">Aexhell</span>
        <h1 class="font-bold text-xl md:mt-2 text-midnight-900">
          Welcome!
        </h1>
        <p class="font-normal relative mt-1 xl:text-lg sm:text-md lg:text-md md:text-base text-xs text-midnight-800">
          The name's Aexhell. I am a web developer and graphic designer.
          My main language is TypeScript and my main frameworks are Vue, React Native and Nuxt.
          I work as a part-time job being a front-end developer.
        </p>
      </div>
    </div>
    <h1 class="font-bold text-xl mt-4 text-midnight-900">
      Projects
    </h1>
    <div class="flex flex-col md:flex-row w-full items-stretch gap-4 mt-4 md:pb-auto pb-16">
      <div v-for="proj in projects" :key="proj.code" :class="`relative bg-midnight-50 border border-midnight-200 __axhl-project-${proj.code} rounded-md w-full h-full flex flex-col md:justify-start justify-center`">
        <div :style="`background: linear-gradient(to right, rgb(30 30 40 / 30%), rgb(37 32 45)), url(${proj.image})`" class="left-0 bg-left bg-center rounded-tl-md h-48 rounded-tr-md w-full relative" />
        <div class="p-4 md:p-8 border-t border-midnight-200">
          <h1 class="font-bold md:text-lg text-sm text-midnight-900" v-text="proj.title" />
          <p class="font-normal relative mt-1 h-full sm:text-md lg:text-md md:text-base text-xs text-midnight-800" v-text="proj.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      projects: [
        {
          code: 'moon',
          title: 'Moon',
          description: 'Electron+Vue concept IRC.',
          date: '08/22/2022',
          image: 'https://cdn.discordapp.com/attachments/496044498401361920/907371446379114557/unknown.png'
        },
        {
          code: 'sapphire',
          title: 'Sapphire',
          description: 'Social media made with Nuxt.',
          date: '08/22/2022',
          image: 'https://cdn.discordapp.com/attachments/904189326974386177/1020163621726199808/unknown.png'
        }
      ]
    }
  }
}
</script>
