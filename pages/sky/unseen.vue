<template>
  <div id="phb__post-unseen" class="w-full h-full flex-col flex p-24 rounded-xl justify-center items-center">
    <div class="phb__container md:w-1/2 h-full">
      <div class="phb__logo flex flex-row">
        <logo text="sky/unseen." />
      </div>
      <hr>
      <div id="phb__post" class="flex flex-col gap-3 pb-8">
        <div v-for="i in 6" :key="i" :class="`phb__post-details-${i}`">
          <h1 :class="`text-3xl font-600 lowercase text-${colors[i]}`" v-text="$t(`sky.unseen.titles.${i}`)" />
          <p>
            {{ $t(`sky.unseen.content.${i}`) }}
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
  name: 'Unseen',
  data () {
    return {
      colors: {
        1: 'indigo-500',
        2: 'yellow-200',
        3: 'rose-500',
        4: 'main',
        5: 'gray-500',
        6: 'green-200'
      }
    }
  },
  head () {
    return {
      title: 'sky/unseen'
    }
  }
}
</script>
