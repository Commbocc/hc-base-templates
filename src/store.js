import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// modules
import { nav } from '@/modules/hc-nav'

export const store = new Vuex.Store({
  modules: {
    nav
  },
  state: {
    site_title: 'Hillsborough County, Fl',
    base_url: 'http://hflgov.net'
  },
  getters: {},
  mutatons: {},
  actions: {},
})
