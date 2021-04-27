import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store.js';
import locale_en from "./i18n/en.js";
import locale_es from "./i18n/es.js";
//import '../public/app.css';
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false;
Vue.config.devtools = false; 
Vue.use(VueI18n);

const messages = {
  en: locale_en,
  es: locale_es
}

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

new Vue({
  router,
  store,
	i18n,
  render: function (h) { return h(App) }
}).$mount('#app');