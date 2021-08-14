<template>
  <div id="app-mount">
    <Topbar />
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Topbar from '@/components/Topbar.vue'; // @ es un alias de src

@Component({
  components: {
    Topbar
  }
})
export default class Home extends Vue {
  transitionName = 'slide';
  lang: string | null= localStorage.getItem("lang");

  mounted(): any {
    if (this.lang) {
      this.$root.$i18n.locale = this.lang;
      if (document.all) document.all[0].lang = this.lang;
    }
  }
  created(): any {
    this.$router.beforeEach((to, from, next) => {
      if (from.fullPath === to.fullPath) return;

      let transitionName = to!.meta!.transitionName || from!.meta!.transitionName;

      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }

      this.transitionName = transitionName || 'slide';
      next();
    });
  }
}
</script>