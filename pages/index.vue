<template>
  <div id="phb__home" class="flex w-screen h-screen flex-row justify-center items-center">
    <div class="phb__post-container flex flex-col justify-center items-center">
      <div class="phb__post-details">
        <span class="text-midnight-400 text-sm">>> [#] 2/25/2022 1:35 PM</span>
      </div>
      <p v-if="showMsg" class="text-midnight-900">
        [耒] / {{ messages[Math.floor(Math.random() * messages.length)] }}
      </p>
      <p v-else class="text-midnight-900">
        [耒]
      </p>
      <div class="phb__social mt-8 text-midnight-500 text-sm">
        <a href="https://github.com/aexhell">
          地狱
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      showMsg: false,
      messages: [
        'for a better day. for a broken sky.',
        'reach for the moon.',
        'come back home.',
        'carve your name in the shining stars',
        'one day, i had a garden. soon i won\'t have any garden.',
        'sitting in the grass, watching my whole world reborn.',
        'retribution.',
        'do you remember being born?',
        'looking out for you.',
        'sweet blossom~',
        'i don\'t remember those days when my parents would kiss me goodnight every night.',
        '17',
        'happiness.toString() returns null',
        'find your shelter.',
        'i don\'t know what a family is.',
        'have you really found solace in the dark?'
      ]
    }
  },
  mounted () {
    this.showMsg = true
  }
}
</script>
