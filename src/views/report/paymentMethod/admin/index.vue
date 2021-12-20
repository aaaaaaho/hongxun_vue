<template>
  <div class="dashboard-editor-container">
<!--    <github-corner class="github-corner" />-->

<!--    <panel-group @handleSetLineChartData="handleSetLineChartData" />-->
    <el-table
      :data="tableData">
      <el-table-column
        prop="type"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="金额">
      </el-table-column>
    </el-table>
      <br/>
      <br/>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <el-col style="height: 350px">
        <div class="chart-wrapper">
          <pie-chart_2 :chart-data="pieChartData" align="bottom"/>
        </div>
      </el-col>
    </el-row>
    <br/>
    <br/>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <el-col style="height: 350px">
        <div class="chart-wrapper">
          <bar-chart :chart-data="barChartData" align="bottom"/>
        </div>
      </el-col>
    </el-row>
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
      testData: [1,2,14,11,11,0.5],
  }
}

const pieChartData =[
  { value: 1000, name: '现金收入' }
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
      pieChartData_2 : pieChartData_2,
      tableData: [{
        type: '现金',
        amount: '1000'
      }, {
          type: '合计',
          amount: '1000'
      }
      ]
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
