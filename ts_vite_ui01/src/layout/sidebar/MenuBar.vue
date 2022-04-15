<template>
  <el-menu
      default-active="1-1"
      class="el-menu"
      :collapse="isCollapse"
      :text-color="cssStyles.menuColor"
      :active-text-color="cssStyles.menuColorActive"
      :collapse-transition="false"
      @open="handleOpen"
      @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location/>
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title>
          <span>Group One</span>
        </template>
        <el-menu-item v-for="i in 11" :key="i" :index="`1-${i}`">item {{ i }}</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon>
        <Menu/>
      </el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon>
        <document/>
      </el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <setting/>
      </el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import styles from '@/assets/styles/variables.module.scss'
import { useStore } from '@/store'

const cssStyles = styles as Styles
// console.log(styles.menuColor)
const store = useStore()
const isCollapse = computed(() => {
  return store.state.setting.sidebar.isCollapse
})
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
} */
@import "@/assets/styles/variables.module.scss";

.el-menu {
  background-color: $base-menu-background;
  // background-color: white;
  border: none;

  :deep(.el-menu-item:hover),
  :deep(.el-sub-menu__title:hover) {
    background-color: $base-sub-menu-hover;
  }
}
</style>
