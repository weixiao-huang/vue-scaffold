<style lang="stylus" scoped>
.select-area
  .selected
    background #00b2f1
    color white
  .select__title
    display inline-block
    vertical-align top
    padding 10px
    width 10%
    color #a0a0a0
  .select__wrap
    text-align left
    display inline-block
    width 90%
    box-sizing border-box
    padding-right 2%
    .select__wrap__box
      border-bottom 1px dotted #e6e6e6
      .select__wrap__box__item
        cursor pointer
        display inline-block
        padding 3px 15px
        margin 10px 0
</style>


<template lang="pug">
.select-area
  .select__title {{ title }}
  .select__wrap
    .select__wrap__box
      .select__wrap__box__item(
        v-for="(item, index) in items",
        :class="{ 'selected': index === selected }",
        @click="selectedChange(index)"
      ) {{ item.name }}
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectedChange (index) {
      this.selected = index
      this.$emit('selectedChange', index)
    }
  },
  data () {
    return {
      selected: 0
    }
  }
}
</script>
