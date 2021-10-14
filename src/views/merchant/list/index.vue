<template>
  <div class="app-container">

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商户名称">
        <el-input v-model="formInline.m_name" placeholder="商户名称"></el-input>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="formInline.name" placeholder="联系人"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formInline.tel" placeholder="手机号"></el-input>
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
      <el-table-column label="商户名称" align="center">
        <template slot-scope="scope">
          {{ scope.row.m_name }}
        </template>
      </el-table-column>
      <el-table-column label="手机号" width="110"   align="center">
        <template slot-scope="scope">
          {{ scope.row.tel }}
        </template>
      </el-table-column>
      <el-table-column label="联系人"  align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
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
import { merchant_list } from '@/api/merchant'

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
          m_name:'WUT',
          tel:'15671652336',
          name:'wk',
          parkingName:'青岛路机械车库'
        },
        {
          id:2,
          m_name:'WUT',
          tel:'15671652336',
          name:'wk_2',
          parkingName:'青岛路机械车库'
        }
      ],

      formInline: {
        m_name: '',
        name:'',
        plate: '',
        tel:''
      }


    }
  },
  created() {
    this.getHandle()
  },
  methods: {
    getHandle(){
      merchant_list().then(res => {
        this.list = res.data.list
      })
    }
  }
}
</script>
