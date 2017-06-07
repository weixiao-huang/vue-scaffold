<template lang="pug">
#app
  el-menu(default-active="1", mode="horizontal", :router="true")
    el-menu-item(index="1", :route="{ path: '/' }") 主页
    el-menu-item(index="2", :route="{ path: '/colleges' }") 院校大全
    el-menu-item(index="3", :route="{ path: '/major' }") 专业大全
    el-menu-item(index="4", :route="{ path: '/ranking' }") 大学排名
  router-view.router-view
</template>


<script>
export default {
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
