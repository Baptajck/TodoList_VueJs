import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

export default router
