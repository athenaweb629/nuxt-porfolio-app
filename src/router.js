import Vue from 'vue';
import VueRouter from 'vue-router';
import len from './i18n/en.js';
import les from './i18n/es.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import('./views/Home.vue')
    },
    meta: { transitionName: 'slide', pagename: "aexhell ─ home.", lang: "en" }
  },
  {
    path: '/es',
    name: 'Hogar',
    component: function () {
      return import('./views/Home.vue')
    },
    meta: { transitionName: 'slide', pagename: "aexhell ─ hogar.", lang: "es" }
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('./views/About.vue')
    },
    meta: { transitionName: 'slide', pagename: "aexhell ─ about." }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: function () {
      return import('./views/Contact.vue')
    },
    meta: { transitionName: 'slide', pagename: "aexhell ─ contact." }
  },
  {
    path: '*',
    name: 'NotFound',
    component: function () {
      return import('./views/NotFound.vue')
    },
    meta: { pagename: "aexhell ─ not found.",transitionName: 'slide' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
