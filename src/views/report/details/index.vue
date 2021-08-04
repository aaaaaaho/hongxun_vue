<template>
  <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
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
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column align="center"
      prop="payMethod"
      label="支付方式">
    </el-table-column>
    <el-table-column align="center"
      prop="amount"
      label="支付金额">
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
      ]
    }
  }
}
</script>
