<style lang="stylus" scoped>

</style>


<template lang="pug">
#admission-predict
  el-form(:model="form", ref="form")
    el-form-item(label="考生分数", prop="score")
      el-input(v-model.number="form.score")
    el-form-item(label="院校代号", prop="yxdh")
      el-input(v-model.number="form.yxdh")
    el-form-item(label="专业代号", prop="zydh")
      el-input(v-model.number="form.zydh")
    el-form-item
      el-button(v-loading.fullscreen.lock="loading", type="primary", @click="admissionPredict(form)") 录取概率预测
  el-dialog(
    title="录取概率预测结果",
    v-model="dialogVisible",
  )
    span 预测结果: {{ predict }}%
</template>


<script>
import { handleRes } from '@/store/actions'
import api from '@/api'
export default {
  data () {
    return {
      form: {
        score: '',
        yxdh: '',
        zydh: ''
      },
      predict: '',
      dialogVisible: false,
      loading: false
    }
  },
  methods: {
    async admissionPredict (form) {
      this.loading = true
      await api.admissionPredict(this.form.score, this.form.yxdh, this.form.zydh).then(res => handleRes(res)(() => {
        console.log(res)
        this.predict = res.data.predict
      }))
      this.loading = false
      this.dialogVisible = true
    }
  }
}
</script>
