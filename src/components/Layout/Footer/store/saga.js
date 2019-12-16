import { all, fork } from 'redux-saga/effects'
import playingSaga from '../Playing/store/saga'
import controlSaga from '../Control/store/saga'
import operationSaga from '../Operation/store/saga'

export default function* () {
	yield all([
		fork(playingSaga),
		fork(controlSaga),
		fork(operationSaga)
  ])
}