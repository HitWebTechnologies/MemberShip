import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticatedUser: {}
  },
  mutations: {
    setAuthenticatedUser (state, payload) {
      state.authenticatedUser = payload
    }
  },
  getters: {
    authenticatedUser (state) {
      return state.authenticatedUser
    }
  }
})