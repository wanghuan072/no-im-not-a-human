import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
            {
                path: '/guides',
                name: 'guides',
                component: () => import('../views/GuidesView.vue'),
            },
    {
      path: '/endings',
      name: 'endings',
      component: () => import('../views/EndingsView.vue'),
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/visitors',
      name: 'visitors',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/HomeView.vue'),
    },
  ],
})

export default router
