import dd from 'dingtalk-jsapi'

dd.ready(async () => {
  const corpid = import.meta.env.VITE_APP_CORPID as string
  dd.runtime.permission.requestAuthCode({
    corpId: corpid // 企业id
  }).then(res => {

  })

  // store.dispatch('user/DingLogin', { code: result.code }).then(() => {
  //   router.push({ path: redirectUrl.value as string || '/' })
  // })
})

// 获取免登授权码
export function requestAuthCode (fn: Function) {
  dd.ready(async () => {
    const corpid = import.meta.env.VITE_APP_CORPID as string
    dd.runtime.permission.requestAuthCode({
      corpId: corpid // 企业id
    }).then(res => {
      fn(res)
    })
  })
}
