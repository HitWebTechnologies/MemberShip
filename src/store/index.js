import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticatedUser: {}
  },
  mutations: {
    setAuthenticatedUser (state, payload) {
      localStorage.setItem('authenticatedUser', JSON.stringify(payload))
      state.authenticatedUser = payload
    },

    logout (state, payload) {
      state.authenticatedUser = {}
      localStorage.removeItem('authenticatedUser')
    }
  },
  getters: {
    authenticatedUser (state) {
      return state.authenticatedUser._id ? state.authenticatedUser : JSON.parse(localStorage.getItem('authenticatedUser'))
    },
    isUserAuthenticated (state, getters) {
      return !!getters.authenticatedUser
    }
  }
})