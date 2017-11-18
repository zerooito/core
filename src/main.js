// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import auth from './utils/auth'
import VueSweetAlert from 'vue-sweetalert'
import MenuBar from './components/MenuBar'
import Breadcrumb from './components/Breadcrumb'
import Footer from './components/Footer'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Vuetable from 'vuetable-2'
import VueToastr from '@deveodk/vue-toastr'
import i18n from 'voo-i18n'

import './utils/axios'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
import translations from './map'

Vue.use(i18n, translations)

Vue.use(VueToastr, {
  defaultPosition: 'toast-top-right',
  defaultType: 'info',
  defaultTimeout: 1000
})

Vue.use(Vuetable, { Vuetable })
Vue.use(VueChartkick, { Chartkick })

Vue.config.productionTip = false

Vue.use(VueSweetAlert)

Vue.component('icon', Icon)
Vue.component('menu-bar', MenuBar)
Vue.component('breadcrumb', Breadcrumb)
Vue.component('vuetable', Vuetable)
Vue.component('footer-component', Footer)

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
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
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
