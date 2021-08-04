<template>
  <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商户名称">
        <el-input v-model="formInline.name" placeholder="商户名称"></el-input>
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
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column align="center"
        prop="name"
        label="商户名称"
        width="180">
      </el-table-column>
      <el-table-column align="center"
        prop="payMethod"
        label="充值方式">
      </el-table-column>
      <el-table-column align="center"
        prop="amount"
        label="充值金额">
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
        payMethod: '现金支付',
        amount:'200'
      },{
        date: '2021-05-03',
        name: 'wk',
        payMethod: '支付宝',
        amount:'100'
      },
        {
          date: '2021-05-03',
          name: 'wk',
          payMethod: '微信',
          amount:'100'
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
