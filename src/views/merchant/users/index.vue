<template>
  <div class="app-container">

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formInline.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="formInline.realName" placeholder="真实姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formInline.tel" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item label="所属商户">
        <el-input v-model="formInline.merchant" placeholder="所属商户"></el-input>
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
      <el-table-column label="用户名" align="center">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="手机号" width="110"   align="center">
        <template slot-scope="scope">
          {{ scope.row.tel }}
        </template>
      </el-table-column>
      <el-table-column label="真实姓名"  align="center">
        <template slot-scope="scope">
          {{ scope.row.realName }}
        </template>
      </el-table-column>
      <el-table-column label="所属商户" width="100"  align="center">
        <template slot-scope="scope">
          {{ scope.row.merchant }}
        </template>
      </el-table-column>
      <el-table-column label="状态"  align="center">
        <template slot-scope="scope">
          {{ scope.row.status }}
        </template>
      </el-table-column>
      <el-table-column label="车场名称"  align="center">
        <template slot-scope="scope">
          {{ scope.row.parkingName }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <!--          {{ scope.row.num }}-->
        <el-button icon="el-icon-edit"></el-button>
        <el-button type="primary" @click="">详情</el-button>
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
          username: '鸿讯停车',
          tel: '13200000006',
          realName: '鸿讯停车',
          merchant: '鸿迅停车',
          status: '正常',
          parkingName: '青岛路机器人停车库',
        },
        {
          id:2,
          username: '鸿瑞集团',
          tel: '13200000005',
          realName: '鸿瑞集团',
          merchant: '鸿瑞集团',
          status: '正常',
          parkingName: '青岛路机器人停车库',
        }
      ],

      formInline: {
        username:'',
        realName:'',
        tel:'',
        merchant:''
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
