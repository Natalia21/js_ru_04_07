import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import idGenerator from '../middlewares/idGenerator'

const enchancer = applyMiddleware(logger, idGenerator)

const store = createStore(reducer, {}, enchancer)

export default store
