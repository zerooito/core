// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import auth from './utils/auth'
import VueResource from 'vue-resource'
import VueSweetAlert from 'vue-sweetalert'
import MenuBar from './components/MenuBar'
import Breadcrumb from './components/Breadcrumb'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'

// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.use(VueChartkick, { Chartkick })

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueSweetAlert)

Vue.component('icon', Icon)
Vue.component('menu-bar', MenuBar)
Vue.component('breadcrumb', Breadcrumb)

Vue.http.headers.common.AUTHORIZATION = 'Bearer ' + localStorage.token
Vue.http.options.root = process.env.API

Vue.router = router

router.beforeEach((to, from, next) => {
  if (!auth.loggedIn() && to.meta.requireAuth) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'type',
  loginData: {url: 'auth/login', redirect: '/', fetchUser: false},
  fetchData: {url: 'auth/user', method: 'GET'},
  refreshData: {url: 'auth/refresh', method: 'GET', atInit: false}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
