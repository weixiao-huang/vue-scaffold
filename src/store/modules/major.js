import Vue from 'vue'
import * as types from '../types'

const initialState = {
  majorList: null
}

const mutations = {
  [types.SET_MAJOR_LIST]: (state, { majorList }) => {
    Vue.set(state, 'majorList', majorList)
  }
}

export default {
  initialState,
  mutations
}
