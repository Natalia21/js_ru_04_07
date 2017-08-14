import {SET_DATE_FILTER} from '../constants'

const filter = {
	from: null,
	to: null
}

export default (filterVals = filter, action) => {
	const {type, payload} = action

	switch(type) {
		case SET_DATE_FILTER:
			return payload.range
	}
	return filterVals
}
