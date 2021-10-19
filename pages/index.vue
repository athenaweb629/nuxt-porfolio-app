<template>
  <div id="phb__home" class="w-full flex-col flex p-24 rounded-xl">
    <div class="phb__logo flex flex-row items-center">
      <logo text="aexhell." />
    </div>
    <hr>
    <Social />
  </div>
</template>

<script>
export default {
  name: 'Index',
  head () {
    return {
      title: 'home'
    }
  }
}
</script>
