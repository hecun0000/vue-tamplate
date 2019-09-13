<template>
  <div>
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>

export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default () {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('size-change', val)
    },
    handleCurrentChange (val) {
      this.$emit('current-change', val)
    }
  }
}
</script>
