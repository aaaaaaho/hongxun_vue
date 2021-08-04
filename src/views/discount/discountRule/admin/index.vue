<template>
  <div class="dashboard-editor-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="抵扣名称">
        <el-input v-model="formInline.name" placeholder="抵扣名称"></el-input>
      </el-form-item>
      <el-form-item label="抵扣类型">
        <el-input v-model="formInline.type" placeholder="抵扣类型"></el-input>
      </el-form-item>
      <el-form-item label="失效时间">
        <el-input v-model="formInline.date" placeholder="失效时间"></el-input>
      </el-form-item>
      <el-form-item label="抵扣次数">
        <el-input v-model="formInline.times" placeholder="抵扣次数"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">添加规则</el-button>
      </el-form-item>
    <el-table
      :data="tableData">
      <el-table-column  align="center"
        prop="type"
        label="抵扣类型">
      </el-table-column>
      <el-table-column  align="center"
        prop="name"
        label="抵扣名称">
      </el-table-column>
      <el-table-column  align="center"
        prop="amount"
        label="抵扣面值">
      </el-table-column>
      <el-table-column  align="center"
        prop="times"
        label="抵扣次数">
      </el-table-column>
      <el-table-column  align="center"
        prop="date"
        label="失效时间">
      </el-table-column>
      <el-table-column align="center"
        prop="condition"
        label="使用条件">
      </el-table-column>
      <el-table-column label="操作" align="center" >
        <el-button icon="info">编辑</el-button>
        <el-button type="danger" @click="">删除</el-button>
      </el-table-column>
    </el-table>
    </el-form>
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



export default {
  name: 'inCome',
  components: {
  },
  data() {
    return {
      tableData: [
        {
          name:'全免抵用券',
          type:'全免抵扣',
          amount:'全免',
          times:'有效期内重复使用',
          date:'7天内',
          condition:'无限制',
        },
        {
          name:'24小时券',
          type:'固定时长',
          amount:'全免',
          times:'有效期内重复使用',
          date:'1天内',
          condition:'无限制',
        },
      ],

      formInline: {
        name: '',
        plate: '',
        tel: '',
        date_start:'',
        date_fin:'',
        type:'',
        date:'',
        times:''
      },
    }
  },
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
