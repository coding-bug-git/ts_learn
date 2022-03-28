<template>
  <el-dialog v-model="parent.setupState.isPlayerShow" title="Warning" width="80%" center>

    <video src="/i/movie.ogg" controls="controls" width="800" height="600">
      your browser does not support the video tag
    </video>
    <template #footer>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
const parent = getCurrentInstance()?.parent as any
console.log(parent.setupState.isPlayerShow)

</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
