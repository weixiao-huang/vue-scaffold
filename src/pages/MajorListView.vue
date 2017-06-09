<style lang="stylus" scoped>
#major-list
  .el-breadcrumb
    margin 1% 0
  .search
    margin-bottom 3%
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
  .search-tip
    text-align left
    border-bottom 1px solid #e8e8e8
    margin 10px 0
    padding 10px 0
    .search-tip__key, .search-tip__length
      color red
  .major-item
    margin 10px 0
    border-bottom 1px solid #e8e8e8
</style>


<template lang="pug">
#major-list
  el-breadcrumb(separator=">")
    el-breadcrumb-item(:to="{ path: '/' }") 首页
    el-breadcrumb-item 专业大全
  el-input.search(placeholder="搜索你感兴趣的专业", v-model="major")
    el-button(slot="append", @click="search") 搜索
  el-tabs(v-model="selectedTab", type="border-card")
    el-tab-pane.major-tab(label="本科专业", name="undergraduate")
      .major-tab__item(v-for="item of data") {{ item.title }}
  .major--box(v-if="!searching && !majorList" v-for="major of data")
    .major__title {{ major.title }}
    .major__categories--box
      .major__category--box(v-for="category of major.categories")
        .major__category__title {{ category.title }}
        .major__category__items--box
          .major__category__item(v-for="item in category.items") {{ item.title }}
  .search-tip(v-if="majorList").
    搜索 <span class="search-tip__key">{{ key }}</span> 共找到 <span class="search-tip__length">{{ majorList.length }}</span> 个专业
  .major-list(v-if="!searching && majorList")
    major-item(
      v-for="(major, index) of majorList",
      :name="major.zymc",
      :area="major.yxmc",
      :tags="[major.klmc]",
      :year="major.xzdm",
      :score="major.fsx",
      :key="index"
    )
  skeleton-screen(v-if="searching")
</template>


<script>
import { mapState } from 'vuex'
import SkeletonScreen from '@/components/SkeletonScreen'
import MajorItem from '@/components/MajorItem'
import { mockData } from '@/mocks/majorList'

export default {
  components: {
    SkeletonScreen,
    MajorItem
  },
  data () {
    return {
      major: '',
      key: '',
      data: mockData,
      selectedTab: 'undergraduate',
      searching: false
    }
  },
  computed: {
    ...mapState({
      majorList: state => state.major.majorList
    })
  },
  beforeDestroy () {
    this.$store.dispatch('SetMajorList', null)
  },
  methods: {
    async search () {
      if (this.major) {
        this.searching = true
        await this.$store.dispatch('SearchMajorByName', this.major)
        this.searching = false
        this.key = this.major
      } else this.$message.error('输入专业不能为空')
    }
  }
}
</script>
