import {combineReducers} from 'redux'
import articles from './articles'
import comments from './comments'
import dateFilter from './dateFilter'
import selectFilter from './selectFilter'

export default combineReducers({
	articles,
	comments,
	dateFilter,
	selectFilter
})
