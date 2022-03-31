
const state = () => {
  return {
    sidebar: {
      isCollapse: false
    }
  }
}

export type SettingState = ReturnType<typeof state>

const getters = {
  sidebarIsCollapse (state: SettingState) {
    return state.sidebar.isCollapse
  }
}

const mutations = {
  SET_SIDEBAR_COLLAPSE (state: SettingState, payload: boolean) {
    state.sidebar.isCollapse = payload
    console.log(state.sidebar.isCollapse)
  }
}
const actions = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
