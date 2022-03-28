import Mock from 'mockjs'
import { AjaxResult } from '@/env'

console.log('mock mode~~~')
const Random = Mock.Random
const baseApi = import.meta.env.VITE_APP_BASE_API as string

const mock = (url: string, method: string, fn: Function) => {
  Mock.mock(baseApi + url, method, fn)
}

const ajaxResult: AjaxResult = {
  code: 200,
  msg: 'success',
  data: null
}

mock('/test11', 'get', () => {
  ajaxResult.data = {
    token: Random.string(32)
  }
  return ajaxResult
})

mock('/getCameraListByAreaId', 'get', ({ body }: any) => {
  const number = Random.integer(5, 20)
  const list = []
  for (let i = 0; i < number; i++) {
    const s = 'camera' + Random.integer(0, 100)
    list.push({
      cameraName: s,
      snapshot: Random.dataImage('360x300', s)
    })
  }

  ajaxResult.data = {
    cameraList: list
  }
  return ajaxResult
})

Mock.mock('/login', 'post', () => {
  ajaxResult.code = 400
  ajaxResult.msg = '验证码错误'
  return ajaxResult
})
