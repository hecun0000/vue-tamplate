<template>
  <div class="layout" :class="{ 'close': sidebarCollapse }">
    <sidebar />
    <div class="layout-main-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>
<script>
import { sidebar, navbar, appMain } from './components'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  components: {
    sidebar,
    navbar,
    appMain
  },
  computed: {
    ...mapGetters(['sidebarCollapse'])
  }
}
</script>
<style lang="scss">
@import "../../styles/layout";
</style>
