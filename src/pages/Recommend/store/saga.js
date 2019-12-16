import { all, fork, put, takeEvery, takeLatest, delay, select,call } from 'redux-saga/effects'

function* testSaga(keywords) {
	
}

// -------------------------------------watch--------------------------------------------------------

function* test() {
	yield takeLatest("test", action => testSaga(action.payload))
}

export default function* () {
	yield all([
		test()
  ])
}