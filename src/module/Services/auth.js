/* eslint-disable */
import Ls from './ls'
import axios from 'axios'
import ApiRequest from '@/module/api/apiService.js'

export default {
  login (user_data) {
    Ls.set('auth.token', user_data.token_data.token)
    Ls.set('auth.name', user_data.username)
    Ls.set('auth.role', user_data.role)
    Ls.set('agent', user_data.id)
    Ls.set('auth.token_id', user_data.token_data.token_id)
    Ls.set('auth.section', 'back')
  },
  logout (token_id) {
    return ApiRequest.logout(token_id)
    // Reload
  },
  clearLocalStorage () {
    Ls.remove('auth.token')
    Ls.remove('auth.token_id')
    Ls.remove('email')
    Ls.remove('vuex')
    Ls.remove('role')
    Ls.set('auth.name')
    Ls.set('auth.role')
    localStorage.clear()
  }

}
