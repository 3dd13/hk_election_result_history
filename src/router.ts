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
      path: '/election_types/legco',
      props: true,
      component: () => import(/* webpackChunkName: "election_types" */ './views/election_types/legco.vue'),
    },
    {
      path: '/election_types/distco',
      props: true,
      component: () => import(/* webpackChunkName: "election_types" */ './views/election_types/distco.vue'),
    },
    {
      path: '/election_types/rural',
      props: true,
      component: () => import(/* webpackChunkName: "election_types" */ './views/election_types/rural.vue'),
    },
    {
      path: '/election_types/:electionType/elections/:code',
      props: true,
      component: () => import(/* webpackChunkName: "elections" */ './views/election_types/elections/show.vue'),
    },
    {
      path: '/election_types/:electionType/elections/:code/constituencies/:constituencyCode',
      props: true,
      component: () => import(/* webpackChunkName: "elections" */ './views/election_types/elections/constituencies/show.vue'),
    },
    {
      path: '/voter_registrations',
      props: true,
      component: () => import(/* webpackChunkName: "voter_registrations" */ './views/voter_registrations/index.vue'),
    },
    {
      path: '/voter_registrations/:year',
      props: true,
      component: () => import(/* webpackChunkName: "voter_registrations" */ './views/voter_registrations/show.vue'),
    },
  ],
});
