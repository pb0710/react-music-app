import { all, fork, put, takeEvery, takeLatest, delay, select } from 'redux-saga/effects'
import * as api from 'api'

function* updateKeywords(keywords) {
	yield delay(200)
	yield search(keywords)
}

function* search(keywords) {
	if (keywords === '') return
	const { result } = yield api.fetchSearchSuggest(keywords)  
	// 判断是空对象，清空result
	if (Object.keys(result).length === 0) {
		yield put({
			type: 'CLEAR_SEARCH_RESULT'
		})
	} else {
		yield put({
			type: 'SAVE_SEARCH_RESULT',
			payload: result
		})
	}
}

// -------------------------------------watch--------------------------------------------------------

function* updateKeywordsSaga() {
	// 防抖
	yield takeLatest("FETCH_SEARCH_RESULT", action => updateKeywords(action.payload))
}

function* selectHotSearchSaga() {
	yield takeEvery("SELECT_HOT_SEARCH", action => search(action.payload))
}

function* searchSaga() {
	yield takeEvery("SEARCH", action => search(action.payload))
}

export default function* () {
	yield all([
		updateKeywordsSaga(),
		selectHotSearchSaga(),
  	searchSaga()
  ])
}