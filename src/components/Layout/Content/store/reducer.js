import { combineReducers } from 'redux'
import playlist from '../Playlist/store/reducer'
import recommend from '#/Recommend/store/reducer'
import songslist from '#/Songslist/store/reducer'

export default combineReducers({
	recommend,
	playlist,
	songslist
})