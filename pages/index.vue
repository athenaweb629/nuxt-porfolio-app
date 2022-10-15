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
    <div class="flex flex-row justify-start relative items-start w-full xs:h-4/6 sm:h-2/6 h-2/6 bg-midnight-200 mt-4 rounded-md">
      <div class="w-1/2 bg-midnight-50 rounded-tl-md rounded-bl-md h-full flex justify-center items-center">
        <svg
          class="text-midnight-700 md:w-1/4 w-4/6"
          xmlns="http://www.w3.org/2000/svg"
          width="215"
          height="262"
          viewBox="0 0 215 262"
          fill="none"
        >
          <mask
            id="path-1-outside-1_543_23"
            maskUnits="userSpaceOnUse"
            x="18"
            y="25"
            width="178"
            height="211"
            fill="black"
          >
            <rect fill="white" x="18" y="25" width="178" height="211" />
            <path d="M76.9374 32L106.217 79.264H107.47L137.063 32H180.434L132.052 106.804L182 181.608H137.532L107.47 133.833H106.217L76.1545 181.608H32L81.7129 106.804L33.2526 32H76.9374Z" />
            <path d="M76.9374 79.3915L106.217 126.656H107.47L137.063 79.3915H180.434L132.052 154.196L182 229H137.532L107.47 181.225H106.217L76.1545 229H32L81.7129 154.196L33.2526 79.3915H76.9374Z" />
            <path d="M76.9374 56.1604L106.217 103.424H107.47L137.063 56.1604H180.434L132.052 130.965L182 205.769H137.532L107.47 157.994H106.217L76.1545 205.769H32L81.7129 130.965L33.2526 56.1604H76.9374Z" />
          </mask>
          <path d="M76.9374 32L82.888 28.3136L80.8353 25H76.9374V32ZM106.217 79.264L100.266 82.9504L102.319 86.264H106.217V79.264ZM107.47 79.264V86.264H111.346L113.403 82.9788L107.47 79.264ZM137.063 32V25H133.187L131.13 28.2852L137.063 32ZM180.434 32L186.312 35.8016L193.298 25H180.434V32ZM132.052 106.804L126.174 103.003L123.676 106.865L126.231 110.691L132.052 106.804ZM182 181.608V188.608H195.091L187.822 177.721L182 181.608ZM137.532 181.608L131.608 185.337L133.667 188.608H137.532V181.608ZM107.47 133.833L113.394 130.105L111.336 126.833H107.47V133.833ZM106.217 133.833V126.833H102.351L100.292 130.105L106.217 133.833ZM76.1545 181.608V188.608H80.0203L82.0791 185.337L76.1545 181.608ZM32 181.608L26.17 177.734L18.9431 188.608H32V181.608ZM81.7129 106.804L87.5429 110.679L90.0852 106.853L87.5879 102.998L81.7129 106.804ZM33.2526 32V25H20.3773L27.3777 35.8059L33.2526 32ZM76.9374 79.3915L82.888 75.7051L80.8353 72.3915H76.9374V79.3915ZM106.217 126.656L100.266 130.342L102.319 133.656H106.217V126.656ZM107.47 126.656V133.656H111.346L113.403 130.37L107.47 126.656ZM137.063 79.3915V72.3915H133.187L131.13 75.6767L137.063 79.3915ZM180.434 79.3915L186.312 83.1931L193.298 72.3915H180.434V79.3915ZM132.052 154.196L126.174 150.394L123.676 154.257L126.231 158.083L132.052 154.196ZM182 229V236H195.091L187.822 225.113L182 229ZM137.532 229L131.608 232.728L133.667 236H137.532V229ZM107.47 181.225L113.394 177.497L111.336 174.225H107.47V181.225ZM106.217 181.225V174.225H102.351L100.292 177.497L106.217 181.225ZM76.1545 229V236H80.0203L82.0791 232.728L76.1545 229ZM32 229L26.17 225.126L18.9431 236H32V229ZM81.7129 154.196L87.5429 158.07L90.0852 154.245L87.5879 150.39L81.7129 154.196ZM33.2526 79.3915V72.3915H20.3773L27.3777 83.1975L33.2526 79.3915ZM76.9374 56.1604L82.888 52.474L80.8353 49.1604H76.9374V56.1604ZM106.217 103.424L100.266 107.111L102.319 110.424H106.217V103.424ZM107.47 103.424V110.424H111.346L113.403 107.139L107.47 103.424ZM137.063 56.1604V49.1604H133.187L131.13 52.4456L137.063 56.1604ZM180.434 56.1604L186.312 59.962L193.298 49.1604H180.434V56.1604ZM132.052 130.965L126.174 127.163L123.676 131.026L126.231 134.852L132.052 130.965ZM182 205.769V212.769H195.091L187.822 201.882L182 205.769ZM137.532 205.769L131.608 209.497L133.667 212.769H137.532V205.769ZM107.47 157.994L113.394 154.265L111.336 150.994H107.47V157.994ZM106.217 157.994V150.994H102.351L100.292 154.265L106.217 157.994ZM76.1545 205.769V212.769H80.0203L82.0791 209.497L76.1545 205.769ZM32 205.769L26.17 201.894L18.9431 212.769H32V205.769ZM81.7129 130.965L87.5429 134.839L90.0852 131.014L87.5879 127.159L81.7129 130.965ZM33.2526 56.1604V49.1604H20.3773L27.3777 59.9663L33.2526 56.1604ZM70.9867 35.6864L100.266 82.9504L112.168 75.5776L82.888 28.3136L70.9867 35.6864ZM106.217 86.264H107.47V72.264H106.217V86.264ZM113.403 82.9788L142.996 35.7148L131.13 28.2852L101.537 75.5492L113.403 82.9788ZM137.063 39H180.434V25H137.063V39ZM174.557 28.1984L126.174 103.003L137.93 110.606L186.312 35.8016L174.557 28.1984ZM126.231 110.691L176.178 185.496L187.822 177.721L137.874 102.917L126.231 110.691ZM182 174.608H137.532V188.608H182V174.608ZM143.457 177.88L113.394 130.105L101.545 137.561L131.608 185.337L143.457 177.88ZM107.47 126.833H106.217V140.833H107.47V126.833ZM100.292 130.105L70.2298 177.88L82.0791 185.337L112.142 137.561L100.292 130.105ZM76.1545 174.608H32V188.608H76.1545V174.608ZM37.83 185.483L87.5429 110.679L75.883 102.93L26.17 177.734L37.83 185.483ZM87.5879 102.998L39.1275 28.1941L27.3777 35.8059L75.838 110.61L87.5879 102.998ZM33.2526 39H76.9374V25H33.2526V39ZM70.9867 83.0779L100.266 130.342L112.168 122.969L82.888 75.7051L70.9867 83.0779ZM106.217 133.656H107.47V119.656H106.217V133.656ZM113.403 130.37L142.996 83.1063L131.13 75.6767L101.537 122.941L113.403 130.37ZM137.063 86.3915H180.434V72.3915H137.063V86.3915ZM174.557 75.5899L126.174 150.394L137.93 157.997L186.312 83.1931L174.557 75.5899ZM126.231 158.083L176.178 232.887L187.822 225.113L137.874 150.309L126.231 158.083ZM182 222H137.532V236H182V222ZM143.457 225.272L113.394 177.497L101.545 184.953L131.608 232.728L143.457 225.272ZM107.47 174.225H106.217V188.225H107.47V174.225ZM100.292 177.497L70.2298 225.272L82.0791 232.728L112.142 184.953L100.292 177.497ZM76.1545 222H32V236H76.1545V222ZM37.83 232.874L87.5429 158.07L75.883 150.321L26.17 225.126L37.83 232.874ZM87.5879 150.39L39.1275 75.5856L27.3777 83.1975L75.838 158.002L87.5879 150.39ZM33.2526 86.3915H76.9374V72.3915H33.2526V86.3915ZM70.9867 59.8468L100.266 107.111L112.168 99.738L82.888 52.474L70.9867 59.8468ZM106.217 110.424H107.47V96.4244H106.217V110.424ZM113.403 107.139L142.996 59.8751L131.13 52.4456L101.537 99.7096L113.403 107.139ZM137.063 63.1604H180.434V49.1604H137.063V63.1604ZM174.557 52.3588L126.174 127.163L137.93 134.766L186.312 59.962L174.557 52.3588ZM126.231 134.852L176.178 209.656L187.822 201.882L137.874 127.078L126.231 134.852ZM182 198.769H137.532V212.769H182V198.769ZM143.457 202.041L113.394 154.265L101.545 161.722L131.608 209.497L143.457 202.041ZM107.47 150.994H106.217V164.994H107.47V150.994ZM100.292 154.265L70.2298 202.041L82.0791 209.497L112.142 161.722L100.292 154.265ZM76.1545 198.769H32V212.769H76.1545V198.769ZM37.83 209.643L87.5429 134.839L75.883 127.09L26.17 201.894L37.83 209.643ZM87.5879 127.159L39.1275 52.3544L27.3777 59.9663L75.838 134.771L87.5879 127.159ZM33.2526 63.1604H76.9374V49.1604H33.2526V63.1604Z" fill="currentColor" mask="url(#path-1-outside-1_543_23)" />
          <path d="M76.4353 54L106.691 102.335H107.985L138.565 54H183.382L133.387 130.5L185 207H139.05L107.985 158.142H106.691L75.6263 207H30L81.37 130.5L31.2944 54H76.4353Z" fill="currentColor" />
        </svg>
      </div>
      <div class="w-1/2 overflow-y-auto h-full border-l border-midnight-400 p-4 md:p-6">
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
    <div :class="`flex flex-col md:flex-row w-full items-stretch gap-4 mt-4 md:pb-auto pb-16 ${getInit ? '' : 'animate-slide'}`">
      <div v-for="proj in projects" :key="proj.code" :class="`relative bg-midnight-50 border transform duration-200 transition-colors hover:border-midnight-500 border-midnight-200 __axhl-project-${proj.code} rounded-md w-full h-full flex flex-col md:justify-start justify-center`">
        <a v-if="proj.url" :href="proj.url">
          <div :style="`background: linear-gradient(to right, rgb(37 32 45 / 65%), rgb(37 32 45)), url(${proj.image})`" class="left-0 bg-left bg-center bg-cover rounded-tl-md h-48 rounded-tr-md w-full relative" />
          <div class="p-4 md:p-8 border-t border-midnight-200">
            <h1 class="font-bold md:text-lg text-sm text-midnight-900" v-text="proj.title" />
            <p class="font-normal relative mt-1 h-full sm:text-md lg:text-md md:text-base text-xs text-midnight-800" v-text="proj.description" />
          </div>
        </a>
        <div v-else>
          <div :style="`background: linear-gradient(to right, rgb(37 32 45 / 65%), rgb(37 32 45)), url(${proj.image})`" class="left-0 bg-left bg-center bg-cover rounded-tl-md h-48 rounded-tr-md w-full relative" />
          <div class="p-4 md:p-8 border-t border-midnight-200">
            <h1 v-if="!proj.url" class="font-bold md:text-lg text-sm text-midnight-900" v-text="proj.title" />
            <a v-else :href="proj.url" class="font-bold md:text-lg text-sm text-midnight-900" v-text="proj.title" />
            <p class="font-normal relative mt-1 h-full sm:text-md lg:text-md md:text-base text-xs text-midnight-800" v-text="proj.description" />
          </div>
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
          code: 'mylium',
          title: 'Mylium',
          description: 'Social media made with Nuxt.',
          date: '09/25/2022',
          url: 'https://mylium.app/',
          image: 'https://cdn.discordapp.com/attachments/904189326974386177/1030858008114249728/unknown.png'
        }
      ]
    }
  },
  computed: {
    getInit () {
      return this.$store.state.init
    }
  },
  mounted () {
    if (this.$store.state.init) { return false } else { this.$store.commit('setInit') }
  }
}
</script>
