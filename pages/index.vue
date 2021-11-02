<template>
  <div id="phb__home" class="w-full flex-col flex p-24 rounded-xl justify-center items-center">
    <div class="phb__container md:w-1/2">
      <div class="phb__logo flex flex-row">
        <logo text="aexhell." />
      </div>
      <hr>
      {{ $t('home.description') }}
      <nuxt-link to="./positions">
        {{ $t('home.positions') }}
      </nuxt-link>
      <Social />
    </div>
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
