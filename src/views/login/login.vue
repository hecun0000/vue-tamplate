<template>
  <div class="login">
    <div class="header">
      <div class="inner-header">
        <div class="login-container">
          登录组件
        </div>
      </div>

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
    </div>
    <div class="content">
      <p>2019 | HECUN | TEST</p>
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

.login-container {
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 6px;
  margin-bottom: -100px;
  box-shadow: 0 2px 12px 0 rgba(36, 123, 188, 0.88);
}

.login {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .header {
    position: relative;
    text-align: center;
    background: linear-gradient(
      60deg,
      rgba(84, 58, 183, 1) 0%,
      rgba(0, 172, 193, 1) 100%
    );
    color: white;
    flex: 1;
    display: flex;
    flex-direction: column;
    .inner-header {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.content {
  position: relative;
  height: 10vh;
  text-align: center;
  background-color: white;
  p {
    font-family: "Lato", sans-serif;
    letter-spacing: 1px;
    font-size: 14px;
    color: #333333;
    line-height: 14vh;
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
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 20vh;
  }
  h1 {
    font-size: 24px;
  }
}
</style>
