import { all, fork } from 'redux-saga/effects'
import searchSaga from './search/saga'
import menuSaga from './menu/saga'
import audioSaga from './audio/saga'
import playlistSaga from './playlist/saga'
import pageSaga from './page/saga'

export default function* () {
	yield all([
		fork(searchSaga),
		fork(menuSaga),
		fork(audioSaga),
		fork(playlistSaga),
		fork(pageSaga)
  ])
}