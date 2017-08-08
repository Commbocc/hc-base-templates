import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex)
Vue.use(VueResource)

import navigation from './navigation'

export default new Vuex.Store({
	modules: {
		navigation
	}
})
