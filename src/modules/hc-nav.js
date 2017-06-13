import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export const nav = {
  state: {
    logo_src: 'http://commbocc.github.io/sitecore_designs/images/logo.png',
    nav_items: []
  },
  getters: {},
  mutations: {
    setNavItems (state, data) {
      state.nav_items = data
    }
  },
  actions: {
    fetchNavItems ({ commit }) {
      const response = require('../assets/data/nav.json')
      commit('setNavItems', response)

      // return Vue.http.get('/sitecore/api/ssc/item/110D559F-DEA5-42EA-9C1C-8A5DF7E70EF9/children').then(response => {
      //   commit('setNavItems', response.body)
      // }, err => {
      //   console.error(err)
      // })
    }
  }
}
