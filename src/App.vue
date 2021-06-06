<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
       prevHeight: 0,
       transitionName: 'slide'
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      if (from.fullPath === to.fullPath) return;

      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }

      this.transitionName = transitionName || 'fade';
      next();
    });
  }
}
</script>