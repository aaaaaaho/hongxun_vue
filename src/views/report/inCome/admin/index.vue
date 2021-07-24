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
          <pie-chart />
        </div>
      </el-col>
      <el-col style="width: 50%" >
        <div class="chart-wrapper">
          <pie-chart_2 />
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
  // newVisitis: {
  //   expectedData: [100, 120, 161, 134, 105, 160, 165],
  //   actualData: [120, 82, 91, 154, 162, 140, 145]
  // },
  // messages: {
  //   expectedData: [200, 192, 120, 144, 160, 130, 140],
  //   actualData: [180, 160, 151, 106, 145, 150, 130]
  // },
  // purchases: {
  //   expectedData: [80, 100, 121, 104, 105, 90, 100],
  //   actualData: [120, 90, 100, 138, 142, 130, 130]
  // },
  // shoppings: {
  //   expectedData: [130, 140, 141, 142, 145, 150, 160],
  //   actualData: [120, 82, 91, 154, 162, 140, 130]
  // }
  newVisitis: {
    testData: [1000, 5000, 1550, 3330, 3000, 50, 2500, 5000, 3600, 2788],
    testData_2: [2500, 1005, 2152, 5234, 1234, 2543, 1234, 1550, 1543, 1550]
  }
}

const barChartData = {
  newVisitis: {
      testData: [200,200,200,200,200,200,200],
      testData_2: [200,200,200,200,200,200,200]
  }
}

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
      barChartData: barChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData_2 = lineChartData[type]
      this.barChartData = barChartData[type]
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
