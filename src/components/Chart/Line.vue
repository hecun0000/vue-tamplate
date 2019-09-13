<template>
  <div>
    <ve-line v-bind="$attrs"/>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  name: 'Line',
  components: {
    VeLine
  }
}
</script>
