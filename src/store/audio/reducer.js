import { handleActions } from 'redux-actions'

export const playingId = handleActions({
	UPDATE_PLAYING_ID: (state, action) => action.payload
}, 0)

export const audioDetail = handleActions({
	UPDATE_AUDIO_DETAIL: (state, action) => action.payload
}, {})

export const isPlaying = handleActions({
	UPDATE_PLAYING_STATUS: (state, action) => action.payload
}, false)