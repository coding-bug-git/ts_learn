import { createStore } from 'vuex'

import setting from './setting'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state: any) {
      state.count++
    }
  },
  modules: {
    setting
  }
})
export default store
