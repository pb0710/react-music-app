import { all, fork } from 'redux-saga/effects'
import recommendSaga from './recommend/saga'
import songslistSaga from './songslist/saga'

export default function* () {
	yield all([
		fork(recommendSaga),
		fork(songslistSaga)
  ])
}