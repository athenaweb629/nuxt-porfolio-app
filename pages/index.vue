<template>
  <div id="phb__home" class="p-24 flex-col w-screen h-screen flex justify-center items-center">
    <logo :text="$t('home.title')" />
    <div class="mt-2 md:mt-6 md:w-1/2 w-full">
      <p class="text-sm text-gray-400 md:text-xl font-400">
        {{ $t('home.description') }}
      </p>
    </div>
    <Social />
  </div>
</template>

<script>
export default {
  name: 'Index',
  head () {
    return {
      title: 'home'
    }
  }
}
</script>
