import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AboutSustainability from '../views/AboutSustainability.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/AboutSustainability',
    name: 'AboutSustainability',
    component: AboutSustainability
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  routes
})

export default router
