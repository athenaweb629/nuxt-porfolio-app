<template>
  <div id="axhl__works" class="flex w-screen h-screen flex-row justify-center items-center">
    <div class="axhl__container flex flex-col md:mt-1 mt-24">
      <h1 class="text-2xl mb-4 text-midnight-700">
        my works.
      </h1>
      <div class="axhl__works__container border border-midnight-300 flex lg:flex-row flex-col bg-midnight-200 rounded-md">
        <div v-for="work in works" :key="work.code" class="axhl__work-container flex flex-col justify-center items-center p-12">
          <h1 class="text-midnight-600" v-text="work.code + '.'" />
          <p class="text-midnight-900 lowercase" v-text="work.position" />
          <p class="text-midnight-900 lowercase" v-text="work.period" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IndexPage',
  data () {
    return {
      works: [
        {
          code: 'moon',
          position: 'Senior Developer',
          period: '2019 / 2021'
        },
        {
          code: 'puroto',
          position: 'Front-end Dev',
          period: 'Aug. 2021 / Dec. 2021'
        },
        {
          code: 'requiem',
          position: 'Senior Developer',
          period: 'May 2022 / currently'
        }
      ]
    }
  }
}
</script>
