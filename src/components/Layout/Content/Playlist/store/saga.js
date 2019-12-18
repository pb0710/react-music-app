import { all, fork, put, takeEvery, takeLatest, delay, select } from 'redux-saga/effects'
import * as api from 'api'

function* updatePlaylistAndPlayingId(songs, playingId) {
	const state = yield select()
	const playlistContent = state.content.playlist.entities

	// 新增的音乐放到列表首位，并去重
	const playlistNoRepeat = playlistContent.filter(item => songs.filter(song => song.id !== item.id).length > 0)

	yield put({
		type: 'UPDATE_PLAYLIST',
		payload: [...songs, ...playlistNoRepeat]
	})

	// 播放列表首位的音乐默认正在播放
	yield put({
		type: 'UPDATE_PLAYING_ID',
		payload: playingId
	})
}

function* addToPlaylist(arg) {

	// 区分添加到播放列表歌曲 是单曲还是批量的歌单
	if (Array.isArray(arg)) {
		yield updatePlaylistAndPlayingId(arg, arg[0].id)

	} else {

		try {
			const { songs } = yield api.fetchSongsDetail(arg)
			yield updatePlaylistAndPlayingId(songs, arg)

		} catch (e) {
			console.error(e);
		}
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