import Vue from 'vue'
import Router from 'vue-router'

// components
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Sales from '@/components/Sales'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/sales',
      name: 'Sales',
      component: Sales,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: {
        requireAuth: false
      }
    }
  ]
})
