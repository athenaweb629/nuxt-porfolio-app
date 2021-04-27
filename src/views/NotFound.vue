<template>
  <div id="content">
    <h1 class="c-red">This page does not exist!</h1>
		
		<router-link class="c-yellow" to="/">Volver a Home.</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
	data() {
		return {
			pagename: "aexhell ─ not found."
		}
	},
	created() {
		document.title = this.$route.meta.pagename;
	}
}
</script>