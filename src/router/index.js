import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import Login from '../components/login/Login'

Vue.use(VueRouter)

  const routes = [
  {
    path:'*',
    redirect:'/'
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../components/city/City.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../components/details/Details.vue')
  },
  {
    path: '/order',
    name: 'order',
    meta:{
      requireLogin:true
    },
    component: () => import('../components/order/Order.vue')
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    meta:{
      requireLogin:true
    },
    component: () => import('../components/userCenter/UserCenter.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
