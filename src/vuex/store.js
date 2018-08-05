import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const start = {
	LoginUser:{}
}

const getters = {
	
}

const mutations = {
	User(start,user){
		start.LoginUser = user;
	}
}

const actions = {
	
}


export default new Vuex.Store({
	start,
	getters,
	mutations,
	actions
})

