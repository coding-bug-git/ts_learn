<template>
  <el-aside
      :class="asideClass"
      :width="asideWide"
  >

    <logo-bar/>
    <el-scrollbar>
      <MenuBar/>
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">

import { useStore } from '@/store'
import LogoBar from './LogoBar.vue'
import MenuBar from './MenuBar.vue'

const store = useStore()
const isCollapse = computed<boolean>(() => {
  return store.state.setting.sidebar.isCollapse
})

const asideWide = computed(() => {
  return !isCollapse.value ? '200px' : '64px'
})
const asideClass = computed(() => {
  return !isCollapse.value ? 'sidebar-collapse' : 'sidebar-collapse-hide'
})

</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.module.scss";

.el-scrollbar {
  height: calc(100vh - 50px);
}

.el-scrollbar__bar.is-horizontal {
  display: none;
}

.el-aside {
  background-color: $base-menu-background;
  text-align: center;
  line-height: 200px;
  overflow: hidden;
  transition: all 0.3s;

  :deep(.el-menu) {
    background-color: $base-menu-background;
  }
}
</style>
