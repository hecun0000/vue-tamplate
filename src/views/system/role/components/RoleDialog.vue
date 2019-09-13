<template>
  <div class="roleDialog">
    <el-dialog :visible.sync="visible" custom-class="dialog-md-width">
      <div class="dialog-title" slot="title">{{ title }}</div>
      <div class="dialog-body">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="Form"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="two-column-dialog">
            <div class="left-column-item">
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </div>
            <div class="right-column-item">
              <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
      <div class="dialog-footer">
        <el-button type="primary" @click="handleSave">保 存</el-button>
        <el-button type="primary" @click="handleReset">重 置</el-button>
        <el-button @click="handleCancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'RoleDialog',
  data () {
    return {
      title: '编辑角色',
      visible: false,
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    openDialog (row, type = 'edit') {
      this.visible = true
      if (!row) {
        // 新增
        this.type = 'add'
        this.title = '新增角色'
      } else if (type !== 'check') {
        // 编辑
        this.type = 'edit'
        this.title = '编辑角色'
      } else {
        // 查看
        this.type = 'check'
        this.title = '查看角色'
      }
    },
    handleCancel () {
      this.visible = false
    },
    handleReset () {
      // ..
    },
    handleSave () {
      this.$refs.Form.validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
