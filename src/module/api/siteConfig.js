import axios from 'axios'
import router from '@/router'
import LS from '@/module/Services/ls.js'
import Authenticated from '@/module/Services/auth.js'

// import NProgress from 'nprogress'
// var NProgress = require("nprogress")
// var PulseLoader = require('vue-spinner/src/PulseLoader.vue');
// EndPoint API
var instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URI
    ? process.env.VUE_APP_BACKEND_URI
    : 'https://deveb.cms.eroam.com/api',
  timeout: 120000
})
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const AUTH_TOKEN = LS.get('auth.token')
    if (AUTH_TOKEN) {
      config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
    }
    config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    if (response.data.EPC) {
      response.data = JSON.parse(
      )
    }
    return response
  },
  function (error) {
    if (error.response.data.statusCode === 401) {
      Authenticated.clearLocalStorage()
      window.location.href === window.location.origin + '/' ? window.location.href = '/' : router.push('/')
    }
    // Do something with response error
    return Promise.reject(error)
  }
)
export default instance
