import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/vue'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/vue',
      name: 'vue',
      component: () => import('../views/micro/VueView.vue')
    },
    {
      path: '/angular',
      name: 'angular',
      component: () => import('../views/micro/AngularView.vue')
    },
  ]
})

export default router
