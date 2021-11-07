<template>
  <div id="phb__home" class="w-full flex-col flex p-24 rounded-xl justify-center items-center">
    <div class="phb__container md:w-1/2">
      <div class="phb__logo flex flex-row">
        <logo text="sky/future." />
      </div>
      <hr>
      <div id="phb__post" class="flex flex-col gap-3">
        <div v-for="i in 3" :key="i" :class="`phb__post-details-${i}`">
          <h1 :class="`text-3xl font-600 lowercase text-${$t(`sky.future.colors.${i}`)}`" v-text="$t(`sky.future.titles.${i}`)" />
          <p>
            {{ $t(`sky.future.content.${i}`) }}
          </p>
        </div>
        <nuxt-link to="/sky">
          {{ $t('sky.footer') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Future',
  head () {
    return {
      title: 'sky/future'
    }
  }
}
</script>
