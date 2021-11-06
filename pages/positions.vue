<template>
  <div id="phb__positions" class="w-full flex-col flex p-24 rounded-xl justify-center items-center">
    <div class="phb__container md:w-1/2">
      <div class="phb__logo flex flex-row">
        <logo :text="$t('positions.title')" />
      </div>
      <hr>
      <div id="phb__positions" class="flex flex-col p-8 bg-bluegray-1 rounded-xl gap-4">
        <div v-for="position of positions" :key="position.code" :class="`phb__position phb__position-${position.code}`">
          <div class="phb__position-title flex flex-row gap-2 items-center justify-between">
            <h1 class="text-2xl font-600" v-text="position.name" />
            <div class="flex flex-row items-end">
              <h1 class="text-lg font-400 text-right text-bluegray-3" v-text="$t(`positions.${position.code}.work`)" />
            </div>
          </div>
          <div class="phb__position-details flex flex-row gap-2 justify-between items-center text-gray-500">
            <p v-text="$t(`positions.${position.code}.dates.from`)" />
            <hr>
            <div class="flex flex-row items-end text-right">
              <h1 v-text="$t(`positions.${position.code}.dates.to`)" />
            </div>
          </div>
        </div>
      </div>
      <!--<h1 class="mt-4">
        {{ $t('positions.footer') }}
        <nuxt-link to="/works">
          {{ $t('positions.works') }}?
        </nuxt-link>
      </h1>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Positions',
  data () {
    return {
      positions: [
        {
          name: 'Moon IRC',
          code: 'moon'
        },
        {
          name: 'Puroto App',
          code: 'puroto'
        }
      ]
    }
  },
  head () {
    return {
      title: 'positions'
    }
  }
}
</script>
