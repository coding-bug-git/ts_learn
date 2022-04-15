// vuex.d.ts
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { SettingState } from './store/setting'

declare module '@vue/runtime-core' {
  // store state
  interface State {
    count: number
    setting: SettingState
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
