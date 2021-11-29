<template>
  <div class="app-container">
    <el-form :inline="true" :model="carParkQuery" class="demo-form-inline">
      <el-form-item label="车场名称">
        <el-input v-model="carParkQuery.name" placeholder="车场名称"></el-input>
      </el-form-item>
      <el-form-item label="车场地址">
        <el-input v-model="carParkQuery.address" placeholder="车场地址"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="clear_formInline">清空</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getList()">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="output_excel()">导出Excel</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="dialogVisible_add = true">添加</el-button>
      </el-form-item>

    </el-form>
    <el-table :data="list"
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
          {{ scope.row.carNum }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit" @click = "editDataById(scope.row.id)" >修改</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        :current-page="page"
        :page-size="limit"
        :total="total"
        style="padding: 30px 0; text-align: center;"
        layout="total, prev, pager, next, jumper"
        @current-change="getList"
      />
    </div>

    <el-dialog
      title="添加框"
      :visible.sync="dialogVisible_add"
      >
      <span>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="停车场名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="车位数" prop="carNum">
          <el-input v-model="ruleForm.carNum"></el-input>
        </el-form-item>

        <el-form-item label="联系人名字" prop="contactPerson">
          <el-input v-model="ruleForm.contactPerson"></el-input>
        </el-form-item>

        <el-form-item label="联系人电话" prop="contactPhone">
          <el-input v-model="ruleForm.contactPhone"></el-input>
        </el-form-item>

        <el-form-item label="入口数" prop="entranceNum">
          <el-input v-model="ruleForm.entranceNum"></el-input>
        </el-form-item>

        <el-form-item label="出口数" prop="exitNum">
          <el-input v-model="ruleForm.exitNum"></el-input>
        </el-form-item>

        <el-form-item label="地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>

        <el-form-item label="车场图片" prop="image">
          <el-input v-model="ruleForm.image"></el-input>
        </el-form-item>

      </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm()">重 置</el-button>
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="编辑框"
      :visible.sync="dialogVisible_edit"
    >
      <span>
      <el-form :model="editForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="停车场名称" prop="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>

        <el-form-item label="车位数" prop="carNum">
          <el-input v-model="editForm.carNum"></el-input>
        </el-form-item>

        <el-form-item label="联系人名字" prop="contactPerson">
          <el-input v-model="editForm.contactPerson"></el-input>
        </el-form-item>

        <el-form-item label="联系人电话" prop="contactPhone">
          <el-input v-model="editForm.contactPhone"></el-input>
        </el-form-item>

        <el-form-item label="入口数" prop="entranceNum">
          <el-input v-model="editForm.entranceNum"></el-input>
        </el-form-item>

        <el-form-item label="出口数" prop="exitNum">
          <el-input v-model="editForm.exitNum"></el-input>
        </el-form-item>

        <el-form-item label="地址" prop="address">
          <el-input v-model="editForm.address"></el-input>
        </el-form-item>

        <el-form-item label="车场图片" prop="image">
          <el-input v-model="editForm.image"></el-input>
        </el-form-item>

      </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm()">重 置</el-button>
        <el-button type="primary" @click="editDataById_2()">确 定</el-button>
      </span>
    </el-dialog>

  </div>

</template>

<script>
import FileSaver from "file-saver"
import XLSX from "xlsx"
import { delete_test, search_test, add_test, excel_output, update_test, searchById } from '@/api/parkingInfo'



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

      list:[
        {
        id:1,
        name:'青岛路机器人停车库',
        address:'湖北省/武汉市/江岸区/湖北省武汉市江岸区青岛路7号',
        num:100
        }
      ],

      carParkQuery: {
        name:'',
        address:''
      },

      page: 1,
      limit:5,
      total:0,

      formInline:{
      },

      dialogVisible_add: false ,
      dialogVisible_edit: false,

      ruleForm: {
        name: '',
        carNum: '',
        contactPerson: '',
        contactPhone: '',
        entranceNum:'',
        exitNum :'',
        address:'',
        image:''
      },
      rules: {
        name: [
          { required: true, message: '请输入车场名称', trigger: 'blur' }
        ],
        carNum: [
          { required: true, message: '请输入xx', trigger: 'blur' }
        ],
        contactPerson: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        contactPhone: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        entranceNum: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        exitNum: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        image: [
          { required: true, message: '请输入', trigger: 'blur' }
        ]
      },

      editForm:{},

    }
  },
  methods: {
    getList(page = 1) {
      this.page = page
      search_test(this.page,this.limit, this.carParkQuery).then(res=> {
        this.list = res.data.records
        this.total = res.data.total
        console.log(this.list)
        console.log(this.total)
      })
    },

    clear_formInline(){
      this.formInline = {user : '' , address: ''}
    },

    //
    editDataById(id){
      // this.editForm = vm.list[id]
      this.dialogVisible_edit = true
      searchById(id).then(res=>{
        this.editForm = res.data.carPark
      })
    },

    editDataById_2(){
      update_test(this.editForm).then(res=> {
        this.$message({
          type: 'success',
          message: '编辑成功!'
        });
      })
      this.dialogVisible_edit = false
      this.editForm = {}
      this.getList()
    },

    removeDataById(id){
      this.$confirm('此操作将永久删除记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delete_test(id)
          .then(response => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getList()
          })
      })
    },

    submitForm() {
      add_test(this.ruleForm).then(res=> {
        this.$message({
          type: 'success',
          message: '添加成功!'
        });
      })
      this.dialogVisible_add = false
      this.ruleForm = {}
      this.getList()
    },

    resetForm() {
      this.ruleForm = {}
    },

    output_excel(){
      window.location =
        'http://47.113.191.6:1102/carPark/list/download'
    },
    // output_excel_2(){
    //   excel_output().then(res=>{
    //     let blob = new Blob([res], { type: 'application/xlsx' });
    //     let url = window.URL.createObjectURL(blob);
    //     const link = document.createElement('a'); //创建a标签
    //     link.href = url;
    //     link.download = '通用订单信息.xlsx'; //重命名文件
    //     link.click();
    //     URL.revokeObjectURL(url);
    //   })
    // },



  },//method


  created() {
    this.getList()
  }
}
</script>
