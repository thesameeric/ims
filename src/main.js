import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Default from './layouts/default.vue';

Vue.config.productionTip = false;
Vue.component('defaultLayout', Default);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
