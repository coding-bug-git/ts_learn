import { UserState } from '@/store/user/types'
import { ActionContext } from 'vuex'

import { dingLogin, getUserInfo } from '@/api/login'
import { setToken } from '@/utils/auth'

const state = (): UserState => ({
  userInfo: null,
  token: ''
})
// getters
const getters = {}

// actions
const actions = {
  DingLogin ({ commit, state }: ActionContext<UserState, any>, payload: any) {
    return new Promise((resolve, reject) => {
      dingLogin(payload).then((res: any) => {
        setToken(res.data.token)
        commit('SET_TOKEN', res.data.token)
        resolve(res.token)
      }).catch(error => {
        reject(error)
      })
    })
  },
  GetUserInfo ({ commit, state }: ActionContext<UserState, any>, payload: any) {
    return new Promise((resolve, reject) => {
      getUserInfo().then((res: any) => {
        commit('SET_USERINFO', res.data.userInfo)
        resolve(res.token)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

// mutations
const mutations = {
  saveCurrentUser (state: UserState, payload: any) {
    state.userInfo = payload
  },
  SET_TOKEN (state: UserState, payload: string) {
    state.token = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
