<template>
  <div class="app-container">

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="车主姓名">
        <el-input v-model="formInline.name" placeholder="车主姓名"></el-input>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input v-model="formInline.plate" placeholder="车牌号"></el-input>
      </el-form-item>
      <el-form-item label="支付方式">
        <el-input v-model="formInline.paymentMethod" placeholder="支付方式"></el-input>
      </el-form-item>
      <el-form-item label="车辆分组">
        <el-input v-model="formInline.group" placeholder="车辆分组"></el-input>
      </el-form-item>
      <el-form-item label="缴费时间">
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

    <el-table :data="list">
      <!--      v-loading="listLoading"-->
      <!--      :data="list"-->
      <!--      element-loading-text="Loading"-->
      <!--      border-->
      <!--      fit-->
      <!--      highlight-current-row-->
      <el-table-column align="center" label="id" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="车牌号" align="center">
        <template slot-scope="scope">
          {{ scope.row.plate }}
        </template>
      </el-table-column>
      <el-table-column label="车主"   align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="缴费时间"  align="center">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
      <el-table-column label="支付方式" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.paymentMethod }}
        </template>
      </el-table-column>
      <el-table-column label="车辆分组" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.group }}
        </template>
      </el-table-column>
      <el-table-column label="实收金额"  align="center">
        <template slot-scope="scope">
          {{ scope.row.actualAmount }}
        </template>
      </el-table-column>
      <el-table-column label="月租费"  align="center">
        <template slot-scope="scope">
          {{ scope.row.monthlyAmount }}
        </template>
      </el-table-column>
      <!--      <el-table-column class-name="status-col" label="Status" width="110" align="center">-->
      <!--        <template slot-scope="scope">-->
      <!--          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <!--      <el-table-column align="center" prop="created_at" label="Display_time" width="200">-->
      <!--        <template slot-scope="scope">-->
      <!--          <i class="el-icon-time" />-->
      <!--          <span>{{ scope.row.display_time }}</span>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      // list: null,
      // listLoading: true
      list:[
        {
          id:1,
          name:'wk',
          tel:'15671652336',
          plate:'鄂AFD739',
          group:'月租车',
          time:'2022-07-15-18:51:27',
          paymentMethod:'现金',
          actualAmount:'100',
          monthlyAmount:'0'
        },
        {
          id:2,
          name:'wk_2',
          tel:'15671652337',
          plate:'鄂AFD739',
          group:'月租车',
          time:'2022-07-15-18:51:27',
          paymentMethod:'支付宝',
          actualAmount:'200',
          monthlyAmount:'0'
        }
      ],

      formInline: {
        name: '',
        plate: '',
        tel:'',
        paymentMethod:'',
        group:'',
        date_start:''
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
      }


    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    // fetchData() {
    //   this.listLoading = true
    //   getList().then(response => {
    //     this.list = response.data.items
    //     this.listLoading = false
    //   })
    // }
  }
}
</script>
