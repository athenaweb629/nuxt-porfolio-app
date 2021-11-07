<template>
  <div id="phb__sky" class="flex-col p-24 w-screen h-screen flex justify-center items-center">
    <div class="phb__container md:w-1/2">
      <div class="phb__logo flex flex-row">
        <logo :text="$t('sky.title')" />
      </div>
      <hr>
      <h1 class="mb-4" v-text="$t('sky.checkout')" />
      <div id="phb__posts" class="flex flex-col gap-4 mb-4">
        <div v-for="post of posts" :key="post.code" :class="`phb__post p-8 mb-1 rounded-xl bg-bluegray-1 phb__post-${post.code}`">
          <nuxt-link class="phb__post-title" :to="`/sky/${post.name}`">
            <div class="phb__post-title flex flex-row gap-2 justify-between items-center text-white">
              <h1 class="text-2xl font-600" v-text="$t(`sky.${post.name}.title`)" />
              <h1 class="text-xl font-400" v-text="$t(`sky.${post.name}.date`)" />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Sky',
  data () {
    return {
      posts: [
        {
          code: 1,
          name: 'future'
        }
      ]
    }
  },
  head () {
    return {
      title: 'sky'
    }
  }
}
</script>
