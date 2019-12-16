import { combineReducers } from 'redux'
import nav from '../Nav/store/reducer'
import search from '../Search/store/reducer'

export default combineReducers({
	nav,
	search
})