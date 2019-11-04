const getters= {
		doubleCountHello(state) {
			return state.Hello * 2
		},
		tripleCountWorld(state) {
			return state.World * 3
		}
}
export default getters
