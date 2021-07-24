<template>
  <div class="dashboard-editor-container">
<!--    <github-corner class="github-corner" />-->

<!--    <panel-group @handleSetLineChartData="handleSetLineChartData" />-->

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData_2" />
    </el-row>
    <el-row :gutter="32">
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <bar-chart :chart-data="barChartData" />
    </el-row>

<!--    <el-row :gutter="32">-->
<!--      <el-col>-->
<!--        <div class="chart-wrapper">-->
<!--          <bar-chart :chart-data="barChartData" />-->
<!--        </div>-->
<!--      </el-col>-->
<!--      <el-col :xs="24" :sm="24" :lg="8">-->
<!--        <div class="chart-wrapper">-->
<!--          <raddar-chart />-->
<!--        </div>-->
<!--      </el-col>-->
      <el-col style="width: 50%;height: 400px" >
        <div class="chart-wrapper">
          <pie-chart :chart-data="pieChartData" />
        </div>
      </el-col>
      <el-col style="width: 50%" >
        <div class="chart-wrapper">
          <pie-chart_2 :chart-data="pieChartData_2" />
        </div>
      </el-col>
    </el-row>
<!--    <el-row :gutter="8">-->
<!--      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">-->
<!--        <transaction-table />-->
<!--      </el-col>-->
<!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
<!--        <to_do-list ‘_’是我自己加的 />-->
<!--      </el-col>-->
<!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
<!--        <box-card />-->
<!--      </el-col>-->
<!--    </el-row>-->
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
// import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import PieChart_2 from './components/PieChart_2'
import BarChart from './components/BarChart'
// import TransactionTable from './components/TransactionTable'
// import BoxCard from './components/BoxCard'

const lineChartData = {
  newVisitis: {
    testData: [1000, 5000, 1550, 3330, 3000, 5032, 2500, 5000, 3600, 2788],
    testData_2: [2500, 1005, 2152, 5234, 1234, 2543, 1234, 1550, 1543, 1550]
  }
}

const barChartData = {
  newVisitis: {
      testData: [312,345,657,867,978,931,312],
      testData_2: [123,345,200,200,123,235,123],
      testData_3: [200,123,432,645,200,123,645],
      testData_4: [453,200,534,200,765,423,745],
      testData_5: [200,123,123,321,543,765,624],
  }
}

const pieChartData=[
  { value: 3200, name: '商户充值' },
  { value: 2652, name: '临停缴费' },
  { value: 1494, name: '管理费' },
  { value: 1006, name: '储值卡' },
  { value: 3125, name: '租赁费'}
]

const pieChartData_2=[
  { value: 100, name: '现金' },
  { value: 262, name: '支付宝' },
  { value: 144, name: '微信' },
  { value: 106, name: '刷卡' }
]

export default {
  name: 'inCome',
  components: {
    PanelGroup,
    LineChart,
    // RaddarChart,
    PieChart,
    PieChart_2,
    BarChart
    // TransactionTable,
    // BoxCard
  },
  data() {
    return {
      lineChartData_2: lineChartData.newVisitis,
      barChartData: barChartData.newVisitis,
      pieChartData: pieChartData,
      pieChartData_2 : pieChartData_2
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData_2 = lineChartData[type]
      this.barChartData = barChartData[type]
      this.pieChartData = pieChartData[type]
      this.pieChartData_2 = pieChartData_2[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
