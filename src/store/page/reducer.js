import { combineReducers } from 'redux'
import * as recommend from './recommend/reducer'
import * as songslist from './songslist/reducer'

export default combineReducers({
	recommend: combineReducers(recommend),
	songslist: combineReducers(songslist)
})