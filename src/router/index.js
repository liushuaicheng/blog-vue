import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home2'
import List from '@/components/List'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    }
  ]
})
