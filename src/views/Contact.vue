<template>
  <div id="content">
    <h1 v-html="$t('contact_me')"></h1>
		<h3>{{ $t('contact_description') }}<br><br><div class="border"></div><i data-feather="disc"></i> Aexhell#4038<br><i data-feather="twitter"></i> <a class="c-blue" href="https://twitter.com/aexhell">@aexhell</a><br><i data-feather="inbox"></i> hi@aexhell.ml<br><i data-feather="github"></i> <a style="color: gray" href="https://github.com/aexhell">@aexhell</a></h3><h1 class="c-red" v-html="$t('contact_warning')"></h1>
		<h3>{{ $t('contact_array')[0] }}<br>{{ $t('contact_array')[1] }}<br>{{ $t('contact_array')[2] }}<br></h3>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
<script>
feather.replace();

export default {
  name: 'Contact',
	data() {
		return {
			pagename: "aexhell ─ contact."
		}
	},
	created() {
		document.title = this.$route.meta.pagename;
	}
}
</script>