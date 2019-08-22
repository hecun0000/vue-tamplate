<template>
  <div class="login">
    <div class="login-container">
      <img src="http://static.hecun.site/hecun.321c947a.jpg" class="logo" alt="logo" />
      <div>
        <h2 class="title">XXX后台管理登录</h2>
        <el-form
          :model="form"
          status-icon
          :rules="rules"
          size="medium"
          ref="form"
          class="demo-ruleForm"
        >
          <el-form-item prop="userName">
            <el-input
              type="password"
              v-model="form.userName"
              autocomplete="off"
              placeholder="请输入用户名"
              prefix-icon="iconfont icon-user"
            ></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input
              type="password"
              v-model="form.passWord"
              placeholder="请输入密码"
              autocomplete="off"
              prefix-icon="iconfont icon-lock"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="block-button" @click="submitForm('ruleForm')">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="main-box">
      <div class="waves-container">
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <div class="content">
        <p>2019 | HECUN | TEST</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'change' }
        ],
        passWord: [{ required: true, message: '请输入密码', trigger: 'change' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$router.push({ name: 'dashboard' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 rgba(36, 123, 188, 0.88);
  padding: 20px 40px;
  color: $color-common;
  text-align: center;

  .title {
    font-size: $font-size-md;
    color: $color-primary;
    font-family: "Lato", sans-serif;
    font-weight: normal;
    margin: 20px 0 30px;
  }
  .logo {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin-top: 20px;
    &:hover {
      transform: rotate(666turn);
      transition-delay: 1s;
      transition-property: all;
      transition-duration: 59s;
      transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
    }
  }
  .block-button {
    display: block;
    width: 100%;
  }
}

.login {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .main-box {
    background: linear-gradient(
      60deg,
      rgba(84, 58, 183, 1) 0%,
      rgba(0, 172, 193, 1) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
    width: 100vw;
  }
  .content {
    height: 10vh;
    text-align: center;
    background-color: white;
    p {
      font-family: "Lato", sans-serif;
      letter-spacing: 1px;
      font-size: $font-size-base;
      color: $color-common;
    }
  }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 20vh;
  }
}

/* Animation */

.waves {
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 160px;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
