<template>
  <div class="app-container">

    <el-form :inline="true" :model="carRecordQuery" class="demo-form-inline">
<!--      <el-form-item label="车主">-->
<!--        <el-input v-model="carRecordQuery.name" placeholder="姓名"></el-input>-->
<!--      </el-form-item>-->
      <el-form-item label="车牌号">
        <el-input v-model="carRecordQuery.plateNum" placeholder="车牌号"></el-input>
      </el-form-item>

      <el-form-item label="入场时间">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="carRecordQuery.updateTime"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getList()">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="clearCarRecordQuery">清空</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="list">
      <el-table-column align="center" label="id" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="车牌号"  align="center">
        <template slot-scope="scope">
          {{ scope.row.plateNum }}
        </template>
      </el-table-column>
      <el-table-column label="入场时间"  align="center">
        <template slot-scope="scope">
          {{ scope.row.updateTime }}
        </template>
      </el-table-column>
      <el-table-column label="时长"  align="center">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
<!--      <el-table-column label="车主"  align="center">-->
<!--        <template slot-scope="scope">-->
<!--          {{ scope.row.name }}-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column  label="图片" align="center">
        <template slot-scope="scope">
          <el-image style="width: 30px; height: 30px" :src="scope.row.picture" :preview-src-list="[scope.row.picture]">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        :current-page="page"
        :page-size="limit"
        :total="total"
        style="padding: 30px 0; text-align: center;"
        layout="total, prev, pager, next, jumper"
        @current-change="getList"
      />
    </div>


  </div>
</template>

<script>
import { parkingRecordCondition } from '@/api/parkRecord'

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
          date: '2021-6-5',
          url : ''
        },
        {
          id: 2,
          name: 'wk_2',
          plate: '苏D88888',
          group: '无',
          time: '15min',
          date: '2021-6-6',
          url: ''
        }
      ],

      carRecordQuery: {
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

        value:'',
      },

      page: 1,
      limit:5,
      total: 0,
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList(page = 1) {
      this.page = page
      parkingRecordCondition(this.page,this.limit, this.carRecordQuery).then(res=> {
        this.list = res.data.records
        this.total = res.data.total
      })
    },
    clearCarRecordQuery(){
      this.carRecordQuery = {}
    }
  }
}
</script>
