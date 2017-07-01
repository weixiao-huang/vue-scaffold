import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior: (to, from, savePosition) => {
    if (to.hash) return { selector: to.hash }
    else return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', component: Home }
  ]
})

export default router
