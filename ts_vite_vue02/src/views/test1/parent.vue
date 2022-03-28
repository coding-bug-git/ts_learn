
<template>
  <children ref="childRef" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import children from './children.vue'
const childRef = ref<InstanceType<typeof children>>()
onMounted(() => {
  console.log(childRef.value) //  output:  {}
})
</script>
