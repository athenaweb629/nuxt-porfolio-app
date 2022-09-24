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
        Contact
      </h1>
      <p class="text-sm mb-4 text-midnight-800">
        I use <a class="text-midnight-600 underline" href="mailto:aexhell@gmail.com">email</a> and <span class="cursor-help border-dotted border-b border-midnight-800" title="aexhell#8888">Discord</span> as main contact form.
        If you need to contact me, please use some guidelines:
        <ul class="ml-8 mt-4 list-disc">
          <li>I <b>do not</b> accept jobs that require knowledge of React/Svelte/Angular. I may consider jobs that require React Native as I am starting to use it.</li>
          <li><b>Payments</b> are made with my <b>currency</b> <span class="cursor-help border-dotted border-b border-midnight-800" title="Euro">(€)</span>.</li>
          <li>I <b>do not</b> work as a full-time developer, I already have a half-time job.</li>
          <li>My main languages are <b>Español</b> and <b>English</b>. I prefer text over voice chat, but I have little trouble if voice chatting needed.</li>
          <li>I prefer <b>small teams</b> - but again - I have little trouble working with large teams.</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>
