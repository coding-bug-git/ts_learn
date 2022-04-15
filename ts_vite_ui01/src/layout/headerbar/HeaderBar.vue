<template>
  <el-header>
    <div class="collapseBtn" @click="toggleSidebar">
      <el-icon>
        <fold v-if="!isCollapse"/>
        <expand v-if="isCollapse"/>
      </el-icon>
    </div>

    <div>header</div>
  </el-header>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'

const store = useStore()

const isCollapse = computed<boolean>(() => {
  return store.state.setting.sidebar.isCollapse
})

const toggleSidebar = () => {
  store.commit('setting/TOGGLE_SIDEBAR', !isCollapse.value)
}
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  flex-direction: row;
  align-items: center;

  .collapseBtn {
    padding: 0 15px;
    font-size: 20px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
