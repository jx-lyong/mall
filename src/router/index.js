import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import sort from '@/components/sort/sort'
import cart from '@/components/shopCart/shopCart'
import my from '@/components/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
  ]
})
