<template>
  <el-config-provider :locale="locale" :size="size" :z-index="zIndex">

    <router-view />
  </el-config-provider>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>

</style>
