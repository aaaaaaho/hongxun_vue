<template>
  <div class="app-container">

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input v-model="formInline.plate" placeholder="车牌号"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formInline.tel" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">查询</el-button>
      </el-form-item>
    </el-form>

    <div class="block" v-for="fit in fits" :key="fit">
      <el-image
        :src="url"
        :fit="fit"></el-image>
      <br/>
      <span class="demonstration">{{ fit }}</span>
    </div>


  </div>
</template>

<script>
import { getList } from '@/api/table'

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
      fits:['contain'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      formInline: {
        name: '',
        plate: '',
        tel:''
      }


    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    // fetchData() {
    //   this.listLoading = true
    //   getList().then(response => {
    //     this.list = response.data.items
    //     this.listLoading = false
    //   })
    // }
  }
}
</script>
