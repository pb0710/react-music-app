import { handleActions } from 'redux-actions'

export const isShow = handleActions({
	CHANGE_PLAYLIST_STATUS: (state, action) => action.payload
}, false)

export const entities = handleActions({
	UPDATE_PLAYLIST: (state, action) => action.payload
}, [])