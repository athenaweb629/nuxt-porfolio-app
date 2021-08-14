import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue'),
      meta: { transitionName: 'slide' }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue'),
      meta: { transitionName: 'slide' }
    }
  ]
});

export default router;