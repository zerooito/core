import Vue from 'vue'
import Router from 'vue-router'

// components
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Sales from '@/components/Sales/Sales'
import SaleView from '@/components/Sales/SaleView'
import Products from '@/components/Products/Products'
import ProductView from '@/components/Products/ProductView'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
        requireAuth: true
      },
      children: [
        {
          path: 'view/:id',
          name: 'SaleView',
          component: SaleView,
          props: true
        }
      ]
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'view/:id',
          name: 'ProductView',
          component: ProductView
        }
      ]
    }
  ]
})
