<template>
  <div class="app-container">

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="车主">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input v-model="formInline.plate" placeholder="车牌号"></el-input>
      </el-form-item>
      <el-form-item label="授权分组">
        <el-input v-model="formInline.group" placeholder="授权分组"></el-input>
      </el-form-item>
      <el-form-item label="放行原因">
        <el-input v-model="formInline.cause" placeholder="放行原因"></el-input>
      </el-form-item>
      <br/>
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
      <el-table-column label="放行原因"  align="center">
        <template slot-scope="scope">
          {{ scope.row.cause }}
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
import { parkingRecord_abnormalRecord, parkingRecord_parkDetail } from '@/api/parkRecord'
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
          plate:'test',
          time: '2h',
          time_in: '2021-6-5',
          time_out:'2021-6-7',
          cause: '',
          url: '',
        },
        {
          id: 1,
          plate:'test',
          time: '2h',
          time_in: '2021-6-5',
          time_out:'2021-6-7',
          cause: '',
          url: '',
        }
      ],

      formInline: {
        name: '',
        plate: '',
        tel: '',
        group:'',
        date_start:'',
        date_fin:'',
        cause:''
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
    getHandle() {
      parkingRecord_abnormalRecord().then(res => {
        this.list = res.data.list
      })
    }
  }
}
</script>
