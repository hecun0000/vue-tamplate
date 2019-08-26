<template>
  <div class="sidebar">
    <div class="logo-box">
      <img src="http://static.hecun.site/hecun.321c947a.jpg" class="logo" alt="logo" />
    </div>
    <el-menu
      default-active="1-1"
      class="sidebar-menu"
      text-color="#cfcfcf"
      :active-text-color="variables.menuActiveText"
      :background-color="variables.menuBg"
      :collapse="sidebarCollapse"
      :unique-opened="false"
      :collapse-transition="false"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4" class="nest-menu">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import variables from '@/styles/_var.scss'
import { mapGetters } from 'vuex'
export default {
  name: 'sidebar',
  data () {
    return {
      isCollapse: true
    }
  },
  computed: {
    ...mapGetters(['sidebarCollapse']),
    variables () {
      return variables
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
