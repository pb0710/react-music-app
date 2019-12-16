import { combineReducers } from 'redux'
import songslist from '#/Songslist/store/reducer'
import playlist from '../Playlist/store/reducer'

export default combineReducers({
	playlist,
	songslist
})