<template>
    <div >
      <el-button>按钮</el-button>
        <div class="login">
          <span class="icon icon1"></span>
          <span class="icon icon2"></span>
          <span class="icon icon3"></span>
          <span class="icon icon4"></span>
        </div>
    </div>
</template>
<script>

export default {
  name: 'Login',
  data () {
    return {
      test: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  background: url('../../assets/test/wallhaven-1857.jpg');
  height: 100vh;
}
.icon {
  width: 50px;
  height: 50px;
  background: #000;
  display: inline-block;
  margin-right: 50px;
}
.icon1 {
   background: url('../../assets/sprites/cross_a.png');
}
.icon2 {
   background: url('../../assets/sprites/cross_h.png');
}
.icon3 {
   background: url('../../assets/sprites/cross_n.png');
}
.icon4 {
   background: url('../../assets/sprites/icon_1.png');
}
</style>
