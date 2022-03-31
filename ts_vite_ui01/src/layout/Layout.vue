<template>
  <div class="common-layout">
    <el-container>
      <side-bar />
      <el-container direction="vertical">
        <header-bar />
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SideBar from './sidebar/SideBar.vue'
import HeaderBar from './headerbar/HeaderBar.vue'

import Cookies from 'js-cookie'

// Cookies.set('test', JSON.stringify({ a: 111, b: 333 }))
Cookies.set('test', '123')

setTimeout(() => {
  const t = Cookies.get('test')
  console.log(t)
})

</script>

<style lang="scss">
@import "@/assets/styles/variables.module.scss";
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 50px;
  height: 50px;
  padding: 0;
}

.el-aside {
  background-color: $base-menu-background;
  text-align: center;
  line-height: 200px;
  overflow: hidden;
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
</style>
