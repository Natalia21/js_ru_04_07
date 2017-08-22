import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers';

export default (comments = arrToMap(defaultComments), action) => {
	const {type, payload} = action

	switch(type) {
		case ADD_COMMENT:
			return {...comments,
					[payload.comment.id]: payload.comment
				}
	}

	return comments
}
