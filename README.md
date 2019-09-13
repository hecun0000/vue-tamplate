# vue 项目模板

## 运行项目  

```
项目启动
npm run dev
```

其他常用命令：
```
安装插件
npm install // 需要外网环境

项目打包 
npm run build

分析打包体积
npm run analyz

新建组件 模板页面
npm run com

新建views中的页面  
npm run page

```

## 项目结构

```
- src                   // 开发目录
    - api               // 接口管理目录
    - assets            // 图片资源目录
    - mixins            // 组件内可复用
    - utils             // 公共资源目录(函数库、请求封装)
        - env.js            // 环境配置
    - components        // 公共组件目录
    - plugins           // 插件目录（ElementUI配置）
    - fliters           // 公共过滤器
    - router            // 路由
    - store             // Vuex管理目录
    - style             // 公共样式目录
    - views             // 页面目录
```

## 开发步骤   

1. 配置路由  

路由配置目录：src/router/index.js  

```js
// 有权限路由
export const constantRoutes = [
  // ...
]
// 无权限路由
export const asyncRoutes = [
  // ..
]
```
常用配置参数： 

```js
/**
 * 路由配置
 * name:'router-name'             路由名称 必填 不能与其他路由冲突
 * path:'router-path'             路由路径 必填 不能与其他路径冲突
 * hidden: true                   是否在侧边栏隐藏，默认不隐藏
 * redirect: noRedirect           重定向路由 一般在有会默认填写为子路由的第一个path

 * meta : {
    title: 'title'               侧栏显示的title名称
    icon: 'svg-name'             侧栏中显示的icon名称
    auth: true                   该页面权限标识
  }
 */
```
配置完成后可需新建所配置页面 

具体配置可参考 src/router/index.js

2. 新建页面     
要求： 

- 每个页面需要指定name:  
- name大驼峰命名，不能与其他页面重复  
     
后续可以使用name名称进行组件参数传递

后续会补充相关模板页面。。。

```js
export default {
  name: 'Role'
}
```

若赋值 相关页面请删除无用的函数


两个简单的相关命令：
```
新建组件 模板页面
npm run com

新建views中的页面  
npm run page
```


3. 接口对接     

接口配置地址统一在 src/api 目录下， 根据模块名新建    

比如: 角色管理页面 页面地址 /views/system/role     
则相关api地址为 api/system/role.js中     

下面列出配置示例：  

```js
import Request from '@/utils/request'

export const getRoleList = data => Request.get('/system/role/list', data)

export const getRoleListById = ({ id, ...params }) => Request.get(`/system/${id}/list`, params)
```
Request 中已封装 get,post,put,delete 等相关方法，根据要求自行引用

关于接口对接： 

在页面中引入相关接口：

```js
import { getRoleList } from '@/api/system/role'
// ...
methods: {
    /**
     * async await 方式 推荐
     */
    async getListData () {
      const data = {
        current: this.currentPage,
        pageSize: this.pageSize,
      }
      const res = await this.listApi(data)
      this.tableData = res.items
    },
    /**
     * promise 方式
     */
    async getListData () {
      const data = {
        current: this.currentPage,
        pageSize: this.pageSize,
      }
      this.listApi(data).then(res => {
         this.tableData = res.items
      })
    },
}
// ...
```
在接口请求中， 可使用 `async/await` 和 `promise` 两种方式， 推荐使用 `async/await` 方式



## 页面分页相关方法封装  

封装组件可查看 /src/mixins/pagination.js   

使用：  
在组件中引用，并注册  

```js 
import { pagination } from '@/mixins'  

export default {
  // ...
  mixins: [pagination], // 封装分页相关函数
  // ...
}
```
引用组件中   

|参数|要求|
|--| --|
|listApi|必填 存放需要请求的地址|
|searchForm|必填 用于页面中筛选表单的数据存放，也可作为接口数据直接发给后台|
|listApiParmas|非必填 在后台传递参数，searchForm不能满足需要转数据格式时，作为接口数据直接发给后台|  

在初始化调用：

一般情况： 
```js
 mounted () {
    this.getListData()
  }
```
复杂情况，参数需要处理格式后调用分页

```js
 data () {
    return {
      listApi: getRoleList, // 列表请求地址
      searchForm: {
        // ...
      },
      listApiParmas: {} // 必填，处理后的参数存放

    }
  },
  mounted () {
    this.handleSearch()
  },
  methods: {
    handleSearch() {
      // 此处处理数据  
      //  并将值扶着给 this.listApiParmas
      this.listApiParmas = ...
      this.getListData()
    }
  }
```



相关例子可参考： 资源管理 views/system/role/index.vue  


## 使用代理解决跨域问题   

修改 代理配置信息。 相关文件为：vue.config.js    

```js
 devServer: {
    proxy: {

    }
},
```
修改完成后，重启项目生效     

## 权限管理   

后续补充...

## 代码规范  

目前已开启 `eslint` 代码规范  
在提示报错后请及时修改  

格式化命令  

- npm run lint 对全局项目中代码进行格式化修改

单个文件格式化，可使用 webstorm 中 右键中 `Fix ESlint Problems` 进行格式化

在报错后，工具修改不了的不规范代码请自行修改


## 注意事项

- 上传代码时，请删除 `debugger`  
- 切勿在 `console.log` 中调用函数 （项目打包会统一删除console.log）


## 更多自定义配置

1. 路由模式配置：    
- hash     hash模式
- history  需要后台进行重定向配置   

2. 是否开启gzip：  

目前在打包时，已经配置gzip压缩，需后台修改 nginx相关配置

3. 环境配置：   
配置文件 /src/utils/env.js 中修改   

其中：  
- development 为开发环境 
- production 为生产环境   



4. 字体与图标：  

支持 iconfont 
支持 svg   

5. filter：显示文字的转化 

使用方式： 

```html
<template>
  <div>
    {{ status | filterStatus }}
  </div>
</template>
```

6. 全局过滤器：  
在 /src/filters/index.js 进行导出，会自动配置为全局过滤器  
组件内过滤器：  
比如： 

```js
export default {
  name: 'Role',
  filters: {
    filterStatus (status) {
      return status === 1 ? '启用' : ' 禁用'
    }
  }
}
```

7. 全局组件： 

定义在src/components/global 文件中  

可建立文件并在文件目录下， 建立 index.js 并将其导出，则会注册为全局组件

可参考 src/components/global 文件写法  

同时可以利用 `npm run com` 生成模板文件在进行修改     




## 安装插件库介绍   

- axios 请求封装库
- dayjs 时间格式化处理
- echarts 可视化图表
- element-ui UI库
- html2canvas 将html转化为图片
- js-cookie 操作cookie
- jsencrypt 加解密
- nprogress 加载滚动条
- number-precision 数字运算
- path-to-regexp 处理文件路径
- screenfull 全屏
- v-charts element 封装的eChart
- v-viewer 图片放大查看工具
- vue vue
- vue-awesome-swiper 轮播图
- vue-count-to 数字滚动下过
- vue-friendly-iframe iframe封装
- vue-router 路由库
- vuedraggable 拖拽库
- vuex 状态管理