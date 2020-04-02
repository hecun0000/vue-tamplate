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
        <el-table-column prop="name" label="角色名称"></el-table-column>
        <el-table-column prop="content" label="描述"></el-table-column>
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
    <product-dialog ref='ProductDialog'/>
  </div>
</template>

<script>
import { pagination } from '@/mixins'
import { getProductList } from '@/api/order/product'
import { ProductDialog } from './components'

export default {
  name: 'Role',
  components: {
    ProductDialog
  },
  mixins: [pagination], // 封装分页相关函数
  data () {
    return {
      listApi: getProductList, // 列表请求地址
      multipleSelection: [],
      searchForm: {}
    }
  },
  mounted () {
    this.getListData()
  },
  methods: {
    handleEdit (row) {
      this.$refs.ProductDialog.openDialog(row)
    },
    handleAdd () {
      this.$refs.ProductDialog.openDialog()
    },
    handleCheck (row) {
      this.$refs.ProductDialog.openDialog(row, 'check')
    }
  }
}
</script>
