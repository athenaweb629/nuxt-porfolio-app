<template>
  <div id="phb__sky" class="p-24 flex-col w-screen h-screen flex justify-center items-center">
    <h1 v-if="!playing" id="phb__header" class="text-orange-200 text-xl lowercase mb-4">
      My Sky
    </h1>
    <div id="phb__skycloud">
      <div v-if="!playing" id="phb__decide" class="flex flex-row">
        <div class="phb__button lowercase text-sm mr-4 pl-4 pr-4 pt-2 pb-2 cursor-pointer border" @click="skyCloud(true)">
          Sound
        </div>
        <div class="phb__button lowercase text-sm pl-4 pr-4 pt-2 pb-2 cursor-pointer border" @click="skyCloud(false)">
          No Sound
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Index',
  data () {
    return {
      playing: false,
      sound: true
    }
  },
  head () {
    return {
      title: 'home'
    }
  },
  methods: {
    skyCloud () {
      const skycloud = document.getElementById('phb__skycloud')

      skycloud!.innerHTML = '<div id="phb__soon">coming soon</div>'
    }
  }
}
</script>
