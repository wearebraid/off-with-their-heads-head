import {standardizeCMSData} from '../libs/utils'

export const state = () => ({
  staff: [],
  siteURL: process.env.siteURL + '/',
  endpoint: process.env.cms === 'drupal' ? '#no-endpoint' : 'wp-json/wp/v2/staff?per_page=100'
})

export const getters = {

}

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('getStaff')
  },
  async getStaff ({commit, state}) {
    let response = await this.$axios.$get(`http://${state.siteURL}${state.endpoint}`)
    commit('set_staff', standardizeCMSData(response))
  }
}

export const mutations = {
  set_staff (state, payload) {
    state.staff = payload
  }
}
