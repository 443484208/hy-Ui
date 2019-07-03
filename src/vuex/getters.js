const getters= {
		doubleCountHello(state) {
			return state.Hello * 2
		},
		tripleCountWorld(state) {
			console.log(state)
			return state.World * 3
		}
}
export default getters
