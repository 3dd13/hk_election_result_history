import Vue from 'vue';
import App from './app.vue';
import router from './router';
import './registerServiceWorker';

import '@/assets/css/tailwind.css';
import '@/assets/css/custom.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
