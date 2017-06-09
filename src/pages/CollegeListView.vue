<style lang="stylus" scoped>
#college-list
  .el-breadcrumb
    margin 1% 0
  .search
    margin-bottom 3%
  .select-wrap
    background #fafafa
    border 1px solid #e6e6e6
  .search-tip
    text-align left
    border-bottom 1px solid #e8e8e8
    margin 10px 0
    padding 10px 0
    .search-tip__key, .search-tip__length
      color red
  .college-item
    margin 10px 0
    border-bottom 1px solid #e8e8e8
</style>


<template lang="pug">
#college-list
  el-breadcrumb(separator=">")
    el-breadcrumb-item(:to="{ path: '/' }") 首页
    el-breadcrumb-item 院校大全
  el-input.search(placeholder="搜索你感兴趣的学校", v-model="college")
    el-button(slot="append", @click="search") 搜索
  .select-wrap
    select-area(
      v-for="(select, index) in selects",
      :title="select.title",
      :items="select.items",
      :key="index",
      @selectedChange="selectedChange(index, $event)"
    )
  .search-tip(v-if="collegeList").
    搜索 <span class="search-tip__key">{{ key }}</span> 共找到 <span class="search-tip__length">{{ collegeList.length }}</span> 所学校
  .college-list(v-if="collegeList && !searching")
    college-item(
      v-for="(college, index) of collegeList",
      :name="college.yxmc",
      :area="college.yxdh",
      :tags="[college.jhsx, college.pf]",
      :ranking="college.pm",
      :score="college.FSX",
      :key="index"
    )
  skeleton-screen(v-if="searching")
</template>


<script>
import { mapState } from 'vuex'
import SelectArea from '@/components/SelectArea'
import CollegeItem from '@/components/CollegeItem'
import SkeletonScreen from '@/components/SkeletonScreen'
import { mockData } from '@/mocks/collegeList'

export default {
  components: {
    SelectArea,
    CollegeItem,
    SkeletonScreen
  },
  data () {
    return {
      college: '',
      selects: mockData,
      searching: false,
      key: ''
      // collegeList: collegeList
    }
  },
  beforeDestroy () {
    this.$store.dispatch('SetCollegeList', null)
  },
  computed: {
    ...mapState({
      collegeList: state => state.college.collegeList
    })
  },
  methods: {
    selectedChange (selectIndex, index) {
      console.log(`(${selectIndex}, ${index})`)
    },
    async search () {
      if (this.college) {
        this.searching = true
        console.log(this.college)
        await this.$store.dispatch('SearchCollegeByName', this.college)
        this.searching = false
        this.key = this.college
      } else this.$message.error('输入院校不能为空')
    }
  }
}
</script>
