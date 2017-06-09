<style lang="stylus" scoped>
.major-item
  text-align left
  .college--left-box
    width 70%
    display inline-block
    vertical-align middle
    .college__name
      font-size 20px
    .college__name, .college__area, .college__tag
      display inline-block
      padding 10px
  .college--ranking, .college--score
    width 15%
    display inline-block
    vertical-align middle
</style>


<template lang="pug">
.major-item
  .college--left-box
    .college--left-box__top-box
      .college__name {{ name }}
      .college__area {{ area }}
    .college--left-box__down-box
      .college__tag(v-for="item of tags") {{ item }}
  .college--ranking 学制: {{ year }}
  .college--score 分数线: {{ score }}
</template>


<script>
export default {
  props: {
    year: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    score: {
      type: String,
      required: true
    }
  }
}
</script>
