<template>
  <div class="navbar">
    <i class="iconfont icon-indent collapse" :class="sidebarCollapse? 'in': 'out'" @click="SET_SIDEBAR_COLLAPSE"></i>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'navbar',
  computed: {
    ...mapGetters(['sidebarCollapse'])
  },
  methods: {
    ...mapMutations('app', [
      'SET_SIDEBAR_COLLAPSE'
    ])
  }
}
</script>
