<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="车场名称">
        <el-input v-model="formInline.user" placeholder="车场名称"></el-input>
      </el-form-item>
      <el-form-item label="车场地址">
        <el-input v-model="formInline.address" placeholder="车场地址"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="clear_formInline">清空</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search_handle(formInline)">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="output_Excel">导出Excel(全部)</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="output_Excel_2">导出列表Excel(当前)</el-button>
      </el-form-item>
    </el-form>
<!--    这一部分是为了导出excel-->
    <el-table :data="list"
              id="parkingInfo_list"
              width="0"
              height="0"
    >
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
    </el-table >
    <el-table :data="list_2.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    id="parkingInfo_list_2">
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
import { search_test } from '@/api/test_811'



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
      list_2 : '',
      formInline: {
        user: '',
        address: ''
      },
      currentPage: 1,
      pageSize: 10,
    }
  },
  methods: {
    getHandle() {
      parkingInfo_list().then(res => {
        this.list = res.data.list
        this.list_2 = res.data.list
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
         "列表(全部).xlsx"
       )
      }catch (e){
        if (typeof console !== "undefined") console.log(e,wbout);
      }
      return wbout
    },

    output_Excel_2(){
      var wb = XLSX.utils.table_to_book(document.querySelector("#parkingInfo_list_2"))
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
          "列表(当前).xlsx"
        )
      }catch (e){
        if (typeof console !== "undefined") console.log(e,wbout);
      }
      return wbout
    },

    search_handle(data){
      search_test(data).then(res => {
        this.list_2 = res.data.list
      }).catch(()=>{
        console.log(+"-------------------")
        console.log("接口调用错误")
      })
    },

    clear_formInline(){
      this.formInline = {user : '' , address: ''}
    }
  },




  created() {
    this.getHandle()
  },
}
</script>
