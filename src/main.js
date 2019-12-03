import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import Vuex from 'vuex';

Vue.config.productionTip = false;
require('@/assets/main.scss')
require('@/assets/style.css')
require('@/assets/all.js')

const store = Vuex.Store({
  
});

import '@/components/index'

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
