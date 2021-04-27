<template>
	<div id="app">
		<Topbar/>
		<transition :name="transitionName" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
const DEFAULT_TRANSITION = 'slide';

export default {
  name: "App",
	components: {
		Topbar
	},
  data() {
    return {
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION,
			pagename: "aexhell ─ home."
    };
  },
	watch: {
		$route: {
			immediate: true,
			handler(to, from) {
				document.title = to.meta.pagename || 'aexhell ─ home.';
			}
		}
	},
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;
			
      next();
    });
  }
}
</script>