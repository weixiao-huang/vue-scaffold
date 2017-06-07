<style lang="stylus" scoped>
#major-list
  .major-tab
    text-align left
    .major-tab__item
      display inline-block
      margin 0 1.5%
  .major--box
    margin 3% 0
    text-align left
    .major__title
      font-size 30px
      padding 1% 0
    .major__categories--box
      .major__category--box
        width 100%
        .major__category__title
          display inline-block
          width 20%
        .major__category__items--box
          padding 1% 0
          display inline-block
          width 80%
          .major__category__item
            display inline-block
            padding 0 1%
</style>


<template lang="pug">
#major-list
  el-tabs(v-model="selectedTab", type="border-card")
    el-tab-pane.major-tab(label="本科专业", name="undergraduate")
      .major-tab__item(v-for="item of data") {{ item.title }}
  .major--box(v-for="major of data")
    .major__title {{ major.title }}
    .major__categories--box
      .major__category--box(v-for="category of major.categories")
        .major__category__title {{ category.title }}
        .major__category__items--box
          .major__category__item(v-for="item in category.items") {{ item.title }}
</template>


<script>
import { mockData } from '@/mocks/majorList'

export default {
  data () {
    return {
      data: mockData,
      selectedTab: 'undergraduate'
    }
  }
}
</script>
