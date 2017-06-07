import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/pages/Home'
import CollegeListView from '@/pages/CollegeListView'
import CollegeRanking from '@/pages/CollegeRanking'
import MajorListView from '@/pages/MajorListView'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior: (to, from, savePosition) => ({ x: 0, y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/colleges', component: CollegeListView },
    { path: '/ranking', component: CollegeRanking },
    { path: '/major', component: MajorListView }
  ]
})

export default router
