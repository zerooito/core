import Vue from 'vue'
import Router from 'vue-router'

// components
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'

import Sales from '@/components/Sales/Sales'
import SalesList from '@/components/Sales/List'
import SaleView from '@/components/Sales/View'

import Products from '@/components/Products/Products'
import ProductsList from '@/components/Products/List'
import ProductCreate from '@/components/Products/Create'
import ProductEdit from '@/components/Products/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requireAuth: false }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requireAuth: true }
    },
    {
      path: '/sales',
      component: Sales,
      meta: { requireAuth: true },
      redirect: { name: 'Sales' },
      children: [
        { path: 'list', name: 'Sales', component: SalesList },
        { path: 'view/:id', name: 'SaleView', component: SaleView, props: true }
      ]
    },
    {
      path: '/products',
      component: Products,
      meta: { requireAuth: true },
      redirect: { name: 'Products' },
      children: [
        { path: 'list', name: 'Products', component: ProductsList },
        { path: 'create', name: 'ProductCreate', component: ProductCreate },
        { path: 'edit/:id', name: 'ProductEdit', component: ProductEdit, props: true }
      ]
    },
    { path: '*', redirect: { name: 'Dashboard' } }
  ]
})
