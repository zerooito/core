import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

axios.defaults.baseURL = process.env.API

axios.interceptors.request.use((request) => {
  request.headers.common.Authorization = `Bearer ${localStorage.token}`
  return request
})

Vue.prototype.$http = axios
Vue.use(VueAxios, axios)

export default axios
