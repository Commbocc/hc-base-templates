import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// import store from '../store'

import Hello from '@/components/Hello'


export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Hello
		}
	]
})
