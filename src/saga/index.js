import { all, fork, put, takeEvery, takeLatest, delay, select,call } from 'redux-saga/effects'
import * as api from 'api'

function* updateKeywordsSaga(keywords) {
	yield delay(500)
	yield searchSaga(keywords)
}

function* searchSaga(keywords) {
	if (keywords === '') return
	const { result } = yield api.fetchSearchSuggest(keywords)
	yield put({
		type: 'SAVE_SEARCH_RESULT',
		payload: result
	})
}

// -------------------------------------watch--------------------------------------------------------

function* updateKeywordsWatch() {
	yield takeLatest("FETCH_SEARCH_RESULT", action => updateKeywordsSaga(action.payload))
}

function* selectHotSearchWatch() {
	yield takeEvery("SELECT_HOT_SEARCH", action => searchSaga(action.payload))
}

function* searchWatch() {
	yield takeEvery("SEARCH", action => searchSaga(action.payload))
}

export default function* () {
	yield all([
		fork(updateKeywordsWatch),
		fork(selectHotSearchWatch),
  	fork(searchWatch)
  ])
}