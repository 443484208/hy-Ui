const actions={
	actionSomemution(context) {
	  setTimeout(() => {
	    context.commit('updateloginUser') 
	  }, 1000)
	 }
}
export default actions
