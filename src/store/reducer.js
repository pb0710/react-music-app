import { combineReducers } from 'redux'
import * as search from './search/reducer'
import * as playlist from './playlist/reducer'
import * as menu from './menu/reducer'
import * as audio from './audio/reducer'
import page from './page/reducer'

export default combineReducers({
	search: combineReducers(search),
	playlist: combineReducers(playlist),
	menu: combineReducers(menu),
	audio: combineReducers(audio),
	page
})