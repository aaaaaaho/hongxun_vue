<template>
  <div class="app-container">

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="车主">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input v-model="formInline.plate" placeholder="车牌号"></el-input>
      </el-form-item>
      <el-form-item label="入场时间">
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
      <el-form-item label="结束时间">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="formInline.date_fin"
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

    <el-table :data="parkingDetail">
      <el-table-column label="停车次数"  align="center">
        <template slot-scope="scope">
          {{ scope.row.parkingTimes }}
        </template>
      </el-table-column>
      <el-table-column label="应收金额" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.amount }}
        </template>
      </el-table-column>
      <el-table-column label="优惠金额"  align="center">
        <template slot-scope="scope">
          {{ scope.row.discountedAmount }}
        </template>
      </el-table-column>
      <el-table-column label="抵扣金额"  align="center">
        <template slot-scope="scope">
          {{ scope.row.deductionAmount }}
        </template>
      </el-table-column>
      <el-table-column label="异常金额"  align="center">
        <template slot-scope="scope">
          {{ scope.row.abnormalAmount }}
        </template>
      </el-table-column>
      <el-table-column label="实收金额"  align="center">
        <template slot-scope="scope">
          {{ scope.row.actualAmount }}
        </template>
      </el-table-column>
    </el-table>

    <br/>
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
      <el-table-column label="车牌号"  align="center">
        <template slot-scope="scope">
          {{ scope.row.plate }}
        </template>
      </el-table-column>
      <el-table-column label="入场时间"  align="center">
        <template slot-scope="scope">
          {{ scope.row.time_in }}
        </template>
      </el-table-column>
      <el-table-column label="结束时间"  align="center">
        <template slot-scope="scope">
          {{ scope.row.time_out }}
        </template>
      </el-table-column>
      <el-table-column label="时长"  align="center">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
      <el-table-column label="车主"  align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="应收"  align="center">
        <template slot-scope="scope">
          {{ scope.row.amount_should_get }}
        </template>
      </el-table-column>
      <el-table-column label="实收"  align="center">
        <template slot-scope="scope">
          {{ scope.row.amount_get }}
        </template>
      </el-table-column>
      <el-table-column  label="图片" align="center">
        <template slot-scope="scope">
          <el-image style="width: 30px; height: 30px" :src="scope.row.url" :preview-src-list="[scope.row.url]">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
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
import { parkingRecord_tempStop } from '@/api/parkRecord'
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
      list: [
        {
          id: 1,
          name: 'wk',
          plate: '闽A77518',
          group: '鸿迅停车',
          time: '2h',
          time_in: '2021-6-5',
          time_out:'2021-6-7',
          amount_should_get: 0 ,
          amount_get: 0 ,
          url: '',
        },
        {
          id: 2,
          name: 'wk',
          plate: '闽A77518',
          group: '鸿迅停车',
          time: '2h',
          time_in: '2021-6-5',
          time_out:'2021-6-7',
          amount_should_get: 0 ,
          amount_get: 0 ,
          url: '',
        }
      ],

      formInline: {
        name: '',
        plate: '',
        tel: '',
        date_start:'',
        date_fin:''
      },

      parkingDetail:[{
        parkingTimes:0,
        amount:0,//应收金额
        discountedAmount:0,
        deductionAmount:0,
        abnormalAmount:0,
        actualAmount:0,
      }],

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
    getHandle() {
      parkingRecord_tempStop().then(res => {
        this.list = res.data.list
        for(let i = 0; i<res.data.list.length ; i++){
          this.parkingDetail[0].amount = this.parkingDetail[0].amount + res.data.list[i].amount_should_get
          this.parkingDetail[0].actualAmount = this.parkingDetail[0].actualAmount + res.data.list[i].amount_get
        }
        this.parkingDetail[0].parkingTimes = this.list.length;
        this.parkingDetail[0].abnormalAmount = this.parkingDetail[0].amount - this.parkingDetail[0].actualAmount
      })
    }
  }
}
</script>
