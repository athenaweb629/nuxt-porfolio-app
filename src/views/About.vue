<template>
  <div id="content">
    <h1 class="c-yellow">{{ $t('about_title') }}</h1>
		<h3>{{ $t('about_description') }}</h3>
		<h1 class="c-blue">{{ $t('about_firstjob') }}</h1>
		<h3 v-html="$t('about_firstjob_description')"></h3>
		<h1 class="c-red">{{ $t('about_pl_title') }}</h1>
		<h3 v-html="$t('about_pl_description')"></h3><h3>• JavaScript.<br>• CSS.<br>• HTML.<br>• Lua.<br>• Python.<br>• PHP.<br>• JSON.</h3>
  </div>
</template>

<script>
import Vue from 'vue';
import locale_en from "../i18n/en.js";
import locale_es from "../i18n/es.js";

export default {
  name: 'About',
	data() {
		return {
			pagename: "aexhell ─ about.",
			locate: locale_es,
			lang: null
		}
	},
	created() {
		document.title = this.$route.meta.pagename;
		if (this.lang) Vue.set(this.$root.$i18n, 'locale', this.lang);
	}
}
</script>