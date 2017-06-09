import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import college from './modules/college'
import major from './modules/major'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    college,
    major
  },
  strict: debug
})
