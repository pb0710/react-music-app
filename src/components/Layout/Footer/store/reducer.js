import { combineReducers } from 'redux'
import playing from '../Playing/store/reducer'
import control from '../Control/store/reducer'
import operation from '../Operation/store/reducer'

export default combineReducers({
	playing,
	control,
	operation
})