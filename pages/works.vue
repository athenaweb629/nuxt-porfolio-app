<template>
  <div id="phb__works" class="p-24 flex-col w-screen h-screen flex justify-center">
    <logo text="My works" />
    <div class="mt-2 w-1/2">
      <p class="text-2xl font-400 md:text-xl">what are ya buyin'?</p>
      <div class="phb__works-container flex flex-col gap-2 w-4xl items-stretch mt-4">
         <div v-for="project in works" :key="project.name" :class="`phb__work-${project.code} bg-grey-2 p-8 rounded-lg flex flex-col w-3xl justify-around`">
            <h1 class="md:text-xl text-2xl font-600 border-b-2 pb-2" v-html="project.name"></h1>
            <div class="flex flex-row items-end relative">
               <h1 class="md:text-lg text-xl mt-2" v-html="project.position"></h1>
               <h1 class="md:text-lg text-md font-medium absolute bottom-0 right-0">{{ project.moment }}</h1>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
   name: "works",
   head() {
    return {
      title: "works"
    };
   },
   data() {
      return {
         works: [
            {
               name: 'Moon Chat',
               code: 'moon',
               position: 'Lead Developer',
               moment: '2020 — PRESENT'
            },
            {
               name: 'CreepLand Inc.',
               code: 'creepland',
               position: 'Front-end Developer',
               moment: '2021 — PRESENT'
            },
            {
               name: "Puroto App",
               code: 'purr',
               position: 'Front-end Developer',
               moment: '2021 — PRESENT'
            }
         ]
      }
   }
}
</script>