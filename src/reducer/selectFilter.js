import {SET_SELECT_FILTER} from '../constants'

const selectedDefaut = []

export default (selected = selectedDefaut, action) => {
	const {type, payload} = action

	switch(type) {
		case SET_SELECT_FILTER:
			return payload.selected
	}
	return selected
}
