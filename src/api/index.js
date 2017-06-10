import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  admissionPredict: (score, yxdh, zydh) => Vue.axios.get(
    '/api/predict', { params: { score, yxdh, zydh } }
  ),
  searchMajorByName: zymc => Vue.axios.get(
    '/api/searchzy', { params: { zymc } }
  ),
  searchCollegeByName: yxmc => Vue.axios.get(
    '/api/searchyx', { params: { yxmc } }
  ),
  recommend: (cj, kslbdm, xbdm, pcmc, xk) => {
    console.log('0000', cj, kslbdm, xbdm, pcmc, xk)
    return Vue.axios.get(
    '/api/recommend', { params: { cj, kslbdm, xbdm, pcmc, xk } })
  },
  fetchRankingList: () => Vue.axios.get(
    'api/rank'
  )
}
