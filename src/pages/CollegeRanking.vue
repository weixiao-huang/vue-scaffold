<style lang="stylus" scoped>

</style>


<template lang="pug">
#college-ranking
  el-table(style="width: 100%", border, :data="collegeRankingList")
    el-table-column(align="center", label="学校名称", prop="yxmc")
    el-table-column(align="center", label="排名", prop="pm")
    el-table-column(align="center", label="评分", prop="pf")
</template>


<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      collegeRankingList: state => state.college.collegeRankingList
    })
  },
  async created () {
    await this.$store.dispatch('FetchRankingList')
  },
  data () {
    return {
      data: [
        { rank: 1, name: '北京大学', region: '北京', regionRank: 1 },
        { rank: 2, name: '清华大学', region: '北京', regionRank: 2 },
        { rank: 3, name: '武汉大学', region: '湖北', regionRank: 1 },
        { rank: 4, name: '复旦大学', region: '上海', regionRank: 1 },
        { rank: 5, name: '浙江大学', region: '浙江', regionRank: 1 },
        { rank: 6, name: '上海交通大学', region: '上海', regionRank: 2 },
        { rank: 7, name: '南京大学', region: '江苏', regionRank: 1 },
        { rank: 8, name: '中国人民大学`', region: '北京', regionRank: 3 },
        { rank: 9, name: '吉林大学', region: '吉林', regionRank: 1 },
        { rank: 10, name: '华中科技大学', region: '湖北', regionRank: 2 },
        { rank: 11, name: '四川大学', region: '四川', regionRank: 1 },
        { rank: 12, name: '中山大学', region: '广东', regionRank: 1 },
        { rank: 13, name: '南开大学', region: '天津', regionRank: 1 },
        { rank: 14, name: '天津大学', region: '添加', regionRank: 2 },
        { rank: 15, name: '中国科学技术大学', region: '安徽', regionRank: 1 }
      ]
    }
  }
}
</script>
