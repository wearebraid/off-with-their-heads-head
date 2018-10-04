import {standardizeCMSData} from '../libs/utils'

export const state = () => ({
  staff: [],
  siteURL: process.env.siteURL + '/',
  endpoint: process.env.cms === 'drupal' ? '#no-endpoint' : 'wp-json/wp/v2/staff?per_page=100',
  modalVisible: false,
  activeStaffSlug: false,
  route: {}
})

export const getters = {
  activeStaffProfile (state) {
    if (state.route && state.route.params && state.route.params.slug) {
      return state.staff.find(item => item.slug === state.route.params.slug)
    }
    return false
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
  setActiveStaffSlug (state, payload) {
    state.activeStaffSlug = payload
  }
}
