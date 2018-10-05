import {standardizeCMSData} from '../libs/utils'

export const state = () => ({
  staff: [],
  siteURL: process.env.siteURL + '/',
  endpoint: process.env.cms === 'drupal' ? '/staff?_format=json' : 'wp-json/wp/v2/staff?per_page=100',
  modalVisible: false,
  activeStaffId: false
})

export const getters = {
  activeStaffProfile (state) {
    return state.staff.find(item => item.id === state.activeStaffId)
  }
}

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('getStaff')
  },
  async getStaff ({commit, state}) {
    let response = await this.$axios.$get(`http://${state.siteURL}${state.endpoint}`)
    commit('setStaff', standardizeCMSData(response))
  }
}

export const mutations = {
  setStaff (state, payload) {
    state.staff = payload
  },
  setModalVisible (state, payload) {
    state.modalVisible = payload
  },
  setActiveStaffId (state, payload) {
    state.activeStaffId = payload
  }
}
