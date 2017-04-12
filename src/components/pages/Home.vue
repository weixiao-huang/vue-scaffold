<template lang='pug'>
#home
  el-form.form(ref="form", :rules="rules", :model="form", label-width="160px")
    el-form-item(v-for="(item, index) in ruleForm", :label="item.title", :prop="item.type")
      template(v-if="item.type === 'number'")
        el-input(v-model.number="item.value")
      template(v-else)
        el-input(v-model="item.value")
    el-form-item
      el-button(@click="resetForm('form')") reset
      el-button(type="primary", @click="onSubmit('form')") confirm
</template>


<script>
export default {
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  data () {
    const items = ['symboling', 'normalized-losses', 'make', 'fuel-type', 'aspiration', 'num-of-doors', 'body-style', 'drive-wheels', 'engine-location', 'wheel-base', 'length', 'width', 'height', 'curb-weight', 'engine-type', 'num-of-cylinders', 'engine-size', 'fuel-system', 'bore', 'stroke', 'compression-ratio', 'horsepower', 'peak-rpm', 'city-mpg', 'highway-mpg', 'price']
    const placeholder = ['2', '164', 'audi', 'gas', 'std', 'four', 'sedan', 'fwd', 'front', '99.8', '176.6', '66.2', '54.3', '2337', 'ohc', 'four', '109', 'mpfi', '3.19', '3.4', '10', '102', '5500', '24', '30', '13950']

    const types = placeholder.map(item => isNaN(parseFloat(item)) ? 'string' : 'number')
    let form = []
    for (let i = 0; i < items.length; ++i) {
      form.push({
        title: items[i],
        placeholder: placeholder[i],
        type: types[i],
        value: ''
      })
    }

    return {
      ruleForm: form,
      rules: {
        number: [
          { type: 'number', required: true, message: '年龄必须为数字值', trigger: 'blur' }
        ],
        string: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>


<style lang='stylus'>
#home
  display flex
  justify-content center
  align-items center
  .form
    text-align left
</style>
