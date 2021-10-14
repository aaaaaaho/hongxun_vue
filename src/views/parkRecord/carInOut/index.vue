<template>
  <div class="app-container">

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="车牌号">
        <el-input v-model="formInline.plate" placeholder="车牌号"></el-input>
      </el-form-item>
      <el-form-item label="通行方向">
        <el-input v-model="formInline.direction" placeholder="通行方向"></el-input>
      </el-form-item>
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

    <el-table :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)">
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
      <el-table-column label="时间" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
      <el-table-column label="通道"  align="center">
        <template slot-scope="scope">
          {{ scope.row.passage }}
        </template>
      </el-table-column>
      <el-table-column label="备注"  align="center">
        <template slot-scope="scope">
          {{ scope.row.remarks }}
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
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="list.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>

import { parkingRecord_carInOut } from '@/api/parkRecord'

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
          plate: '闽A77518',
          passage:'入口',
          time: '2021-6-6-18:51:22',
          remarks:'军警车',
          url: require('../presence/statics/1.jpg')
        },
        {
          id: 2,
          plate: '苏D88888',
          passage:'出口',
          time: '2021-6-6-18:51:22',
          remarks:'军警车',
          url: require('../presence/statics/4.jpg')
        }
      ],

      formInline: {
        name: '',
        plate: '',
        tel: '',
        date_start:'',
        date_fin:'',
        direction:''
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
      currentPage: 1,
      pageSize: 10,
    }
  },
  created() {
    this.getHandle()
  },
  methods: {
      getHandle(){
        parkingRecord_carInOut().then(res => {
          this.list = res.data.list
        })
      },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
