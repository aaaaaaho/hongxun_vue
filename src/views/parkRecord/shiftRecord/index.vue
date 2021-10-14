<template>
  <div class="app-container">

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="收费员">
        <el-input v-model="formInline.name" placeholder="收费员"></el-input>
      </el-form-item>
      <el-form-item label="上班时间">
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
      <el-form-item label="下班时间">
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
      <el-table-column label="收费员" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="上班时间"   align="center">
        <template slot-scope="scope">
          {{ scope.row.time_start }}
        </template>
      </el-table-column>
      <el-table-column label="下班时间"  align="center">
        <template slot-scope="scope">
          {{ scope.row.time_fin }}
        </template>
      </el-table-column>
      <el-table-column label="工作站" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.workPosition }}
        </template>
      </el-table-column>
      <el-table-column label="车场名称" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.parkingName }}
        </template>
      </el-table-column>
      <el-table-column label="应收金额"  align="center">
        <template slot-scope="scope">
          {{ scope.row.amount }}
        </template>
      </el-table-column>
      <el-table-column label="实收金额"  align="center">
        <template slot-scope="scope">
          {{ scope.row.actualAmount }}
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
import { parkingRecord_shiftRecord } from '@/api/parkRecord'

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
          workPosition:'收费岗亭',
          parkingName:'青岛路机器人停车库',
          time_start:'2022-07-15-18:51:27',
          time_fin:'2022-07-16-8:51:27',
          amount:281,//应收金额
          actualAmount:261,
        },
        {
          id:2,
          name:'wk',
          workPosition:'收费岗亭',
          parkingName:'青岛路机器人停车库',
          time_start:'2022-07-15-18:51:27',
          time_fin:'2022-07-16-8:51:27',
          amount:281,//应收金额
          actualAmount:261,
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
    this.getHandle()
  },
  methods: {
    getHandle(){
      parkingRecord_shiftRecord().then(res => {
        this.list = res.data.list
      })
    }
  }
}
</script>
