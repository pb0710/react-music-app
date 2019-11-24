import { combineReducers } from 'redux'
import header from '../Header/store/reducer'
import content from '../Content/store/reducer'

export default combineReducers({
	header,
	content
})