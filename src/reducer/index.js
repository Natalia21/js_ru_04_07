import {combineReducers} from 'redux'
import articles from './articles'
import dateFilter from './dateFilter'
import selectFilter from './selectFilter'

export default combineReducers({
	articles,
	dateFilter,
	selectFilter
})
