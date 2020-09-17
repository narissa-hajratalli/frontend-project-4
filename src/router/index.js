import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AboutSustainability from '../views/AboutSustainability.vue'
import About from '../views/About.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true
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
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
]

const router = new VueRouter({
  routes
})

export default router

// These routes are exported to our main.js