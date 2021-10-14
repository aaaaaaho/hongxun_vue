<template>
  <div class="app-container">

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="车主">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input v-model="formInline.plate" placeholder="车牌号"></el-input>
      </el-form-item>

      <el-form-item label="入场时间">
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
      <el-table-column label="车牌号"  align="center">
        <template slot-scope="scope">
          {{ scope.row.plate }}
        </template>
      </el-table-column>
      <el-table-column label="授权分组" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.group }}
        </template>
      </el-table-column>
      <el-table-column label="入场时间"  align="center">
        <template slot-scope="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
      <el-table-column label="时长"  align="center">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
      <el-table-column label="车主"  align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column  label="图片" align="center">
        <template slot-scope="scope">
          <el-image style="width: 30px; height: 30px" :src="scope.row.url" :preview-src-list="[scope.row.url]">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
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
import { parkingRecord_presence } from '@/api/parkRecord'
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
      list: [
        {
          id: 1,
          name: 'wk',
          plate: '闽A77518',
          group: '鸿迅停车',
          time: '2h',
          date: '2021-6-5',
          url : ''
        },
        {
          id: 2,
          name: 'wk_2',
          plate: '苏D88888',
          group: '无',
          time: '15min',
          date: '2021-6-6',
          url: ''
        }
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
  },
  created() {
    this.getHandle()
  },
  methods: {
    getHandle() {
      parkingRecord_presence().then(res => {
        this.list = res.data.list
        console.log(res.data.list)
      })
    },
    getImgUrl(src){
      return require("@/assets/carPic/" +src +'.jpg') //动态请求项目内固定路径图片
    },


  }
}
</script>
