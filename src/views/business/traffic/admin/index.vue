<template>
  <div class="dashboard-editor-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="时间">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="formInline.date_start"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="">查询</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="32">
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <bar-chart id="barchart" :auto-resize="true" />
    </el-row>
    </el-row>
  </div>
</template>

<script>


import { business_traffic } from '@/api/business'
import BarChart from '@/views/business/traffic/admin/components/BarChart'

export default {
  name: 'inCome',
  components: {
    BarChart
  },
  data() {
    return {
      barChartData: {
        testData: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        testData_2: [10,20,30,0,0,0,0,0,0,0,0,0,0]
      },

      formInline: {
        name: '',
        plate: '',
        tel: '',
        date_start:'',
        date_fin:''
      },

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }],

        value:''

      },
      list:[],
      isRouterAlive: true
    }
  },
  created(){
    // this.getListData()
  },
  methods: {
    // getListData(){
    //   business_traffic().then(res => {
    //     this.list = res.data.list
    //     // console.log(this.list[0].time)
    //     // const test1 = this.list[0].time
    //     // const test2 = test1.split("-")
    //     // console.log(test2[0])
    //     // console.log(test2[1])
    //     // console.log(test2[2])
    //     // console.log(test2[3])
    //     // console.log(Number(this.list[0].time.split("-")[2]))
    //     for(let i= 0; i<this.list.length; i++){
    //       let x1 = Number(this.list[i].time.split("-")[2]) - 1
    //       if(x1 !== 0){
    //         this.barChartData.testData[x1]= this.barChartData.testData[x1] + 1
    //       }
    //     }
    //     console.log(this.barChartData.testData[5])
    //   })
    // },

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
