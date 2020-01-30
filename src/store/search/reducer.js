import { handleActions } from 'redux-actions'

export const keywords = handleActions({
	SEARCH: (state, action) => action.payload
}, '')

export const suggest = handleActions({
	SAVE_SEARCH_RESULT: (state, action) => action.payload
}, '')