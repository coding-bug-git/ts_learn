<template>
  <div class="logo">
    <img src="@/assets/logo.png" />
    <h2 v-if="!isCollapse" class="title">Vue Admin</h2>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { SettingState } from '@/store/setting'

const store = useStore()

const isCollapse = computed<boolean>(() => {
  return (store.state.setting as SettingState).sidebar.isCollapse
})
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  padding: 14px;
  height: 50px;
  overflow: hidden;
  white-space: nowrap;
  img {
    height: 24px;
    margin: 0 8px;
  }
  .title {
    font-size: 20px;
    color: white;
  }
}
</style>
