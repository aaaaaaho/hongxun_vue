<template>
  <div class="app-container">

    <el-form :inline="true" :model="carParkUserQuery" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="carParkUserQuery.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input v-model="carParkUserQuery.plate" placeholder="车牌号"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="carParkUserQuery.phone" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetCarParkQuery">清空</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchUserByCondition()">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="output_excel()">导出Excel</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="dialogVisible_add=true">添加</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="list">
      <el-table-column align="center" label="id" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="手机号"   align="center">
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column label="车牌号"  align="center">
        <template slot-scope="scope">
          {{ scope.row.plate }}
        </template>
      </el-table-column>
      <el-table-column label="有效期"  align="center">
        <template slot-scope="scope">
          {{ scope.row.validTime }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" icon="el-icon-edit" @click ="editDataById(scope.row.id)" >修改</el-button>
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
        @current-change="getHandle"
      />
    </div>

    <el-dialog
      title="添加框"
      :visible.sync="dialogVisible_add"
    >
      <span>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="车位数" prop="carNum">
          <el-input v-model="ruleForm.carNum"></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>

        <el-form-item label="车牌号" prop="plate">
          <el-input v-model="ruleForm.plate"></el-input>
        </el-form-item>

        <el-form-item label="所属车场" prop="rightGroup">
          <el-input v-model="ruleForm.rightGroup"></el-input>
        </el-form-item>

        <el-form-item label="有效期" prop="validTime">
          <el-input v-model="ruleForm.validTime"></el-input>
        </el-form-item>

        <el-form-item label="车场ID" prop="carParkId">
          <el-input v-model="ruleForm.carParkId"></el-input>
        </el-form-item>

      </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetRuleForm()">重 置</el-button>
        <el-button type="primary" @click="submitAddUserForm()">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="编辑框"
      :visible.sync="dialogVisible_edit"
    >
      <span>
      <el-form :model="editForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>

        <el-form-item label="车位数" prop="carNum">
          <el-input v-model="editForm.carNum"></el-input>
        </el-form-item>


        <el-form-item label="手机号" prop="phone">
          <el-input v-model="editForm.phone"></el-input>
        </el-form-item>

        <el-form-item label="车牌号" prop="plate">
          <el-input v-model="editForm.plate"></el-input>
        </el-form-item>

        <el-form-item label="所属车场" prop="rightGroup">
          <el-input v-model="editForm.rightGroup"></el-input>
        </el-form-item>

        <el-form-item label="有效期" prop="validTime">
          <el-input v-model="editForm.validTime"></el-input>
        </el-form-item>

        <el-form-item label="车场ID" prop="carParkId">
          <el-input v-model="editForm.carParkId"></el-input>
        </el-form-item>

      </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetRuleForm()">重 置</el-button>
        <el-button type="primary" @click="submitAddUserForm()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  addCarParkUser,
  carParkUserFindAll, carParkUserSearchById,
  deleteCarParkUserById, editUpdateCarParkUser, searchById, selectConditionCarParkUser, update_test
} from '@/api/parkingInfo'
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
      list:[],
      carParkUserQuery:{},
      ruleForm: {
        name:'',
        carNum:'',
        phone:'',
        plate:'',
        rightGroup:'',
        carParkId:'',
        validTime:'',
      },

      rules: {
        name: [
          { required: true, message: '请输入车场名称', trigger: 'blur' }
        ],
        carNum: [
          { required: true, message: '请输入xx', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        plate: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        rightGroup: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        carParkId: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        validTime: [
          { required: true, message: '请输入', trigger: 'blur' }
        ]
      },

      editForm:{},
      page: 1,
      limit:5,
      total:0,

      dialogVisible_add: false ,
      dialogVisible_edit: false,
    }
  },
  created() {
    this.getHandle()
  },
  methods: {
    getHandle() {
      carParkUserFindAll().then(res => {
        this.list = res.data.items
        this.total = res.data.items.length
        console.log(res)
      })
    },

    resetRuleForm() {
      this.ruleForm = {}
    },
    resetCarParkQuery(){
      this.carParkUserQuery = {}
    },

    output_excel(){
      window.location =
        'http://47.113.191.6:1102/carPark/user/download'
    },

    removeDataById(id){
      this.$confirm('此操作将永久删除记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteCarParkUserById(id)
          .then(response => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getList()
          })
      })
    },

    outputExcel(){
      window.location =
        'http://47.113.191.6:1102/carPark/user/download'
    },

    submitAddUserForm(){
      addCarParkUser(this.ruleForm).then(res=>{
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        })
      this.dialogVisible_add = false
      this.ruleForm = {}
      this.getList()
    },

    searchUserByCondition(page = 1){
      this.page = page
      selectConditionCarParkUser(this.page,this.limit, this.carParkUserQuery).then(res=> {
        this.list = res.data.items
        console.log(this.list)
      })
    },

    editDataById(id){
      // this.editForm = vm.list[id]
      this.dialogVisible_edit = true
      carParkUserSearchById(id).then(res=>{
        this.editForm = res.data.carPark
      })
    },

    editDataById_2(){
      editUpdateCarParkUser(this.editForm).then(res=> {
        this.$message({
          type: 'success',
          message: '编辑成功!'
        });
      })
      this.dialogVisible_edit = false
      this.editForm = {}
      this.getHandle()
    },


  }
}
</script>
