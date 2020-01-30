import { all, fork, put, takeEvery, delay, select,call } from 'redux-saga/effects'
import * as api from 'api'

function* fetchAudioDetail(playingId) {
	try {
		const { data } = yield api.fetchSongsUrl(playingId)
		yield put({
			type: 'UPDATE_AUDIO_DETAIL',
			payload: data[0]
		})
	} catch (e) {
		console.error('获取歌曲URL失败', e)
	}
}

// -------------------------------------watch--------------------------------------------------------

function* fetchAudioDetailSaga() {
	yield takeEvery('FETCH_AUDIO_DETAIL', action => fetchAudioDetail(action.payload))
}

export default function* () {
	yield all([
		fetchAudioDetailSaga()
  ])
}