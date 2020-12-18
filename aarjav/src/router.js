import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Haiku from '@/views/Haiku.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
   },
  {
    path: '/haiku',
    name: 'haiku',
    component: Haiku
   }
]

const router = createRouter({
        history: createWebHistory(),
        routes,
});

export default router;
