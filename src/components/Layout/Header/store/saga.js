import { all, fork } from 'redux-saga/effects'
import navSaga from '../Nav/store/saga'
import searchSaga from '../Search/store/saga'

export default function* () {
	yield all([
		fork(navSaga),
		fork(searchSaga)
  ])
}