<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="8" class="display-number">
        <count-to :startVal='0' :endVal='666' :duration='3000'/>
      </el-col>
      <el-col :span="8" class="display-number">
        <count-to :startVal='0' :endVal='666' :duration='3000'/>
      </el-col>
      <el-col :span="8" class="display-number">
        <count-to :startVal='0' :endVal='888.33' :decimals="2" :duration='3000'/>
      </el-col>

      <el-col :span="24">
        <p class="title">线性图</p>
        <ve-line :data="chartData"/>
      </el-col>
       <el-col :span="12">
         <p class="title">柱状图</p>
        <ve-histogram :data="chartData"></ve-histogram>
      </el-col>
       <el-col :span="12">
         <p class="title">饼状图</p>
        <ve-pie :data="chartData"></ve-pie>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'
import VePie from 'v-charts/lib/pie.common'
import countTo from 'vue-count-to'
export default {
  name: 'dashboard',
  components: {
    VeLine,
    VeHistogram,
    VePie,
    countTo
  },
  data () {
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  padding: 15px;
  background: #fff;
  .title {
    font-size: 16px;
    text-align: center;
    line-height: 36px;
  }
  .display-number {
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    color: $color-primary;
  }
}
</style>
