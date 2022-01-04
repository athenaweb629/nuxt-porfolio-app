<template>
  <div id="phb__love" class="flex w-screen h-screen flex-row justify-center items-center">
    <div id="phb__letters" class="flex flex-col w-1/2 justify-center items-center">
      <input
        id="name"
        class="w-auto bg-midnight-200 text-white outline-none"
        type="text"
        name="name"
        placeholder="Full username"
        value=""
      >
      <div id="phb__letter-content" class="mt-4 w-full h-auto">
        <h1 class="font-semibold mb-2">
          {{ current.username }}
        </h1>
        <p>{{ current.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LovePage',
  data () {
    return {
      current: {
        content: '',
        username: ''
      },
      letters: {
        aehris: {
          username: 'aehris.',
          content: '<3'
        },
        aexhell: {
          username: 'aexhell.',
          content: 'there\'s nothing for me'
        },
        saektide: {
          username: 'saektide.',
          content: 'ola saek. ya ha pasado un tiempo desde q nos conocemos. principalmente ha sido pq me has enseñado bastante de programación y te lo agradezco bastante. no sé qué más puedo decir que no te haya dicho ahora. pasalo bien en este nuevo año! <3'
        },
        nozomi: {
          username: 'chuu simp.',
          content: 'sanaaaaaaaaa <3'
        },
        unai: {
          username: 'unai01.',
          content: 'omniculo'
        },
        green: {
          username: 'greenwithin.',
          content: 'uwuwuwuwuwuwuwuwuu'
        }
      }
    }
  },
  mounted () {
    const input = document.getElementById('name')

    if (input) {
      input.onkeyup = () => {
        if (this.letters[input.value.toLowerCase()]) {
          this.current = this.letters[input.value.toLowerCase()]
        } else {
          this.current = { content: '', username: '' }
        }
      }
    }
  }
}
</script>
