// the router file
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ButtonsView from '@/views/ButtonsView.vue'

// * the routes we define
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: ButtonsView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
]

// * our router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
