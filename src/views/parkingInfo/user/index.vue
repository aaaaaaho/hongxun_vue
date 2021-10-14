<template>
  <div class="app-container">

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input v-model="formInline.plate" placeholder="车牌号"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formInline.tel" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item label="授权分组">
        <el-select v-model="formInline.group" placeholder="授权分组">
          <el-option label="鸿迅集团" value="hongxun"></el-option>
          <el-option label="武汉理工大学" value="wut"></el-option>
        </el-select>
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
      <el-table-column label="姓名" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="手机号"   align="center">
        <template slot-scope="scope">
          {{ scope.row.tel }}
        </template>
      </el-table-column>
      <el-table-column label="车牌号"  align="center">
        <template slot-scope="scope">
          {{ scope.row.plate }}
        </template>
      </el-table-column>
      <el-table-column label="授权分组" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.group }}
        </template>
      </el-table-column>
      <el-table-column label="车位数" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.position_num }}
        </template>
      </el-table-column>
      <el-table-column label="有效期"  align="center">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <!--          {{ scope.row.num }}-->
        <el-button icon="el-icon-edit"></el-button>
        <el-button type="primary" @click="">充值</el-button>
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
import { parkingInfo_user } from '@/api/parkingInfo'

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
          group:'鸿迅停车',
          position_num: 2 ,
          time:'2022-07-15',
        },
        {
          id:2,
          name:'wk_2',
          tel:'15671652337',
          plate:'鄂AFD740',
          group:'WUT',
          position_num: 1 ,
          time:'2022-07-11',
        }
      ],

      formInline: {
        name: '',
        plate: '',
        tel:'',
        group:''
      }


    }
  },
  created() {
    this.getHandle()
  },
  methods: {
    getHandle() {
      parkingInfo_user().then(res => {
        this.list = res.data.list
      })
    }
  }
}
</script>
