import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import LogIn from '@/views/LogIn.vue';
import Dashboard from '@/views/Dashboard.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path : '/login',
    name : 'LogIn',
    component : LogIn
  },
  {
    path : '/dashboard',
    name : 'Dashboard',
    component : Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
