import { ActionContext } from 'vuex'
import { State } from 'vue'

const state = () => {
  return {
    sidebar: {
      isCollapse: false,
      isHide: false,
      transition: false
    },
    device: 'desktop'
  }
}

export type SettingState = ReturnType<typeof state>

const getters = {
  sidebarStatus (state: SettingState) {
    return state.sidebar.isCollapse
  }
}

const mutations = {
  TOGGLE_SIDEBAR (state: SettingState, payload: boolean) {
    state.sidebar.isCollapse = payload
  },
  TOGGLE_DEVICE (state: SettingState, payload: string) {
    state.device = payload
  }
}
const actions = {
  toggleSidebar ({ commit }: ActionContext<SettingState, State>, payload: boolean) {
    commit('TOGGLE_SIDEBAR', payload)
  },
  toggleDevice ({ commit }: ActionContext<SettingState, State>, payload: string) {
    commit('TOGGLE_DEVICE', payload)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
