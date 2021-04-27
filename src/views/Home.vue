<template>
  <div id="content">
		<h1 v-html="$t('home_title')"></h1>
		<h3 v-html="$t('home_description')"></h3>
		<h1 v-html="$t('home_works')"></h1>
		<h3>• <a class="c-blue" href="https://api.aexhell.ml/get">API</a>.<br>• <a class="c-orange" href="https://saxeum.ml">SaxeumTeam</a>.<br>
		• <a class="c-red">discord.js bots</a>.<br>• <a class="c-blue" href="https://botlist.aexhell.ml">aexhell bot list</a>.</h3>
	</div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Home',
	data() {
		return {
			pagename: "aexhell ─ home."
		}
	},
	created() {
		document.title = this.$route.meta.pagename;
	}
}
</script>