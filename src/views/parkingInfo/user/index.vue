<template>
  <div class="app-container">

    <el-form :inline="true" :model="ruleForm" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="ruleForm.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input v-model="ruleForm.plate" placeholder="车牌号"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="ruleForm.tel" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm">清空</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">导出Excel</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">添加</el-button>
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
      <el-table-column label="有效期"  align="center">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" icon="el-icon-edit" @click = "" >修改</el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="">删除</el-button>
        </template>
      </el-table-column>
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

      ruleForm: {
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
    },

    resetForm() {
      this.ruleForm = {}
    },
  }
}
</script>
