<template>
  <el-header>
    <div class="collapseBtn" @click="toggleSidebar">
      <el-icon>
        <fold v-if="!isCollapse" />
        <expand v-if="isCollapse" />
      </el-icon>
    </div>

    <div>header</div>
  </el-header>
</template>

<script lang="ts" setup>
import { SettingState } from '@/store/setting'
import { useStore } from 'vuex'

const store = useStore()

const isCollapse = computed<boolean>(() => {
  return (store.state.setting as SettingState).sidebar.isCollapse
})

const toggleSidebar = () => {
  store.commit('setting/SET_SIDEBAR_COLLAPSE', !isCollapse.value)
}
</script>

<style lang="scss">
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
