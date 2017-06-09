import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/pages/Home'
import CollegeListView from '@/pages/CollegeListView'
import CollegeRanking from '@/pages/CollegeRanking'
import MajorListView from '@/pages/MajorListView'
import AdmissionPredict from '@/pages/AdmissionPredict'
import Recommend from '@/pages/Recommend'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior: (to, from, savePosition) => ({ x: 0, y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/colleges', component: CollegeListView },
    { path: '/ranking', component: CollegeRanking },
    { path: '/major', component: MajorListView },
    { path: '/predict', component: AdmissionPredict },
    { path: '/recommend', component: Recommend }
  ]
})

export default router
