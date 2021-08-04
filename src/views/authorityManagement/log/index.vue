<template>
  <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="操作模块">
        <el-input v-model="formInline.module" placeholder="操作模块"></el-input>
      </el-form-item>
      <el-form-item label="操作人">
        <el-input v-model="formInline.name" placeholder="操作人"></el-input>
      </el-form-item>
      <el-form-item label="操作内容">
        <el-input v-model="formInline.content" placeholder="操作内容"></el-input>
      </el-form-item>

      <el-form-item label="开始时间">
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
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column align="center"
                       prop="module"
                       label="操作模块">
      </el-table-column>
      <el-table-column align="center"
                       prop="name"
                       label="操作人">
      </el-table-column>
      <el-table-column align="center"
                       prop="content"
                       label="操作内容">
      </el-table-column>
      <el-table-column align="center"
                       prop="date"
                       label="操作时间">
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
        module:'月租用户',
        name:'wk',
        content:'无',
        date:'2021-08-01 20:14:52'
      },{
        module:'长租用户',
        name:'wk',
        content:'无',
        date:'2021-08-02 20:42:52'
      }
      ],


      formInline: {
        module:'',
        name:'',
        content:'',
        date:'',
        date_start:'',
        date_fin:''
      },
    }
  }
}
</script>
