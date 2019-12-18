import { all, fork, put, takeEvery, takeLatest, delay, select, call } from 'redux-saga/effects'
import * as api from 'api'

function* addToPlaylist(...ids) {
	const state = yield select()
	const playlistContent = state.content.playlist.entities

	try {
		const { songs } = yield api.fetchSongsDetail(...ids)

		// 新增的音乐放到列表首位，并去重
		const playlistNoRepeat = playlistContent.filter(item => songs.filter(song => song.id !== item.id).length > 0)
		console.log('new', [...songs, ...playlistNoRepeat])

		yield put({
			type: 'UPDATE_PLAYLIST',
			payload: [...songs, ...playlistNoRepeat]
		})

		// 播放列表首位的音乐默认正在播放
		yield put({
			type: 'UPDATE_PLAYING_ID',
			payload: ids[0]
		})

	} catch (e) {
		console.error(e);
	}
}

// -------------------------------------watch--------------------------------------------------------

function* addToPlaylistSaga() {
	yield takeEvery('ADD_MUSIC_TO_PLAYLIST', action => addToPlaylist(action.payload))
}

export default function* () {
	yield all([
		addToPlaylistSaga()
  ])
}