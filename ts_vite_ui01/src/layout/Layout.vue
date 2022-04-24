<template>
  <div class="common-layout">
    <el-container>
      <side-bar :class="sideClass"/>
      <el-container direction="vertical">
        <!-- mask -->
        <div class="drawer-bg" v-show="maskshow" @click="maskClick"/>
        <header-bar/>
        <el-main>

          <div :class="sideClass" style="width: 100px;height: 100px;border: 1px red solid" @click="trans"></div>

        </el-main>
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
const transition = computed<boolean>(() => store.state.setting.sidebar.transition)
const device = computed<string>(() => store.state.setting.device)
const WIDTH = 992

watchEffect(() => {
  if (device.value === 'mobile' && !isCollapse.value) {
    store.dispatch('setting/sidebarTransition', { transition: false })
  }

  if (width.value - 1 < WIDTH) {
    store.dispatch('setting/toggleDevice', 'mobile')
    store.dispatch('setting/sidebarTransition', { transition: true })
  } else {
    store.dispatch('setting/toggleDevice', 'desktop')
  }
})
const maskshow = computed(() => {
  return !isCollapse.value && device.value === 'mobile'
})
const maskClick = () => {
  store.dispatch('setting/toggleSidebar', !isCollapse.value)
}

const sideClass = reactive({
  sideHide: isCollapse.value,
  sideShow: !isCollapse.value,
  transition: transition.value,
  mobile: device.value === 'mobile'
})
const trans = () => {
  sideClass.sideHide = !sideClass.sideHide
  sideClass.sideShow = !sideClass.sideShow
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.module.scss";

.sideHide {
  transform: translate3d(-200px, 0, 0);
  transition: all 0.3s;
}

.sideShow {
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
}

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
