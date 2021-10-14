<template>
    <div class="home">
      <button @click="getHandle">发送GET请求</button>
      <button @click="getHandle_2">发送GET_2请求</button>
      <button @click="postHandle">发送POST请求</button>
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
        <el-table-column label="车牌号"  align="center">
          <template slot-scope="scope">
            {{ scope.row.plate }}
          </template>
        </el-table-column>
        <el-table-column label="时间" width="200" align="center">
          <template slot-scope="scope">
            {{ scope.row.time }}
          </template>
        </el-table-column>
        <el-table-column label="通道"  align="center">
          <template slot-scope="scope">
            {{ scope.row.passage }}
          </template>
        </el-table-column>
        <el-table-column label="备注"  align="center">
          <template slot-scope="scope">
            {{ scope.row.remarks }}
          </template>
        </el-table-column>
      </el-table>
    </div>

</template>

<script>
import { test_811 } from '@/api/test_811'
import { test_811_2 } from '@/api/test_811'
export default {
  name: 'index',
  data(){
    return{
      list: [
        {
          id: 1,
          plate: '闽A77518',
          passage:'入口',
          time: '2021-6-6-18:51:22',
          remarks:'军警车',
        },
        {
          id: 2,
          plate: '苏D88888',
          passage:'出口',
          time: '2021-6-6-18:51:22',
          remarks:'军警车',
        }
      ],
      list_2:{

      },
    }
  },
  methods:{
    getHandle(){
      test_811().then(res=>{
        this.list=res.data.list
      })
    },
    getHandle_2(){
      test_811_2().then(res=>{
        this.list=res.data.list
      })
    },
    postHandle(){
      // test_811(this.list).then((response)=>{
      //   this.list_2 = response.data
      //   console.log(this.list_2)
      // })
    }
  }
}
</script>

<style scoped>

</style>
