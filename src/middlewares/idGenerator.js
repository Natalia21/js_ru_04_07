import { ADD_COMMENT } from '../constants'

export default store => next => action => {
	const {type, payload} = action
	if (type == ADD_COMMENT) {
		payload.comment.id = new Date().getTime()
	}
	next(action)
}
