import { handleActions } from 'redux-actions'

export const id = handleActions({
	CHANGE_SONGSLIST_ID: (state, action) => action.payload
}, 1)