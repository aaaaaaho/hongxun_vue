<template>
<el-row>
<el-col :span="40" v-for="item in this.list" style="padding: 10px" >
  <div v-if="item.plate === 'null' ">
  <el-card :body-style="{padding:'10px'}" style="width: 190px; height: 250px">
    <img :src= url_2 class="image">
    <div>空车位</div>
  </el-card>
  </div>
  <div v-else>
    <el-card :body-style="{padding:'10px'}" style="width: 190px; height: 250px">
      <img :src= url_1 class="image">
      <div>车牌: {{item.plate}}</div>
      <br/>
      <div>入场时间: {{item.time_in}}</div>
      <br/>
      <div>车主: {{ item.name }}</div>
      <br/>
      <div>时长: {{ item.time }}</div>
      <br/>
    </el-card>
  </div>
</el-col>
</el-row>
</template>

<style>
.image {
  width: 50px;
  height: 50px;
  display: block;
}
</style>

<script>
import { page_test } from '@/api/test_811'

export default {
  data() {
    return {
      currentDate: new Date(),
      url_1 : require('../com_Test/static/汽车.png'),
      url_2 : require('../com_Test/static/直方框.png'),
      list :[
        {
          plate: 'test1',
          time_in: 'test1',
          name: '1',
          time: '2',
        },
        {
          plate: 'null',
          time_in: 'test1',
          name: '1',
          time: '2',
        },
      ]
    };
  },
  created() {
    this.getHandle()
  },
  methods:{
    getHandle(){
      page_test().then(res => {
        this.list = res.data.list
      })
    }
  }
}
</script>
