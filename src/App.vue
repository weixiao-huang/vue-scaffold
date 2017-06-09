<template lang="pug">
#app
  el-menu.navbar(:default-active="defaultActive", mode="horizontal", :router="true")
    el-menu-item(index="1", :route="{ path: '/' }") 主页
    el-menu-item(index="2", :route="{ path: '/colleges' }") 院校大全
    el-menu-item(index="3", :route="{ path: '/major' }") 专业大全
    el-menu-item(index="4", :route="{ path: '/ranking' }") 大学排名
    el-menu-item(index="5", :route="{ path: '/predict' }") 录取概率预测
    el-menu-item(index="6", :route="{ path: '/recommend' }") 智能推荐
  router-view.router-view
</template>


<script>
export default {
  computed: {
    defaultActive () {
      switch (this.$route.path) {
        case '/': return '1'
        case '/colleges': return '2'
        case '/major': return '3'
        case '/ranking': return '4'
        case '/predict': return '5'
        case '/recommend': return '6'
        default: return '1'
      }
    }
  }
}
</script>


<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  .router-view
    margin 4% 10%
</style>
