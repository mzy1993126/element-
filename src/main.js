import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import filecss from './assets/css/file.css'
import routes from './router/routes'
import store from './vuex/store'
import Vuex from 'vuex'
import echarts from 'echarts'
import axios from './api/axios.js'

import Mock from './mock'
Mock.bootstrap();


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)


// 将API方法绑定到全局
Vue.prototype.$api = axios;
Vue.prototype.$echarts = echarts;

const router = new VueRouter({
	mode:'history',
    routes
})

router.beforeEach((to, from, next) => {
//	if (to.path == '/login') {
//	    sessionStorage.removeItem('user');
//	}
//	let user = JSON.parse(sessionStorage.getItem('user'));
//	if (!user && to.path != '/login') {
//	    next({ path: '/login' })
//	} else {
//	    next()
//	}

	if(to.path == '/login'){
		next()
	}
	if(to.path != '/login'){
		next()
	}
	window.document.title = to.name;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

