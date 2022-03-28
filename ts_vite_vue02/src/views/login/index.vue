<template>
  <h1>login</h1>
  <pre>{{ route }}</pre>

  <!--<pre style="text-align: left">{{ state.userInfo.data }}</pre>-->
</template>

<script lang="ts">

// import { dingLogin } from '@/api/login'
// import dd from 'dingtalk-jsapi'

export default defineComponent({
  setup () {
    const route = useRoute()
    // const store = useStore()
    const redirectUrl = ref('')
    ElMessage.info('this is login')

    return { route }
  }
})
// export default defineComponent({
//   setup () {
//     ElMessage.info('this is login')
//     let url = ref(window.location.href)
//     const state = reactive({ token: {} })
//     // const store = useStore()
//     const redirectUrl = ref('')
// watch()
// ElMessage.info(import.meta.env.VITE_APP_CORPID as string)
// const corpid = import.meta.env.VITE_APP_CORPID as string
//
// state.userInfo = await dingLogin({ code: 'result.code' })
// ElNotification({
//   title: 'Title',
//   message: h('i', { style: 'color: teal' }, JSON.stringify(state.userInfo))
// })

// const result = await dd.runtime.permission.requestAuthCode({ corpId: corpid })

// 获取免登授权码
// dd.ready(async () => {
//   const corpid = import.meta.env.VITE_APP_CORPID as string
//
//   ElMessage.info(corpid)
//
//   const result = await dd.runtime.permission.requestAuthCode({ corpId: corpid })
//
//   store.dispatch('user/DingLogin', { code: result.code }).then(() => {
//     router.push({ path: this.redirect || '/' }).catch(() => {
//     })
//   }).catch(() => {
//   })
//
//   state.token = await dingLogin({ code: result.code })
// })
//
//     return { state, url }
//   }
// })

</script>

<style lang="scss">
</style>
