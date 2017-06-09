import api from '../api'
import * as types from './types'

const successfulRes = res => parseInt(res.status / 100) === 2

export const handleRes = res => func => {
  try {
    if (successfulRes(res)) return func()
    else throw new Error(`Status Code (${res.status}) Error !`)
  } catch (e) {
    console.log(e)
  }
}

export const SetCollegeList = ({ commit }, collegeList) => (
  commit(types.SET_COLLEGE_LIST, { collegeList })
)

export const SetMajorList = ({ commit }, majorList) => (
  commit(types.SET_MAJOR_LIST, { majorList })
)

export const SearchMajorByName = ({ commit }, name) => (
  api.searchMajorByName(name).then(res => (
    handleRes(res)(() => (
      commit(types.SET_MAJOR_LIST, { majorList: res.data })
    ))
  ))
)

export const SearchCollegeByName = ({ commit }, name) => (
  api.searchCollegeByName(name).then(res => (
    handleRes(res)(() => (
      commit(types.SET_COLLEGE_LIST, { collegeList: res.data })
    ))
  ))
)

export const RecommendMajorList = ({ commit }, { score, typeId, genderId, pcmc, xk }) => (
  api.recommend(score, typeId, genderId, pcmc, xk).then(res => (
    handleRes(res)(() => (
      commit(types.SET_MAJOR_LIST, { majorList: res.data })
    ))
  ))
)

