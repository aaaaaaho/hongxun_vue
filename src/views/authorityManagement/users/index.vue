<template>
  <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formInline.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="formInline.name" placeholder="真实姓名"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="formInline.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="formInline.tel" placeholder="手机号码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column align="center"
                       prop="id"
                       label="id">
      </el-table-column>
      <el-table-column align="center"
                       prop="username"
                       label="用户名">
      </el-table-column>
      <el-table-column align="center"
                       prop="name"
                       label="真实姓名">
      </el-table-column>
      <el-table-column align="center"
                       prop="tel"
                       label="手机号码">
      </el-table-column>
      <el-table-column align="center"
                       prop="email"
                       label="邮箱">
      </el-table-column>
      <el-table-column align="center"
                       prop="status"
                       label="状态">
      </el-table-column>
      <el-table-column align="center"
                       prop="role"
                       label="所属角色">
      </el-table-column>
    </el-table>
  </el-row>
</template>


<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      tableData: [{
        id:'1',
        username:'15671652335',
        name:'wk',
        tel:'15671652335',
        email:'15671652335@qq.com',
        status:'启用',
        role:'企业管理员'
      },{
        id:'2',
        username:'15671652334',
        name:'wkk',
        tel:'15671652334',
        email:'15671652334@qq.com',
        status:'未启用',
        role:'企业管理员'
      }
      ],


      formInline: {
        username:'',
        name:'',
        email:'',
        tel:''
      },
    }
  }
}
</script>
