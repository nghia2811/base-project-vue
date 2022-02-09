import api from './siteConfig.js'

export default {
  getData () {
    return api.get('/data')
  },
  saveData (payload) {
    return api.post('/link', payload)
  }
}
