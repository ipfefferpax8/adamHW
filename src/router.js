import Vue from 'vue';
import Router from 'vue-router';
import EditButton from './views/EditButton.vue';
import ViewCompany from './views/ViewCompany.vue';
import EditCompany from './views/EditCompany.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      EditButton,
    },
    {
      path: '/edit-company',
      name: 'edit',
      component: EditCompany,
      EditButton,
    },
    {
      path: '/view-company',
      name: 'view',
      component: ViewCompany,
    },
  ],
});
