<template>
  <h1>login</h1>
  11
  <!--<pre>{{ redirectUrl }}</pre>-->

</template>

<script setup lang="ts">
import { useStore } from '@/store'
import dd from 'dingtalk-jsapi'
import { requestAuthCode } from '@/utils/ddUtils'

const route = useRoute()
const router = useRouter()
const store = useStore()
const redirectUrl = ref(route.query && route.query.redirect)

ElMessage.info('this is login')
const state = reactive({ token: {} })
const corpid = import.meta.env.VITE_APP_CORPID as string
ElMessage.info(corpid)

store.dispatch('user/DingLogin', { code: '11' }).then(() => {
  router.push({ path: redirectUrl.value as string || '/' })
})

// 获取免登授权码
requestAuthCode((res: any) => {

})

dd.ready(async () => {
  const corpid = import.meta.env.VITE_APP_CORPID as string

  const result = await dd.runtime.permission.requestAuthCode({ corpId: corpid })

  store.dispatch('user/DingLogin', { code: result.code }).then(() => {
    router.push({ path: redirectUrl.value as string || '/' })
  })
})

</script>
