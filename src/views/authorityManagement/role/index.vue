<template>
  <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="角色名称">
        <el-input v-model="formInline.name" placeholder="角色名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column align="center"
                       prop="name"
                       label="角色名称">
      </el-table-column>
      <el-table-column align="center"
                       prop="describe"
                       label="角色描述">
      </el-table-column>
      <el-table-column align="center"
                       prop="status"
                       label="状态">
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
        name: '企业管理员',
        status:'启用',
        describe:'系统管理员'
      },{
        name: '企业管理员',
        status:'未启用',
        describe:'系统管理员'
      }
      ],
      formInline: {
        name: '',
        plate: '',
        tel: '',
        date_start:'',
        date_fin:''
      },
    }
  }
}
</script>
