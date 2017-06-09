import Vue from 'vue'
import * as types from '../types'

const initialState = {
  collegeList: null
}

const mutations = {
  [types.SET_COLLEGE_LIST]: (state, { collegeList }) => {
    Vue.set(state, 'collegeList', collegeList)
  }
}

export default {
  initialState,
  mutations
}
