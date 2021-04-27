<template>
	<div id="topbar">
		<ul>
			<li style="float: left; margin-left: 4px;"><a class="text">aexhell</a></li>
			<li><router-link class="c-green langselect" to="#"><span v-on:click="changeLang()">{{ $t('lang') }}</span></router-link></li>
			<li><router-link class="c-blue" to="./contact">{{ $t('contact') }}</router-link></li>
			<li><router-link class="c-yellow" to="./about">{{ $t('about') }}</router-link></li>
			<li><router-link class="c-red" to="./">{{ $t('home') }}</router-link></li>
		</ul>
		<hr>
		<br>
	</div>
</template>

<script>
import locale_en from "../i18n/en.js";
import locale_es from "../i18n/es.js";
import Vue from 'vue';

export default {
  name: "Topbar",
	data() {
		return {
			locate: locale_en,
			langs: ['es', 'en']
		}
	},
  methods: {
    changeLang() {
			if (this.$root.$i18n.locale === "es") {
				localStorage.setItem('lang', "en");
				return Vue.set(this.$root.$i18n, 'locale', "en");
			}

			localStorage.setItem('lang', "es");
			Vue.set(this.$root.$i18n, 'locale', "es");
    }
  },
	created() {
		let selectedLang = localStorage.getItem('lang');

		if (selectedLang) Vue.set(this.$root.$i18n, 'locale', selectedLang);
		else return;
	}
}
</script>