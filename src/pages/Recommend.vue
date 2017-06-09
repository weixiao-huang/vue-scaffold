<style lang="stylus" scoped>
#recommend
  .el-form
    text-align left
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
#recommend
  el-form(:mode="form", ref="form", label-width="100px")
    el-form-item(label="考生成绩")
      el-input(v-model.number="form.score")
    el-form-item(label="考生类别代码")
      el-select(v-model.number="form.typeId")
        el-option(label="农村", :value="0")
        el-option(label="城市户籍", :value="1")
    el-form-item(label="考生性别")
      el-select(v-model.number="form.genderId")
        el-option(label="男", :value="0")
        el-option(label="女", :value="1")
    el-form-item(label="批次名称")
      el-select(v-model="form.pcmc")
        el-option(v-for="(item, index) of pcmcs", :label="item", :value="item", :key="index")
    el-form-item(label="选科")
      el-select(v-model="form.xk", multiple)
        el-option(v-for="(item, index) of xks", :label="item", :value="index", :key="index")
    el-form-item
      el-button(type="primary", @click="recommend") 智能推荐
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
import MajorItem from '@/components/MajorItem'
import SkeletonScreen from '@/components/SkeletonScreen'

const pcmc = [
  '普通类',
  '普通类提前批',
  '艺术类提前批',
  '艺术类第一批',
  '体育类提前批',
  '体育类',
  '单独考试提前批',
  '单独考试',
  '上海纽约大学',
  '浙师大直升班',
  '地方专项计划',
  '高校专项计划',
  '飞行员',
  '民族传统体育',
  '单独招生',
  '高水平运动队',
  '高水平艺术团',
  '自主招生',
  '七校三位一体综合',
  '艺术类第二批'
]

const xks = [
  '物理',
  '化学',
  '生物',
  '政治',
  '历史',
  '地理',
  '信息技术'
]

export default {
  components: {
    SkeletonScreen,
    MajorItem
  },
  data () {
    return {
      form: {
        score: '',
        typeId: '',
        genderId: '',
        pcmc: '',
        xk: []
      },
      searching: false,
      pcmcs: pcmc,
      xks: xks
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
    async recommend () {
      this.searching = true
      let xk = [0, 0, 0, 0, 0, 0, 0]
      for (let item of this.form.xk) xk[item] = 1
      xk = xk.join('')
      await this.$store.dispatch('RecommendMajorList', {
        ...this.form,
        xk
      })
      this.searching = false
    }
  }
}
</script>
