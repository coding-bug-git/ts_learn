<template>
  <div class="common-layout">
    <el-container>
      <side-bar v-if="device==='desktop' || !isCollapse"/>
      <el-container direction="vertical">
        <!-- mask -->
        <div class="drawer-bg" v-show="maskshow" @click="maskClick"/>
        <header-bar/>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SideBar from '@/layout/sidebar/SideBar.vue'
import HeaderBar from '@/layout/headerbar/HeaderBar.vue'

import { useStore } from '@/store'
import { useWindowSize } from '@vueuse/core'

const store = useStore()
const { width, height } = useWindowSize()

const isCollapse = computed<boolean>(() => store.state.setting.sidebar.isCollapse)
const device = computed<string>(() => store.state.setting.device)
const WIDTH = 992

watchEffect(() => {
  if (width.value - 1 < WIDTH) {
    store.dispatch('setting/toggleDevice', 'mobile')
    store.dispatch('setting/toggleSidebar', true)
  } else {
    store.dispatch('setting/toggleDevice', 'desktop')
    store.dispatch('setting/toggleSidebar', false)
  }
})
const maskshow = computed(() => {
  return !isCollapse.value && device.value === 'mobile'
})
const maskClick = () => {
  store.dispatch('setting/toggleSidebar', !isCollapse.value)
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.module.scss";

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 50px;
  height: 50px;
  padding: 0;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.common-layout > .el-container {
  height: 100vh;
}

.el-container {
  position: relative;

  .drawer-bg {
    background-color: rgba($color: #000000, $alpha: 0.5);
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    // top: 0;
    left: 0px;
  }
}
</style>
