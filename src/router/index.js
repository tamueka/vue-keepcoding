
import Vue from 'vue';
import Router from 'vue-router';
import Usuarios from '@/components/Usuarios';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Usuarios',
      component: Usuarios,
    },
  ],
});
