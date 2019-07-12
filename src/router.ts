import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/election_types/:electionType',
      props: true,
      component: () => import(/* webpackChunkName: "about" */ './views/election_types/show.vue'),
    },
    {
      path: '/election_types/:electionType/elections/:code',
      props: true,
      component: () => import(/* webpackChunkName: "about" */ './views/election_types/elections/show.vue'),
    },
  ],
});
