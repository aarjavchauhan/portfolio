import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';

const router = createRouter({
        history: createWebHistory(),
        routes: [
          { path: '/', component: Home },
        ]
      });
      
createApp(App).use(router);
