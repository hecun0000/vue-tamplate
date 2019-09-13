<template>
  <div class="role common-table">
    <div class="handle-box">
      <div class="handle-left"></div>
      <div class="handle-right">
        <el-button type="primary" @click="handleAdd">新增</el-button>
        <el-button type="danger">批量删除</el-button>
      </div>
    </div>
    <div class="table-box">
      <el-table
        ref="table"
        v-loading="loading"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="角色名称">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column prop="content" label="描述"></el-table-column>
        <el-table-column label="状态" show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.status | filterStatus}}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleCheck(scope.row)">查看</el-button>
            <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <pagination
        :total="total"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <role-dialog ref='RoleDialog'/>
  </div>
</template>
<script>
import { pagination } from '@/mixins'
import { getRoleList } from '@/api/system/role'
import { RoleDialog } from './components'
export default {
  name: 'Role',
  components: {
    RoleDialog
  },
  mixins: [pagination], // 封装分页相关函数
  data () {
    return {
      listApi: getRoleList, // 列表请求地址
      multipleSelection: [],
      searchForm: {

      }
    }
  },
  mounted () {
    this.getListData()
  },
  filters: {
    filterStatus (status) {
      return status === 1 ? '启用' : ' 禁用'
    }
  },
  methods: {
    handleSelectionChange () {
      console.log('handleSelectionChange')
    },
    handleEdit (row) {
      console.log('编辑按钮')
      this.$refs.RoleDialog.openDialog(row)
    },
    handleAdd () {
      this.$refs.RoleDialog.openDialog()
    },
    handleCheck (row) {
      this.$refs.RoleDialog.openDialog(row, 'check')
    }
  }
}
</script>
