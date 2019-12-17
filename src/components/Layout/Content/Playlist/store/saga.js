import { all, fork, put, takeEvery, takeLatest, delay, select,call } from 'redux-saga/effects'
import * as api from 'api'

function* addToPlaylist(id) {
	try {
		const { songs } = yield api.fetchSongsDetail(id)
		
		yield put({
			type: 'UPDATE_PLAYLIST',
			payload: songs[0]
		})
	} catch(e) {
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