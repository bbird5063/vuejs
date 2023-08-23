import Main from '@/pages/Main.vue';
import { createRouter, createWebHistory } from 'vue-router';
import UserPage from '@/pages/UserPage.vue'; // добавил
import About from '@/pages/About.vue'; // добавил

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    // добавил
    path: '/users',
    component: UserPage,
  },
  {
    // добавил
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
