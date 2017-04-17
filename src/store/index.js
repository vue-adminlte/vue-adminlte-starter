import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'skin-green',
    layout: 'container'
  },
  mutations: {
    setTheme(state, v) {
      state.theme = v
    },
    changeLayout(state) {
      if (state.layout == 'container') {
        state.layout = 'container-fluid'
      }else {
        state.layout = 'container'
      }
    }
  }
})
