export default store => next => action => {
	console.log('______', action)
	console.log('______ state before', store.getState())
	next(action)
	console.log('______ state after', store.getState())
}
