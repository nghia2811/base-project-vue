import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state () {
    return {
      username: 'ntnghia',
      loading: false
    }
  },
 
  modules: {
  },

  plugins: [vuexLocal.plugin],

  getters: {
    getUsername: state => {
      return state.username
    }
  },

  mutations: {
    changeUsername (state, newUsername) {
      state.username = newUsername
    }
  },

  actions: {
    handleChangeUsername (context, newUsername) {
      context.commit('changeUsername', newUsername)
    }
  }
})
