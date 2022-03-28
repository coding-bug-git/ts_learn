import request from '@/utils/request'

interface dingLoginData {
  username?: string
  password?: string
  code: string
  uuid?: string
}

export const dingLogin = (data: dingLoginData) => {
  return request({
    url: '/dingLogin',
    headers: {
      isToken: false
    },
    method: 'post',
    data
  })
}

// 获取用户详细信息
export function getUserInfo () {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}
