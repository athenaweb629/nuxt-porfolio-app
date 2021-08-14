import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import './assets/app.css';
import { en } from '@/i18n/en';
import { es } from '@/i18n/es';
import { messages } from '@/i18n/lang.loader'

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

Object.defineProperty(Vue.prototype, '$locale', {
  get: function () {
    return i18n.locale
  },
  set: function (locale) {
    i18n.locale = locale
  }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app-mount');
