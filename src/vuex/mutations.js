const mutations={
		updateHello(state, data) {
			state.Hello = data
		},
		updateWorld(state, data) {
			state.World = data
		},
		updateloginUser(state, data) {
			state.loginUser =state.loginUser +1
		},
		upsearchType(state, data) {
			state.searchType = data
		},
		
}
export{
	mutations
}
