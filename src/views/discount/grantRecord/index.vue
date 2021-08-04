<template>
  <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商户名称">
        <el-input v-model="formInline.name" placeholder="商户名称"></el-input>
      </el-form-item>

      <el-form-item label="发放时间">
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
                       prop="date"
                       label="发放日期">
      </el-table-column>
      <el-table-column align="center"
                       prop="name"
                       label="发放商户名称">
      </el-table-column>
      <el-table-column align="center"
                       prop="type"
                       label="发放抵扣类型">
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
        date: '2021-05-02',
        name: 'wk',
        status:'未使用',
        type:'全免抵扣'
      },{
        date: '2021-05-03',
        name: 'wk',
        status:'已使用',
        type:'全免抵扣'
      },
        {
          date: '2021-05-03',
          name: 'wk',
          status:'未使用',
          type:'固定时长抵扣'
        },
      ],


      formInline: {
        name: '',
        plate: '',
        tel: '',
        date_start:'',
        date_fin:''
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

        value:''

      }
    }
  }
}
</script>
