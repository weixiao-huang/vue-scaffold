import Vue from 'vue'
import * as types from '../types'

const initialState = {
  collegeList: null,
  collegeRankingList: null
}

const mutations = {
  [types.SET_COLLEGE_LIST]: (state, { collegeList }) => {
    Vue.set(state, 'collegeList', collegeList)
  },
  [types.SET_COLLEGE_RANKING_LIST]: (state, { collegeRankingList }) => {
    Vue.set(state, 'collegeRankingList', collegeRankingList)
  }
}

export default {
  initialState,
  mutations
}
