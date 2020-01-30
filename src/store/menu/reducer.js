import { handleActions } from 'redux-actions'

export const selected = handleActions({
	CHANGE_DRAWER_SELECTED: (state, action) => action.payload
}, 'find_music')