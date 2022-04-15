import { InjectionKey, State } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import setting from './setting'

export const store = createStore<any>({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state: State) {
      state.count++
    }
  },
  actions: {},
  modules: {
    setting
  }
})

export const key: InjectionKey<Store<State>> = Symbol('storekey')

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
