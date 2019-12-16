import { all, fork } from 'redux-saga/effects'
import playlistSaga from '../Playlist/store/saga'
import recommendSaga from '#/Recommend/store/saga'
import songslistSaga from '#/Songslist/store/saga'

export default function* () {
	yield all([
		fork(playlistSaga),
		fork(recommendSaga),
		fork(songslistSaga)
  ])
}