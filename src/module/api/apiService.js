import api from './siteConfig.js'

export default {
  getData () {
    return api.get('/data')
  },
  saveData (data) {
    return api.post('link', data)
  }
}
