<template>

  <h1>camera</h1>

  <el-row>
    <el-col
      v-for="(camera,index) in state.cameraList"
      :key="index"
      :xs="24"
      :sm="12"
      :lg="6"
    >
      <el-card :body-style="{ padding: '0px' }"
               style="margin: 10px;">
        <div style="position: relative;">
          <img
            :src="camera.snapshot"
            class="image"
          />
          <el-icon
            @click="showPlayer"
            class="play-btn" :size="60" style="color: rgba(1,1,1,0.5)">
            <video-play></video-play>
          </el-icon>
        </div>

        <div style="padding: 14px">
          <span>{{ camera.cameraName }}</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <video-player :is-show="isPlayerShow"></video-player>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import VideoPlayer from '@/views/camera/videoPlayer.vue'
import { VideoPlay } from '@element-plus/icons-vue'

const currentDate = ref(new Date())

const route = useRoute()
console.log(route.params)
console.log(route.query)
const state = reactive({ cameraList: [] })
let isPlayerShow = ref(false)
const showPlayer = () => {
  isPlayerShow.value = !isPlayerShow.value
}
request({
  url: '/getCameraListByAreaId',
  method: 'get',
  data: {
    areaId: route.params.areaId
  }
}).then(res => {
  console.log(res)
  state.cameraList = res.data.cameraList
})
</script>
<style scoped>
.play-btn {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
