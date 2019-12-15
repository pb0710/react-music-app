import { all, fork } from 'redux-saga/effects'
import searchSaga from './searchSaga'

export default function* () {
	yield all([
		fork(searchSaga)
  ])
}