import {DELETE_ARTICLE, SET_DATE_FILTER, SET_SELECT_FILTER} from '../constants'

export function deleteArticle(id) {
	return {
		type: DELETE_ARTICLE,
		payload: { id }
	}
}

export function setDateFilter(range) {
	return {
		type: SET_DATE_FILTER,
		payload: { 
			range
		}
	}
}

export function setSelectFilter(selected) {
	return {
		type: SET_SELECT_FILTER,
		payload: { 
			selected
		}
	}
}
