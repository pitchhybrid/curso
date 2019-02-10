import Vue from 'vue';
import Router from 'vue-router';

import contatos from '../views/contatos'
import depoimentos from '../views/depoimentos'
import perfil from '../views/perfil'
import servicos from '../views/servicos'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[{
    path: '/',
    name: 'home',
    component: ()=> import(`@/views/home.vue`),
  },
  contatos,
  depoimentos,
  perfil,
  servicos
],
});
