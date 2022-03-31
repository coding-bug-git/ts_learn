<template>
  <el-aside :width="width">
    <logo-bar />
    <el-scrollbar>
      <MenuBar />
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
import { SettingState } from '@/store/setting'
import { useStore } from 'vuex'
import LogoBar from './LogoBar.vue'
import MenuBar from './MenuBar.vue'

const store = useStore()
const isCollapse = computed<boolean>(() => {
  return (store.state.setting as SettingState).sidebar.isCollapse
})
const width = computed(() => {
  return !isCollapse.value ? '200px' : '64px'
})
</script>

<style lang="scss">
.el-scrollbar {
  height: calc(100vh - 50px);
}

.el-scrollbar__bar.is-horizontal {
  display: none;
}

.el-aside {
  transition: width 0.3s;
}
</style>
