<template>
  <div id="phb__home" class="flex w-screen h-screen flex-row justify-center items-center">
    <div class="phb__post-container flex flex-col justify-center items-center">
      <div class="phb__post-details">
        <span class="text-midnight-400 text-sm">>> [#] {{ date.getMonth() }}/{{ date.getDate() }}/{{ date.getFullYear() }} {{ date.getHours() }}:{{ date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes() }} {{ date.getHours() >= 12 ? 'PM' : 'AM' }}</span>
      </div>
      <p v-if="showMsg" class="text-midnight-900 text-center">
        [耒] / {{ messages[phrase ? phrase : Math.floor(Math.random() * messages.length)] }}
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
      date: new Date(),
      phrase: null,
      showMsg: false,
      messages: [
        'for a better day. for a broken sky.',
        'reach for the moon.',
        'come back home.',
        'carve your name into those shining stars',
        'one day, i had a garden. soon i won\'t have any garden.',
        'sitting in the grass, watching my whole world reborn.',
        'retribution.',
        'do you remember being born?',
        'apart but still together.',
        'tell me, how does it feel to be betrayed by your own kin?',
        'looking out for you.',
        'sweet blossom~',
        'maybe if i keep believing, my dreams will come to life.',
        '17',
        'happiness.toString() returns null to me.',
        'find your shelter.',
        'have you really found solace in the dark?',
        'it\'s snowing out there.',
        'congratulations! you found the secret phrase!',
        'midnight is the answer.',
        '0xz28.'
      ]
    }
  },
  mounted () {
    // this.storeToken()
    this.showMsg = true
  },
  methods: {
    storeToken () {
      const get = localStorage.getItem('phrase')
      if (!get) { localStorage.setItem('phrase', Math.floor(Math.random() * this.messages.length)) } else { this.phrase = get }
    }
  }
}
</script>
