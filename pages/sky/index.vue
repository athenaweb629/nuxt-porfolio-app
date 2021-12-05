<template>
  <div id="phb__sky" class="flex-col p-24 w-screen h-screen flex justify-center items-center">
    <div class="phb__container md:w-1/2">
      <div class="phb__logo flex flex-row">
        <logo :text="$t('sky.title')" />
      </div>
      <hr>
      <h1 class="mb-4" v-text="$t('sky.checkout')" />
      <div id="phb__posts" class="flex flex-col-reverse gap-4 mb-4">
        <div v-for="post of posts" :key="post.code" :class="`phb__post p-8 mb-1 rounded-xl bg-bluegray-1 phb__post-${post.code}`" :style="`background: linear-gradient(90deg, #000000e6, transparent), url(${post.banner}) center 150%;`">
          <nuxt-link class="phb__post-title" :to="`/sky/${post.name}`">
            <div class="phb__post-title flex flex-row gap-2 justify-between items-center text-white">
              <h1 class="text-2xl font-600" v-text="$t(`sky.${post.name}.title`)" />
              <h1 class="text-xl font-400" v-text="$t(`sky.${post.name}.date`)" />
            </div>
          </nuxt-link>
        </div>
      </div>
      <nuxt-link to="/">
        {{ $t('sky.footer_home') }}
      </nuxt-link>
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
          name: 'future',
          banner: 'https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-tobi-620337.jpg&fm=jpg'
        },
        {
          code: 2,
          name: 'unseen',
          banner: 'https://images.pexels.com/photos/2414454/pexels-photo-2414454.jpeg?cs=srgb&dl=pexels-adrian-lang-2414454.jpg&fm=jpg'
        },
        {
          code: 3,
          name: 'nexus',
          banner: 'https://images.unsplash.com/photo-1504253492562-cbc4dc540fcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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
