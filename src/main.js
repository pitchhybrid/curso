import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import Vuex from 'vuex';

Vue.config.productionTip = false;
require('@/assets/main.scss')
require('@/assets/style.css')
require('@/assets/all.js')

Vue.use(Vuex)
const store = new Vuex.Store({

});


import '@/components/index'

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
