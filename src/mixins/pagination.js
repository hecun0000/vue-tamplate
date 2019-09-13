/**  列表分页以及相关分页函数封装
  *  使用在每个组件中引入
  *  并在mixins中注册
  *
  *  使用要求：
  *   在引用页面中：
  *     data中需要定义参数：
  *       listApi 必填 存放需要请求的地址
  *       searchForm 必填 用于页面中筛选表单的数据存放，也可作为接口数据直接发给后台
  *       listApiParmas 非必填 在后台传递参数，searchForm不能满足需要转数据格式时，作为接口数据直接发给后台
  *     template中：
  *       采用固定模板方式基本不变
  *         table中 data值为 table， 分页组件不动，可参考角色管理页面 :views/system/role/index.vue
  *     数据请求初始化 在 mounted 调用 getListData()
  *
  *
  *
  *
  *
  */

export default {
  data () {
    return {
      tableData: [], // table中的数据
      currentPage: 1, // 当前页
      total: 0, // 总页数
      pageSize: 10, // 煤业多少条数据
      pageSizes: [10, 20, 30, 50], // 页面中pageSizes
      loading: false // 列表中loading
    }
  },
  methods: {
    /**
     *获取列表中数据
     *统一接口地址为 this.listApi 需要早引用中组件中定义
     *
     */
    async getListData () {
      // 判断若有listApIParams 则优先从里面取参数 否则在
      const params = this.listApiParmas ? this.listApiParmas : this.searchForm
      const data = {
        current: this.currentPage,
        pageSize: this.pageSize,
        ...params
      }
      this.loading = true
      const res = await this.listApi(data)
      this.loading = false
      console.log(res)
      this.tableData = res.items
    },
    /**
     *分页回调
     *
     * @param {*} 改变后的值
     */
    handleCurrentChange (val) {
      console.log(val, 'handleCurrentChange')
      this.currentPage = val
      this.getListData()
    },
    /**
     *调整pageSizes后回调
     *
     * @param {*} val 改后的值
     */
    handleSizeChange (val) {
      console.log(val, 'handleSizeChange')
      this.pageSize = val
      this.getListData()
    }
  }
}
