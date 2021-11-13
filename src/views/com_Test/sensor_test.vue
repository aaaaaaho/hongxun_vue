<template>
  <el-row>
    <el-col :span="40" v-for="item in this.list" style="padding: 10px" >
        <el-card :body-style="{padding:'10px'}">
          <img :src= url_1 class="image">
          <div>传感器编号: {{item.num}}</div>
          <br/>
          <div>最后上传时间: {{item.time}}</div>
          <br/>
          <div>上传状态: {{ item.status }}</div>
          <br/>
        </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { sensor_test } from '@/api/sensor'
export default {
  data(){
    return {
      url_1 : require('../com_Test/static/闪光灯.png'),
      url_2 : require('../com_Test/static/直方框.png'),
      list :[
        {
          num: '10',
          time: '2021-11-03 12:13:35',
          status: '1',
        },
        {
          num: '11',
          time: '2021-11-03 12:13:35',
          status: '0',
        },
      ]
    };
  },
  methods:{
    getHandle(){
      sensor_test().then(res => {
        this.list = res.data.list
      })
    }
  }
}
</script>

<style scoped>

</style>
