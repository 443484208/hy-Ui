import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import {mutations} from './mutations'
import actions from './actions'
import getters from './getters'
//1使用export导出需要{}，与此相对使用import导入也需要{}
//2使用export default 导出不需要{}，与此相对使用import导入也不需要{}
Vue.use(Vuex);
const store = new Vuex.Store({
	actions: actions,
	// this.$store.dispatch('actionsCount')
	state: state,
	//	状态
	//使用username() {
	//				return this.$store.state.username;
	//		}

	//this.username=this.$store.state.username
	mutations: mutations,
	//方法
	//使用this.$store.commit('updateHello', val);
	getters: getters,
	//计算方法
	//使用this.$store.getters.doubleCountHello;
})
export default store;
