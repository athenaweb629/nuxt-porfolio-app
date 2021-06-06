import Vue from 'vue';
import App from './App.vue';
import VueFeather from 'vue-feather';
import router from './router.js';
import store from './store.js';
import moment from 'moment';

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.use(VueFeather);

new Vue({
  router,
  store,
  template: '<App/>',
  render: h => h(App),
  created() {
    this.$router.push('/').catch(()=>{});
  }
}).$mount('#app');