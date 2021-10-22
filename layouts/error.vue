<template>
  <div id="phb__mount" class="p-24 flex-col w-screen h-screen flex justify-center items-center">
    <div id="phb__content" class="flex flex-col justify-center items-center">
      <h1 id="phb__header" class="text-2xl text-red-400 font-500">
        ~$ 404
      </h1>
      <p>page not found.</p>
      <div id="phb__button" class="mt-8 flex justify-center items-center cursor-pointer bg-button hover:bg-btn_hover p-4 rounded-lg">
        <nuxt-link to="/" class="text-white hover:no-underline">
          ../home
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  transition (to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>
