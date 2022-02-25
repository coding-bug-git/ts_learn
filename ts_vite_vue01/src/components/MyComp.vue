<template>
  <div>
    <h1>my comp</h1>
    <h2>msg: {{ msg }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: String
  },
  setup (props) {
    return {}
  }
})
</script>

<style scoped>

</style>
