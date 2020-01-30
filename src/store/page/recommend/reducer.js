import { handleActions } from 'redux-actions'

export const test11 = handleActions({
	GET_LIST_STAT1111US: (state, action) => action.payload
}, false)