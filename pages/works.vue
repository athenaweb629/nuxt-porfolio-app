<template>
  <div id="phb__works" class="w-full flex-col flex p-24 rounded-xl justify-center items-center">
    <div class="phb__container md:w-1/2">
      <div class="phb__logo flex flex-row">
        <logo :text="$t('works.title')" />
      </div>
      <hr>
      <div id="phb__works" class="flex flex-col p-8 bg-bluegray-1 rounded-xl gap-4 mb-4">
        <div v-for="work of works" :key="work.code" :class="`phb__work phb__work-${work.code}`">
          <div class="phb__work-title flex flex-row gap-2 items-center">
            <h1 class="text-2xl font-600" v-text="work.name" />
          </div>
        </div>
      </div>
      <nuxt-link to="/">
        {{ $t('works.home') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works',
  data () {
    return {
      works: [
        {
          name: 'Moon IRC',
          code: 'moon'
        },
        {
          name: 'Creepland',
          code: 'creepland'
        }
      ]
    }
  },
  head () {
    return {
      title: 'works'
    }
  }
}
</script>
