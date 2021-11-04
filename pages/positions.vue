<template>
  <div id="phb__home" class="w-full flex-col flex p-24 rounded-xl justify-center items-center">
    <div class="phb__container md:w-1/2">
      <div class="phb__logo flex flex-row">
        <logo :text="$t('positions.title')" />
      </div>
      <hr>
      <div id="phb__positions" class="flex flex-col p-8 bg-grey-1 rounded-xl gap-4">
        <div v-for="position of positions" :key="position.code" :class="`phb__position phb__position-${position.code}`">
          <div class="phb__position-title flex flex-row gap-2 items-center">
            <h1 class="text-2xl font-600" v-text="position.name" />
            (<h1 class="text-lg font-400" v-text="`${position.work}`" />)
          </div>
          <div class="phb__position-details flex flex-row gap-2">
            <p v-text="position.dates.from" /> ── <p v-text="position.dates.to" />
          </div>
        </div>
      </div>
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
          code: 'moon',
          work: this.$phobos.$t('positions.moon.work'),
          dates: {
            from: this.$phobos.$t('positions.moon.dates.from'),
            to: this.$phobos.$t('positions.moon.dates.to')
          }
        },
        {
          name: 'Puroto App',
          code: 'puroto',
          work: this.$phobos.$t('positions.puroto.work'),
          dates: {
            from: this.$phobos.$t('positions.puroto.dates.from'),
            to: this.$phobos.$t('positions.puroto.dates.to')
          }
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
