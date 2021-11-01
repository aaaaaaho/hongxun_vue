<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="车场名称">
        <el-input v-model="formInline.user" placeholder="车场名称"></el-input>
      </el-form-item>
      <el-form-item label="车场id">
        <el-input v-model="formInline.id" placeholder="车场id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="output_Excel">导出Excel</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    id="parkingInfo_list">
      <el-table-column align="center" label="车场编号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="车场名称" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="车场地址" align="center">
        <template slot-scope="scope">
          {{ scope.row.address }}
        </template>
      </el-table-column>
      <el-table-column label="车位数" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.num }}
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="list.length">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import { parkingInfo_list } from '@/api/parkingInfo'
import FileSaver from "file-saver"
import XLSX from "xlsx"



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
        name:'青岛路机器人停车库',
        address:'湖北省/武汉市/江岸区/湖北省武汉市江岸区青岛路7号',
        num:100
        },
        {
          id:2,
          name:'青岛路机器人停车库_2',
          address:'湖北省/武汉市/江岸区/湖北省武汉市江岸区青岛路7号_2',
          num:101
        },
        {
          id:2,
          name:'青岛路机器人停车库_2',
          address:'湖北省/武汉市/江岸区/湖北省武汉市江岸区青岛路7号_2',
          num:101
        },
        {
          id:2,
          name:'青岛路机器人停车库_2',
          address:'湖北省/武汉市/江岸区/湖北省武汉市江岸区青岛路7号_2',
          num:101
        },
        {
          id:2,
          name:'青岛路机器人停车库_2',
          address:'湖北省/武汉市/江岸区/湖北省武汉市江岸区青岛路7号_2',
          num:101
        },
        {
          id:2,
          name:'青岛路机器人停车库_2',
          address:'湖北省/武汉市/江岸区/湖北省武汉市江岸区青岛路7号_2',
          num:101
        },
        {
          id:2,
          name:'青岛路机器人停车库_2',
          address:'湖北省/武汉市/江岸区/湖北省武汉市江岸区青岛路7号_2',
          num:101
        },
        {
          id:2,
          name:'青岛路机器人停车库_2',
          address:'湖北省/武汉市/江岸区/湖北省武汉市江岸区青岛路7号_2',
          num:101
        },
        {
          id:2,
          name:'青岛路机器人停车库_2',
          address:'湖北省/武汉市/江岸区/湖北省武汉市江岸区青岛路7号_2',
          num:101
        },
        {
          id:2,
          name:'青岛路机器人停车库_2',
          address:'湖北省/武汉市/江岸区/湖北省武汉市江岸区青岛路7号_2',
          num:101
        },
        {
          id:2,
          name:'青岛路机器人停车库_2',
          address:'湖北省/武汉市/江岸区/湖北省武汉市江岸区青岛路7号_2',
          num:101
        },
      ],

      formInline: {
        user: '',
        id: ''
      },
      currentPage: 1,
      pageSize: 10,
    }
  },
  methods: {
    getHandle() {
      parkingInfo_list().then(res => {
        this.list = res.data.list
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    output_Excel(){
      var wb = XLSX.utils.table_to_book(document.querySelector("#parkingInfo_list"))
      var wbout = XLSX.write(wb,
        {
          bookType: "xlsx",
          bookSST: true,
          type: "array"
        }
        );
      try{
       FileSaver.saveAs(
         new Blob([wbout],{type:"application/octet-stream"}),
         "sheet.xlsx"
       )
      }catch (e){
        if (typeof console !== "undefined") console.log(e,wbout);
      }
      return wbout
    },
  },




  created() {
    this.getHandle()
  },
}
</script>
