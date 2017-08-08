// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import Bootstrap from 'bootstrap-sass'

import App from './App'
import Navigation from '@/components/Navigation/Index'

Vue.config.productionTip = false

/* eslint-disable no-new */
if (document.getElementById("hc-navbar")) {
	new Vue({
		el: '#hc-navbar',
		store,
		template: '<Navigation/>',
		components: { Navigation }
	})
}

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
