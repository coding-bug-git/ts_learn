import { InjectionKey } from 'vue'
import { State } from '@vue/runtime-core'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import user from '@/store/user'

export const key: InjectionKey<Store<State>> = Symbol('store_key')

export const store = createStore<State>({
  modules: {
    user
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
