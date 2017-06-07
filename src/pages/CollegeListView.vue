<style lang="stylus" scoped>
#college-list
  .el-breadcrumb
    margin 1% 0
  .search
    margin-bottom 3%
  .select-wrap
    background #fafafa
    border 1px solid #e6e6e6
</style>


<template lang="pug">
#college-list
  el-breadcrumb(separator=">")
    el-breadcrumb-item(:to="{ path: '/' }") 首页
    el-breadcrumb-item 院校大全
  el-input.search(placeholder="搜索你感兴趣的学校", v-model="college")
    el-button(slot="append") 搜索
  .select-wrap
    select-area(
      v-for="(select, index) in selects",
      :title="select.title",
      :items="select.items",
      :key="index",
      @selectedChange="selectedChange(index, $event)"
    )
</template>


<script>
import SelectArea from '@/components/SelectArea'
import { mockData } from '@/mocks/collegeList'

export default {
  components: {
    SelectArea
  },
  data () {
    return {
      college: '',
      selects: mockData
    }
  },
  methods: {
    selectedChange (selectIndex, index) {
      console.log(`(${selectIndex}, ${index})`)
    }
  }
}
</script>
