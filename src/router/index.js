import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Players from '@/pages/Players'
import Tricks from '@/pages/Tricks'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/players/:player',
      name: 'Zawodnicy',
      component: Players
    },
    {
      path: '/tricks/:trick',
      name: 'Akrobacje',
      component: Tricks
    },
    {
      path: '/about',
      name: 'O nas',
      component: About
    }
  ]
})